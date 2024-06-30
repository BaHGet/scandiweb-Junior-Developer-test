<?php

declare(strict_types=1);

namespace App\Models;

use App\Database\Db;
use App\Utilities\HttpResponse;
use App\Utils\ValidationSchema;

trait ProductQueries
{
  public function save(): void
  {
    $data = $this->getAttributes();
    $dbTable = $this->type;

    // TODO: add validation

    $db = new Db();
    $dbConn = $db->makeConnection();

    $sqlValueString = join(', ', array_map(fn ($item) => ":" . $item, array_keys($data)));
    $sql = "INSERT INTO $dbTable VALUES ($sqlValueString)";
    $stmt = $dbConn->prepare($sql);
    try {
      $stmt->execute($data);
      HttpResponse::added();
    } catch (\Exception $e) {
      HttpResponse::dbError($e->getMessage());
    }
  }

  public static function findAll(string $dbTable): array
  {
    $db = new Db();
    $dbConn = $db->makeConnection();

    $sql = "SELECT * FROM $dbTable";
    $stmt = $dbConn->query($sql);
    $products = $stmt->fetchAll(\PDO::FETCH_ASSOC);

    return array_map(fn ($p) => $p += ['type' => $dbTable], $products);
  }

  public static function trowDbError(\Exception $e)
  {
    HttpResponse::dbError($e->getMessage());
  }
}
