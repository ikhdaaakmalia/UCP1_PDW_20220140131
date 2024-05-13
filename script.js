
var waktuElemen = document.getElementById("waktu");

function tampilkanWaktu() {
    var waktuSekarang = new Date();
    
    var jam = waktuSekarang.getHours();
    var menit = waktuSekarang.getMinutes();
    var detik = waktuSekarang.getSeconds();
    
    var waktuFormatted = jam + ":" + menit + ":" + detik;
    
    var pesan = "Sekarang jam: " + waktuFormatted;
    
    waktuElemen.textContent = pesan;
}

setInterval(tampilkanWaktu, 1000);
