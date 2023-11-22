<?php

namespace Controller;

include "Controller/Controller.php";
include "Traits/ResponseFormatter.php";

use Traits\ResponseFormatter;

class ProductController
{

    use ResponseFormatter, Controller;

    public function _construct()
    {
        $this->controllerName = "Get All Product";

        $this->controllerMethod = "GET";
    }

    public function getAllProduct()
    {
        $dummyData = [
            "Air Mineral",
            "Kebab",
            "Spaghetti",
            "Jus Jambu"
        ];

        $response = [
            "controller_attribute" => $this->getControllerAttribute(),
            "product" => $dummyData
        ];

        return $this->responseFormatter(200, "Success", $response);
    }
}
?>