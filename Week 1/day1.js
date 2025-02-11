// belajar algoritma dasar
function ganjilGenap(angka) {
  if (angka % 2 == 0) {
    return `${angka} merupakan angka Genap`;
  } else {
    return `${angka} merupakan angka Ganjil`;
  }
}

console.log(ganjilGenap(3));

// soal 1
// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

//code here
console.log(
  `${word} ${second} ${third} ${fourth} ${fifth} ${sixth} ${seventh}`
);

console.log(
  word +
    " " +
    second +
    " " +
    third +
    " " +
    fourth +
    " " +
    fifth +
    " " +
    sixth +
    " " +
    seventh
);

// soal 2
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word2 = "wow JavaScript is so cool";
let firstWord = word2[0] + word2[1] + word2[2];
let secondWord =
  word2[4] +
  word2[5] +
  word2[6] +
  word2[7] +
  word2[8] +
  word2[9] +
  word2[10] +
  word2[11] +
  word2[12] +
  word2[13];
let thirdWord = word2[15] + word2[16];
let fourthWord = word2[18] + word2[19];
let fifthWord = word2[21] + word2[22] + word2[23] + word2[24];

console.log(
  "the Word: " +
    firstWord +
    " " +
    secondWord +
    " " +
    thirdWord +
    " " +
    fourthWord +
    " " +
    fifthWord
);

// soal 3 // Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = "wow JavaScript is so cool";
let firstWord3 = word3.substring(0, 3);
let secondWord3 = word3.substring(4, 14);
let thirdWord3 = word3.substring(15, 17);
let fourthWord3 = word3.substring(18, 20);
let fifthWord3 = word3.substring(21, 25);

console.log(
  `${firstWord3} ${secondWord3} ${thirdWord3} ${fourthWord3} ${fifthWord3}`
);

// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";
let firstWord4 = word4.substring(0, 3);
let secondWord4 = word4.substring(4, 14);
let thirdWord4 = word4.substring(15, 17);
let fourthWord4 = word4.substring(18, 20);
let fifthWord4 = word4.substring(21, 25);

let firstWordLength = firstWord4.length;
let secondWordLength = secondWord4.length;
let thirdWordLength = thirdWord4.length;
let fourthWordLength = fourthWord4.length;
let fifthWordLength = fifthWord4.length;

console.log("First Word: " + firstWord4 + ", with length: " + firstWordLength);
console.log(
  "Second Word: " + secondWord4 + ", with length: " + secondWordLength
);
console.log("Third Word: " + thirdWord4 + ", with length: " + thirdWordLength);
console.log(
  "Fourth Word: " + fourthWord4 + ", with length: " + fourthWordLength
);
console.log("Fifth Word: " + fifthWord4 + ", with length: " + fifthWordLength);
