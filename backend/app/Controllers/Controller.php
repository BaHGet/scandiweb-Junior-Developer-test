<?php

namespace App\Controllers;

use App\Models\Products;

class Controller
{
    private $products;
    public function __construct(Products $products)
    {
        $this->products = $products;
    }
    public function getProducts()
    {
        $products = $this->products->get();
    }

    public function addProduct()
    {
        $products = $this->products->add();
    }

    public function deleteProducts()
    {
        $products = $this->products->delete();
    }
}
