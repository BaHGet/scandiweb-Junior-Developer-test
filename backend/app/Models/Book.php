<?php

namespace App\Models;

use App\Models\ProductTrait;
use App\Models\Product;

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
}
