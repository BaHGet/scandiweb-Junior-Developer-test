<?php

namespace App\Models;

abstract class Product
{
  public function __construct(
    protected string $sku,
    protected string $name,
    protected float $price,
    protected string $type,
  ) { }

  abstract protected function save();
  abstract protected function getAttributes();
  abstract protected static function getAll();
  abstract protected static function findAll(string $dbTable);

  abstract protected static function delete(string $sku);
}
