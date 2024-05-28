Modul ES6 menawarkan sintaks yang lebih modern dan fleksibel untuk mengekspor dan mengimpor fungsi, objek, atau nilai lainnya di Node.js. Dalam Node.js, mendukung modul ES6 membutuhkan beberapa konfigurasi. Berikut adalah panduan lengkap tentang cara menggunakan modul ES6 dan cara mengekspor dan mengimpor modul tersebut.

## Menggunakan ES6 Modules di Node.js

Untuk menggunakan ES6 Modules di Node.js, Anda bisa melakukan salah satu dari dua hal berikut:

1. Menggunakan ekstensi file `.mjs.`
2. Mengonfigurasi file package.json untuk menggunakan `"type": "module"`.

### Menggunakan "type": "module" di package.json

Tambahkan "type": "module" di file package.json proyek Anda. Ini akan membuat Node.js mengenali semua file .js sebagai modul ES6.

```js
  {
    "name": "my-module-project",
    "version": "1.0.0",
    "type": "module"
  }
```

_math.js_

```js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

_app.js_

```js
import { add, subtract } from "./math.mjs";

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```
