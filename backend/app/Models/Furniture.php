<?php

namespace App\Models;

use App\Models\Product;
use App\Database;
use App\Utilities\HttpResponse;

class Furniture extends Product
{
  use ProductQueries;
  public function __construct(
    $sku,
    $name,
    $price,
    $type,
    protected float $height,
    protected float $width,
    protected float $length,
  ) {
    parent::__construct($sku, $name, $price, $type);
  }

  public function getAttributes()
  {
    return [
      'sku' => $this->sku,
      'name' => $this->name,
      'price' => $this->price,
      'length' => $this->length,
      'width' => $this->width,
      'height' => $this->height,
    ];
  }

  public static function getAll()
  {
    try {
      $furnitures = self::findAll('furniture');
      return $furnitures;
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
      $sql = "DELETE FROM furniture WHERE sku = :sku";
      $stmt = $dbConn->prepare($sql);
      $stmt->execute(['sku' => $sku]);
      return HttpResponse::deleted('Product deleted successfully');
    } catch (\Exception $e) {
      self::trowDbError($e);
      return false;
    }
  }
}
