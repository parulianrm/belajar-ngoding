// belajar algoritma dasar
function ganjilGenap(angka) {
  if (angka % 2 == 0) {
    return `${angka} merupakan angka Genap`;
  } else {
    return `${angka} merupakan angka Ganjil`;
  }
}

console.log(ganjilGenap(3));
