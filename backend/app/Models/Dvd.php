<?php

namespace App\Models;

use App\Models\Product;
use App\Database;
use App\Utilities\HttpResponse;

class Dvd extends Product
{
  use ProductQueries;

  public function __construct($sku, $name, $price, $type, protected float $size)
  {
    parent::__construct($sku, $name, $price, $type);
  }

  public function getAttributes()
  {
    return [
      'sku' => $this->sku,
      'name' => $this->name,
      'price' => $this->price,
      'size' => $this->size,
    ];
  }

  public static function getAll()
  {
    try {
      $dvds = self::findAll('dvd');
      return $dvds;
    } catch (\Exception $e) {
      self::trowDbError($e);
      return null;
    }
  }

  public static function delete(string $sku)
  {
    try {
      $db = new Database();
      $dbConn = $db->makeConnection();
      $sql = "DELETE FROM dvd WHERE sku = :sku";
      $stmt = $dbConn->prepare($sql);
      $stmt->execute(['sku' => $sku]);
      return HttpResponse::deleted('Product deleted successfully');
    } catch (\Exception $e) {
      self::trowDbError($e);
      return false;
    }
  }
}
