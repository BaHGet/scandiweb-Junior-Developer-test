<?php

namespace App\Models;

use App\Models\Product;
use App\Database;
use App\Utilities\HttpResponse;

class Book extends Product
{
  use ProductQueries;

  public function __construct($sku, $name, $price, $type, protected float $weight)
  {
    parent::__construct($sku, $name, $price, $type);
  }

  public function getAttributes(): array
  {
    return [
      'sku' => $this->sku,
      'name' => $this->name,
      'price' => $this->price,
      'weight' => $this->weight,
    ];
  }

  public static function getAll(): array | null
  {
    try {
      $books = self::findAll('book');
      return $books;
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
      $sql = "DELETE FROM book WHERE sku = :sku";
      $stmt = $dbConn->prepare($sql);
      $stmt->execute(['sku' => $sku]);
      return HttpResponse::deleted('Product deleted successfully');
    } catch (\Exception $e) {
      self::trowDbError($e);
      return false;
    }
  }
}
