class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  deposit(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount <= 0) {
          reject(new Error("Jumlah setoran harus lebih besar dari 0."));
        } else {
          this.balance += amount;
          updateSaldo(); // Memperbarui tampilan saldo di HTML
          resolve(`Disimpan Rp ${amount}. Saldo saat ini: Rp ${this.balance}.`);
        }
      }, 2000); // Tunda selama 2 detik untuk mensimulasikan asinkron
    });
  }

  withdraw(amount) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (amount <= 0) {
          reject(new Error("Jumlah setoran harus lebih besar dari 0."));
        } else if (amount > this.balance) {
          reject(new Error("Saldo tidak cukup untuk penarikan."));
        } else {
          this.balance -= amount;
          updateSaldo(); // Memperbarui tampilan saldo di HTML
          resolve(`Ditarik Rp ${amount}. Saldo saat ini: Rp ${this.balance}.`);
        }
      }, 2000); // Tunda selama 2 detik untuk mensimulasikan asinkron
    });
  }
}

// Membuat objek BankAccount dengan saldo awal 0
const myAccount = new BankAccount();

// Mengupdate saldo di HTML
function updateSaldo() {
  document.getElementById("saldo").textContent = rupiah(myAccount.balance);
}

// Fungsi untuk mengubah angka menjadi format rupiah
function rupiah(saldo) {
  return "Rp " + saldo.toLocaleString("id-ID");
}

// Menampilkan elemen loading saat transaksi dimulai
function showLoading() {
  document.getElementById("loading").style.display = "block";
}

// Menyembunyikan elemen loading saat transaksi selesai
function hideLoading() {
  document.getElementById("loading").style.display = "none";
}

// Fungsi untuk menambahkan saldo
async function tambahSaldo() {
  var tambahan = parseFloat(
    window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:")
  );
  if (!isNaN(tambahan)) {
    showLoading(); // Menampilkan elemen loading saat transaksi dimulai
    try {
      const result = await myAccount.deposit(tambahan); // Memanggil metode deposit
      alert(result);
    } catch (error) {
      alert(error.message);
    } finally {
      hideLoading(); // Menyembunyikan elemen loading saat transaksi selesai
    }
  } else {
    alert("Masukkan angka yang valid");
  }
}

// Fungsi untuk mengurangi saldo
async function kurangiSaldo() {
  var pengurangan = parseFloat(
    window.prompt("Masukkan jumlah saldo yang ingin dikurangi:")
  );
  if (!isNaN(pengurangan)) {
    showLoading(); // Menampilkan elemen loading saat transaksi dimulai
    try {
      const result = await myAccount.withdraw(pengurangan); // Memanggil metode withdraw
      alert(result);
    } catch (error) {
      alert(error.message);
    } finally {
      hideLoading(); // Menyembunyikan elemen loading saat transaksi selesai
    }
  } else {
    alert("Masukkan angka yang valid");
  }
}
