<?php
use App\Controllers\Controller;

return [
    '/api' => [Controller::class, 'getProducts'],
    '/api/addProduct' => [Controller::class, 'addProduct'],
    '/api/deleteProduct' => [Controller::class, 'deleteProducts'],
];