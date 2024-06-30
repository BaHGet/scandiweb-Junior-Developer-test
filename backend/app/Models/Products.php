<?php

namespace App\Models;

use App\Database;
use App\Models\Dvd;
use App\Models\Book;
use App\Models\Furniture;
use App\Models\ProductQueries;
use App\Utilities\HttpResponse;
use App\Utilities\ProductAttributes;


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
        
        return json_encode($allProducts);
      } catch (\Exception $e) {
        return HttpResponse::dbError($e->getMessage());
      }
  }

  public function add($productData)
  {
    $type=$productData['type'];
    $keys = array_keys($productData);
    $class = "App\\Models\\" . ucfirst($type);
    $attributes =ProductAttributes::Attributes[strtoupper($type)];
    $data = [
      'sku' => $productData['sku'],
      'name' => $productData['name'],
      'price' => $productData['price'],
      'type' => $productData['type'],
    ]; 
    for($f = 0; $f < count($keys); $f++){
      if(in_array($keys[$f], $attributes)){
        echo $keys[$f];
        echo '<br/>';
        // print_r($keys[$f]);
        // print_r($productData[$keys[$f]]);
        $data[$keys[$f]] = $productData[$keys[$f]];
      }
    }
    $product = new $class(...array_values($data)); 
    
    try{
      $product->save();
      return $product;
    }
    catch(\Exception $e){
      return HttpResponse::dbError($e->getMessage());
    }
  }

  public function delete($productData)
  {
    $type=$productData['type'];
    $keys = array_keys($productData);
    $class = "App\\Models\\" . ucfirst($type);
    $attributes =ProductAttributes::Attributes[strtoupper($type)];
    $data = [
      'sku' => $productData['sku'],
      'name' => $productData['name'],
      'price' => $productData['price'],
      'type' => $productData['type'],
    ]; 
    for($f = 0; $f < count($keys); $f++){
      if(in_array($keys[$f], $attributes)){
        $data [$keys[$f]] = $productData[$keys[$f]];
      }
    }
    $product = new $class(...array_values($data)); 
    try {
      $product->delete($productData['sku']);
    } catch (\Exception $e) {
      return HttpResponse::dbError($e->getMessage());
    }
  }
}
