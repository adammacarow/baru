/*1. Menentukan Hari dalam Bahasa

Misalnya, Anda ingin menampilkan nama hari berdasarkan nomor (1-7).*/

let dayNumber = 3;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Senin";
        break;
    case 2:
        dayName = "Selasa";
        break;
    case 3:
        dayName = "Rabu";
        break;
    case 4:
        dayName = "Kamis";
        break;
    case 5:
        dayName = "Jumat";
        break;
    case 6:
        dayName = "Sabtu";
        break;
    case 7:
        dayName = "Minggu";
        break;
    default:
        dayName = "Hari tidak valid";
}

console.log(dayName);  // Output: Rabu


/**
 2. Pemilihan Menu Berdasarkan Pilihan Pengguna

Misalnya, dalam aplikasi pemesanan makanan atau restoran, kita dapat menggunakan switch untuk memilih menu berdasarkan pilihan pengguna. 
 */

let menuChoice = "pasta";

switch (menuChoice) {
    case "nasi goreng":
        console.log("Anda memilih Nasi Goreng");
        break;
    case "pasta":
        console.log("Anda memilih Pasta");
        break;
    case "burger":
        console.log("Anda memilih Burger");
        break;
    case "salad":
        console.log("Anda memilih Salad");
        break;
    default:
        console.log("Menu tidak tersedia");
}

/**3. Pengolahan Status

Misalnya, dalam aplikasi pengelolaan tugas, kita bisa menggunakan switch untuk menangani berbagai status tugas (seperti "Belum Dimulai", "Sedang Dikerjakan", "Selesai"). */
let taskStatus = "Sedang Dikerjakan";

switch (taskStatus) {
    case "Belum Dimulai":
        console.log("Tugas belum dimulai.");
        break;
    case "Sedang Dikerjakan":
        console.log("Tugas sedang dikerjakan.");
        break;
    case "Selesai":
        console.log("Tugas telah selesai.");
        break;
    default:
        console.log("Status tugas tidak diketahui.");
}

/**
 * 4. Menghitung Diskon Berdasarkan Kategori Pelanggan

Misalnya, kita ingin memberikan diskon yang berbeda untuk pelanggan berdasarkan kategori mereka (misalnya, Pelanggan Baru, Pelanggan Reguler, atau Pelanggan Premium).
 */
let customerCategory = "Premium";
let discount;

switch (customerCategory) {
    case "Pelanggan Baru":
        discount = 10;  // 10% diskon
        break;
    case "Pelanggan Reguler":
        discount = 15;  // 15% diskon
        break;
    case "Pelanggan Premium":
        discount = 25;  // 25% diskon
        break;
    default:
        discount = 0;   // Tidak ada diskon
}

console.log("Diskon Anda: " + discount + "%");

/**5. Mengecek Status Pembayaran

Misalnya, dalam aplikasi pembayaran, kita bisa menggunakan switch untuk menangani status pembayaran (lunas, pending, atau gagal). */


let paymentStatus = "Gagal";

switch (paymentStatus) {
    case "Lunas":
        console.log("Pembayaran telah lunas.");
        break;
    case "Pending":
        console.log("Pembayaran sedang diproses.");
        break;
    case "Gagal":
        console.log("Pembayaran gagal.");
        break;
    default:
        console.log("Status pembayaran tidak dikenali.");
}


// type Data 

let data = 5.6; // "String" , trus / false , 100, 

const typeData = typeof data;
console.log(`<p> ${typeData} </p>`);
document.writeln(`<p> ${typeData} </p>`);

