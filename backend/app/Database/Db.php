<?php

namespace App\Database;

use PDO;
use PDOException;

class Db
{
  private  $pdo;
  
  public function __construct()
  {
    $host = $_ENV['DB_HOSTNAME'];
    $user = $_ENV['DB_USERNAME'];
    $db = $_ENV['DB_NAME'];
    $pwd = $_ENV['DB_PASSWORD'];
    $dsn = 'mysql:host=' . $host . ';dbname=' . $db;
    try {
        $this->pdo = new PDO($dsn, $user, $pwd);
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        die('Database connection failed: ' . $e->getMessage());
    }
  }

  public function makeConnection()
  {
    return $this->pdo;
  }
}
