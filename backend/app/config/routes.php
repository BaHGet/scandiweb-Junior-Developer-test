<?php
use App\Controllers\Controller;

return [
    '/' => [Controller::class, 'getProducts'],
    '/addProduct' => [Controller::class, 'addProduct'],
    '/deleteProduct' => [Controller::class, 'deleteProducts'],
];