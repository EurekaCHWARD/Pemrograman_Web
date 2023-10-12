document.getElementById("jumlahkan").addEventListener("click", function() {
    var bilangan1 = parseFloat(document.getElementById("bilangan1").value);
    var bilangan2 = parseFloat(document.getElementById("bilangan2").value);

    if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
        var hasil = bilangan1 + bilangan2;
        alert("hasil penjumlahan = "+ hasil)
    } else {
        alert("Masukkan bilangan valid");
    }
});

document.getElementById("ulang").addEventListener("click", function() {
    document.getElementById("bilangan1").value = '';
    document.getElementById("bilangan2").value = '';
    document.getElementById("hasil").textContent = '';
});