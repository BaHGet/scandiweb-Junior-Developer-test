<?php

namespace App\Models;

use App\Models\ProductTrait;
use App\Models\Product;

class Dvd extends Product
{
  use ProductQueries;

  public function __construct($sku, $name, $price, $type, protected float $size)
  {
    parent::__construct($sku, $name, $price, $type);
  }

  public function getAttributes(): array
  {
    return [
      'sku' => $this->sku,
      'name' => $this->name,
      'price' => $this->price,
      'size' => $this->size,
    ];
  }

  public static function getAll(): array | null
  {
    try {
      $dvds = self::findAll('dvd');
      return $dvds;
    } catch (\Exception $e) {
      self::trowDbError($e);
      return null;
    }
  }
}
