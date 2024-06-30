<?php

namespace App\Controllers;

use App\Models\Products;
use App\Utilities\HttpResponse;

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
        if($products){
            echo $products;
        } else {
            return HttpResponse::dbError('error when get products');
        }
    }

    public function addProduct()
    {
        if (file_get_contents('php://input')) {
            header('Content-Type: application/json');
            $productData = json_decode(file_get_contents('php://input'),true);
            $product = $this->products->add($productData);
            if ($product) {
                echo json_encode($product);
            } else {
                return HttpResponse::dbError('error when add product');
            }
        } else {
            http_response_code(400);
            return HttpResponse::dbError('Product data not provided');
        }
    }

    public function deleteProducts()
    {
        if (file_get_contents('php://input')) {
            header('Content-Type: application/json');
            $productData = json_decode(file_get_contents('php://input'),true);
            $this->products->delete($productData);
        } else {
            http_response_code(400);
            return HttpResponse::dbError('Product data not provided');
        }
    }
}
