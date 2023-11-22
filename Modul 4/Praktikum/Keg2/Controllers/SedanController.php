<?php

namespace Mobil\Controllers;

use Mobil\Models\MobilModel;
use Mobil\Traits\InfoTrait;

class SedanController extends MobilModel {
    use InfoTrait;

    public function start() {
        return "Mesin mobil sedan dinyalakan.";
    }

    public function stop() {
        return "Mesin mobil sedan dimatikan.";
    }
}
?>