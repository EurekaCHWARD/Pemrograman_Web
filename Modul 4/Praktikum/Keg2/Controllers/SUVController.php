<?php

namespace Mobil\Controllers;

use Mobil\Models\MobilModel;
use Mobil\Traits\InfoTrait;

class SUVController extends MobilModel {
    use InfoTrait;

    public function start() {
        return "Mesin mobil SUV dinyalakan.";
    }

    public function stop() {
        return "Mesin mobil SUV dimatikan.";
    }
}
?>