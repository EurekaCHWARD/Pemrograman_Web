<?php

require_once 'Models/MobilModel.php';
require_once 'Traits/InfoTrait.php';
require_once 'Controllers/SedanController.php';
require_once 'Controllers/SUVController.php';

use Mobil\Controllers\SedanController;
use Mobil\Controllers\SUVController;

// Contoh penggunaan
$sedan = new SedanController('Toyota', 'Camry', 2022, 'Hitam');
echo $sedan->getInfo() . PHP_EOL;
echo $sedan->start() . PHP_EOL;
echo $sedan->stop() . PHP_EOL;

$suv = new SUVController('Ford', 'Explorer', 2023, 'Putih');
echo $suv->getInfo() . PHP_EOL;
echo $suv->start() . PHP_EOL;
echo $suv->stop() . PHP_EOL;
?>