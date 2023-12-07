<?php

namespace app\Routes;

include "/xampp/htdocs/Praktikum/Controller/ProductController.php";

use app\Controller\ProductController;

class ProductRoutes
{
    public function handle($method, $path)
    {
        // JIKA REQUEST METHOD GET DAN PATH SAMA DENGAN /api/product
        if ($method === 'GET' && $path === "/modul 5/products") {
            $controller = new ProductController();
            echo $controller->index();
        }

        // JIKA REQUEST METHOD GET DAN PATH MENGANDUNG '/api/product/'
        if ($method === 'GET' && strpos($path, "/modul 5/products/") === 0) {
            // Extract ID dari path
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1];
            $controller = new ProductController();
            echo $controller->getById($id);
        }

        // JIKA REQUEST METHOD POST DAN PATH SAMA DENGAN '/api/product'
        if ($method === 'POST' && $path === "/modul 5/products") {
            $controller = new ProductController();
            echo $controller->insert();
        }

        // JIKA REQUEST METHOD PUT DAN PATH MENGANDUNG '/api/product/'
        if ($method === 'PUT' && strpos($path, "/modul 5/products/") === 0) {
            // Extract ID dari path
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1];
            $controller = new ProductController();
            echo $controller->update($id);
        }

        // JIKA REQUEST METHOD DELETE DAN PATH MENGANDUNG "/api/product/"
        if ($method === 'DELETE' && strpos($path, "/modul 5/products/") === 0) {
            // Extract ID dari path
            $pathParts = explode('/', $path);
            $id = $pathParts[count($pathParts) - 1];
            $controller = new ProductController();
            echo $controller->delete($id);
        }
    }
}