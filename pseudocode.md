Kelas BankAccount:

- Memiliki atribut balance
- Memiliki metode deposit(amount)
- Memiliki metode withdraw(amount)

Metode deposit(amount):

- Jika amount <= 0, maka tolak transaksi
- Tambahkan amount ke balance
- Perbarui tampilan saldo di HTML
- Kembalikan pesan "Disimpan Rp amount. Saldo saat ini: Rp balance."

Metode withdraw(amount):

- Jika amount <= 0, maka tolak transaksi
- Jika amount > balance, maka tolak transaksi
- Kurangi amount dari balance
- Perbarui tampilan saldo di HTML
- Kembalikan pesan "Ditarik Rp amount. Saldo saat ini: Rp balance."

Fungsi updateSaldo():

- Dapatkan saldo dari objek BankAccount
- Set nilai saldo di elemen HTML dengan format rupiah

Fungsi rupiah(saldo):

- Konversi saldo ke format rupiah
- Kembalikan nilai saldo dalam format rupiah

Fungsi showLoading():

- Tampilkan elemen loading

Fungsi hideLoading():

- Sembunyikan elemen loading

Fungsi tambahSaldo():

- Minta pengguna memasukkan jumlah saldo yang ingin ditambahkan
- Jika input valid, maka panggil metode deposit()
- Tampilkan pesan hasil transaksi

Fungsi kurangiSaldo():

- Minta pengguna memasukkan jumlah saldo yang ingin dikurangi
- Jika input valid, maka panggil metode withdraw()
- Tampilkan pesan hasil transaksi
