<?php

namespace Controller;

trait Controller
{
    var $controllerName;
    var $controllerMethod;

    public function getControllerAttribute()
    {
        return [
            "ControllerName" => $this->controllerName,
            "Method" => $this->controllerMethod
        ];
    }
}
?>