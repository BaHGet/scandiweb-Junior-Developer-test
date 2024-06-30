<?php

namespace App\Controllers;

use App\Models\Products;

class Controller
{
    public static function getProducts()
    {
        Products::get();
    }

    public static function addProduct()
    {
        Products::add();
    }

    public static function deleteProducts()
    {
        Products::delete();
    }
}
