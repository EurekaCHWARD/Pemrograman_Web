<?php

namespace Mobil\Models;

abstract class MobilModel {
    protected $brand;
    protected $model;
    protected $tahun;
    protected $warna;

    public function __construct($brand, $model, $tahun, $warna) {
        $this->brand = $brand;
        $this->model = $model;
        $this->tahun = $tahun;
        $this->warna = $warna;
    }
    abstract public function getInfo();
}
?>