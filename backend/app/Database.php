<?php

namespace App;

use PDO;
use PDOException;
use Dotenv\Dotenv;

class Database
{
  private $pdo;
  
  public function __construct()
  {
    $dotenv = Dotenv::createImmutable(__DIR__ . '/../');
    $dotenv->load();
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
