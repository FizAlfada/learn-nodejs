// Membuat function greetings yang nantinya akan digunakan di file lain
// Melakukan ini supaya tidak menggunakan kode yang berulang.

const greetings = (name) => {
  console.log(`Hello, ${name}`);
};

// panggil module.exports = <namafunction> untuk meng exports nya
module.exports = greetings;
