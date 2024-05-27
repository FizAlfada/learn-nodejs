## What is Node JS?

Node.js adalah sebuah lingkungan runtime JavaScript yang dibangun di atas mesin V8 milik Google Chrome. Dikembangkan oleh Ryan Dahl pada tahun 2009, Node.js memungkinkan pengembang untuk menjalankan kode JavaScript di sisi server, di luar konteks browser. Ini membuka banyak kemungkinan untuk menggunakan JavaScript dalam pengembangan backend.

## Karakteristik Utama Node.js

1. **Event-Driven:** Node.js menggunakan arsitektur berbasis event, yang memungkinkan penanganan sejumlah besar koneksi secara bersamaan dengan menggunakan callback, tanpa memblokir eksekusi.

2. **Non-Blocking I/O:** Node.js memiliki model I/O non-blokir yang efisien, yang membuatnya sangat baik untuk aplikasi yang memerlukan waktu respons cepat, seperti aplikasi real-time dan server API.

3. **Single-Threaded:** Meskipun Node.js menggunakan model single-threaded, ia mampu menangani banyak koneksi bersamaan berkat arsitektur berbasis event dan I/O non-blokir.

4. **Cross-Platform:** Node.js dapat dijalankan di berbagai sistem operasi, termasuk Windows, macOS, dan berbagai distribusi Linux.

## Ekosistem Node.js

Node.js memiliki ekosistem yang kaya dengan banyak modul dan paket yang tersedia melalui npm (Node Package Manager). Ini memungkinkan pengembang untuk dengan mudah menginstal dan mengelola dependensi yang diperlukan untuk proyek mereka.

Contoh beberapa paket populer dalam ekosistem Node.js adalah:

**Express:** Framework web minimalis untuk Node.js
**Socket.io:** Perpustakaan untuk komunikasi real-time berbasis websocket
**Mongoose:** ORM (Object-Relational Mapping) untuk MongoDB
Node.js telah menjadi sangat populer dalam pengembangan aplikasi modern karena fleksibilitas dan kinerjanya yang tinggi, serta komunitas besar yang terus berkontribusi pada pengembangannya.

```bash
// Memuat modul http bawaan Node.js
const http = require('http');

// Membuat server HTTP
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Menentukan port dan alamat IP tempat server akan berjalan
const port = 3000;
const hostname = '127.0.0.1';

// Menjalankan server
server.listen(port, hostname, () => {
  console.log(`Server berjalan di http://${hostname}:${port}/`);
});
```
