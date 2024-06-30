<?php

namespace App\Models;

use App\Database;
use App\Utilities\HttpResponse;

trait ProductQueries
{
  public function save()
  {
    $data = $this->getAttributes();
    $dbTable = $this->type;

    $db = new Database();
    $dbConn = $db->makeConnection();

    $sqlValueString = join(', ', array_map(fn ($item) => ":" . $item, array_keys($data)));
    $sql = "INSERT INTO $dbTable VALUES ($sqlValueString)";
    $stmt = $dbConn->prepare($sql);
    try {
      $stmt->execute($data);
      HttpResponse::added('Product added successfully');
    } catch (\Exception $e) {
      HttpResponse::dbError($e->getMessage());
    }
  }

  public static function findAll(string $dbTable)
  {
    $db = new Database();
    $dbConn = $db->makeConnection();

    $sql = "SELECT * FROM $dbTable";
    $stmt = $dbConn->query($sql);
    $products = $stmt->fetchAll(\PDO::FETCH_ASSOC);
    $array = $products;
    for($p = 0; $p < count($products); $p++) {
      unset($array[$p]['sku'], $array[$p]['type'], $array[$p]['name'], $array[$p]['price']);
      $keys = array_keys($array[$p]);
      $attributes = [];
      for($f = 0; $f < count($keys); $f++) {
        $attributes[$f]['name'] = $keys[$f];
        $attributes[$f]['value'] = $array[$p][$keys[$f]];
      }
      $products[$p] = [
        'sku' => $products[$p]['sku'],
        'name' => $products[$p]['name'],
        'price' => $products[$p]['price'],
        'attribute' => $attributes,
      ];
    }
    return array_map(fn ($p) => $p += ['type' => $dbTable], $products);
  }


  public static function trowDbError(\Exception $e)
  {
    HttpResponse::dbError($e->getMessage());
  }
}
