<?php

namespace App\Models;

use App\Models\Product;

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

  public function getAttributes(): array
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

  public static function getAll(): array | null
  {
    try {
      $furnitures = self::findAll('furniture');
      return $furnitures;
    } catch (\Exception $e) {
      self::trowDbError($e);
      return null;
    }
  }
}
