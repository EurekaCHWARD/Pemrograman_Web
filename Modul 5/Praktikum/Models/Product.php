<?php

namespace Praktikum\Models;

include "/xampp/htdocs/Praktikum/Config/DatabaseConfig.php";

use Praktikum\Config\DatabaseConfig;
use mysqli;

class Product extends DatabaseConfig
{
    public $conn;

    public function __construct()
    {
        // CONNECT KE DATABASE MYSQL
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database_name, $this->port);

        // Check connection
        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }
    }

    // PROSES MENAMPILKAN SEMUA DATA
    public function findAll()
    {
        $sql = "SELECT p.product_id, p.product_name, c.category_name
        FROM products p
        JOIN categories c ON p.category_id = c.category_id";
        $result = $this->conn->query($sql);
        $this->conn->close();

        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        return $data;
    }

    // PROSES MENAMPILKAN DATA DENGAN ID TERTENTU
    public function findById($id)
    {
        $sql = "SELECT p.product_id, p.product_name, c.category_name
        FROM products p
        JOIN categories c ON p.category_id = c.category_id
        WHERE p.product_id = ? ";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $this->conn->close();

        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }

        return $data;
    }

    // PROSES INSERT DATA
    public function create($data)
    {
        $productName = $data["product_name"];
        $idCategory = $data["category_id"]; // tambahkan ini jika id_category diperlukan
    
        $query = "INSERT INTO products (product_name, category_id) VALUES (?, ?)";
        $stmt = $this->conn->prepare($query);
        $stmt->bind_param("si", $productName, $idCategory);
        $stmt->execute();
        $this->conn->close();
    }

    // PROSES UPDATE DATA DENGAN ID
    public function update($data, $id)
    {
        $productName = $data["product_name"];
        $idCategory = $data["category_id"];
        $query = "UPDATE products SET product_name = ?, category_id = ? WHERE product_id = ?";
        $stmt = $this->conn->prepare($query);
        // huruf "s" berarti tipe parameter product_name adalah String dan huruf "i" berarti parameter id adalah integer
        $stmt->bind_param("sii", $productName, $id, $idCategory);
        $stmt->execute();
        $this->conn->close();
    }

    // PROSES DELETE DATA DENGAN ID
    public function destroy($id)
    {
        $query = "DELETE FROM products WHERE product_id = ?";
        $stmt = $this->conn->prepare($query);
        // huruf "i" berarti parameter pertama adalah integer
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $this->conn->close();
    }
}
