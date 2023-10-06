// Inisialisasi variabel saldo
var saldo = 0;

// Fungsi untuk menambahkan saldo
function tambahSaldo() {
  var tambahan = parseFloat(
    window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:")
  );

  // Cek apakah inputan adalah angka atau bukan
  if (!isNaN(tambahan)) {
    saldo += tambahan;
    updateSaldo();
  } else {
    alert("Masukkan angka yang valid");
  }
}

// Fungsi untuk mengurangi saldo
function kurangiSaldo() {
  var pengurangan = parseFloat(
    window.prompt("Masukkan jumlah saldo yang ingin dikurangi:")
  );

  if (!isNaN(pengurangan)) {
    if (pengurangan <= saldo) {
      saldo -= pengurangan;
      updateSaldo();
    } else {
      alert("Saldo tidak mencukupi");
    }
  } else {
    alert("Masukkan angka yang valid");
  }
}

// Fungsi untuk mengupdate saldo
function updateSaldo() {
  document.getElementById("saldo").textContent = rupiah(saldo);
}

// Fungsi untuk mengubah angka menjadi format rupiah
function rupiah(saldo) {
  return "Rp " + saldo.toLocaleString("id-ID");
}
