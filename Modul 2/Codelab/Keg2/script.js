document.getElementById("daftar").addEventListener("click", function (event) {
    event.preventDefault();

    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;

    if (nama === "" || email === "" || alamat === "") {
      alert("Anda harus mengisi semua data dengan lengkap.");
    } else {
      alert("Data berhasil disimpan.");
      document.getElementById("registrasi").reset(); 
    }
  });