<?php

namespace App;

use App\Utilities\Headers;

// Setup headers
Headers::set();

// Register routes
use App\Router;

$routes = require __DIR__ . '/config/routes.php';
$router = new Router();
$router->registerRoutes($routes);

// Setup dependency injection

use App\Controllers\Controller;
use App\Models\Products;

$products = new Products();
$Controller = new Controller($products);

// Register controller instances in the router
$router->addControllerInstance(Controller::class, $Controller);


// Dispatch the request
$router->dispatch($_SERVER['REQUEST_URI'], $_SERVER['REQUEST_METHOD']);