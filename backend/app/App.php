<?php

namespace App;

error_reporting(E_ALL);
ini_set('display_errors', 1); // Set it to 0 in production

use Dotenv\Dotenv;
use App\Utilities\Headers;
use Bramus\Router\Router;
use App\Controllers\Controller;

class App
{
    private static function loadEnvVariables(): void
    {
        $dotenv = Dotenv::createImmutable(dirname(__DIR__));
        $dotenv->safeLoad();
    }

    private static function setRoutes(): void
    {
        $router = new Router();
        $router->setNamespace('App\Controllers');
        $router->get('/', Controller::class . ':getProducts');
        $router->post('/addProduct', Controller::class . ':addProduct');
        $router->post('/massDelete', Controller::class . ':deleteProducts');
        $router->run();
    }

    public static function run(): void
    {
        Headers::set();
        self::loadEnvVariables();
        self::setRoutes();
    }
}