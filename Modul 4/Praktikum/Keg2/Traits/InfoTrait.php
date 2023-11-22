<?php

namespace Mobil\Traits;

trait InfoTrait {
    public function getInfo() {
        return "Mobil: {$this->brand} {$this->model}, Tahun: {$this->tahun}, Warna: {$this->warna}";
    }
}
?>