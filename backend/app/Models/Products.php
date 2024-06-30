<?php

namespace App\Models;

use App\Database\Db;
use App\Models\Dvd;
use App\Models\Book;
use App\Models\Furniture;
use App\Utilities\HttpResponse;

class Products
{
  public function get()
  {
    try {
        $dvds = Dvd::getAll();
        $books = Book::getAll();
        $furnitures = Furniture::getAll();
        $allProducts = array_merge($dvds, $books, $furnitures);

        // Sort products by sku value
        usort($allProducts,  fn ($a, $b) =>  strcmp($a['sku'], $b['sku']));

        http_response_code(200);
        echo json_encode($allProducts);
        return;
      } catch (\Exception $e) {
        HttpResponse::dbError($e->getMessage());
        return;
      }
  }

  public function add()
  {
    try {
      $data = $_POST;
      print_r($data);
      $floats = ['price','size','weight','height', 'width', 'length'];
      $keys = array_keys($data);
      foreach ($floats as $f) {
        in_array($f, $keys) && $data[$f]  = (float) $data[$f];
      }

      $class = "App\\Models\\" . ucfirst($data['type']);
      $product = new $class(...array_values($data));
      $product->save();
    } catch (\Exception $e) {
      HttpResponse::dbError($e->getMessage());
      return;
    }
  }

  public function delete()
  {
    try {
      $db = new Db();
      $dbConn = $db->makeConnection();
      $data = $_POST;

      foreach (array_keys($data) as $db) {
        $skus = implode(',', array_map(fn ($item) => "'$item'", $data[$db]));
        $sql = "DELETE FROM $db WHERE sku IN ($skus)";
        $stmt = $dbConn->prepare($sql);
        $stmt->execute();
      }
      HttpResponse::deleted();
    } catch (\Exception $e) {
      HttpResponse::dbError($e->getMessage());
    }
  }
}
