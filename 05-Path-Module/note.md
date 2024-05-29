## Path Module

Modul `path` di Node.js adalah modul inti yang digunakan untuk bekerja dengan jalur file dan direktori. Modul ini menyediakan berbagai metode yang memudahkan manipulasi dan penguraian jalur file.

## Mengimpor Modul path

Untuk menggunakan modul `path`, Anda perlu mengimpornya terlebih dahulu:

```js
const path = require("path");
```

## Fungsi-Fungsi Utama dalam Modul `path`

Berikut adalah beberapa fungsi utama yang disediakan oleh modul `path` beserta contohnya:

1. `path.basename(p[, ext])`
   Mengembalikan bagian akhir dari path. Jika ext disediakan, dan p diakhiri dengan ext, maka ext akan dihapus dari hasil.

   ```js
   const filePath = "/user/local/bin/file.txt";
   console.log(path.basename(filePath)); // Output: 'file.txt'
   console.log(path.basename(filePath, ".txt")); // Output:  'file'
   ```

2. `path.dirname(p)`
   Mengembalikan direktori dari sebuah path tanpa nama file nya.

   ```js
   const filePath = "/user/local/bin/file.txt";
   console.log(path.dirname(filePath)); // Output: '/user/local/bin'
   ```

3. `path.extname(p)`
   Mengembalikan ekstensi dari sebuah path.

```js
const filePath = "/user/local/bin/file.txt";
console.log(path.extname(filePath)); // Output: '.txt'
```

4. `path.join([...paths])`
   Berguna untuk menggabungkan beberapa segmen path menjadi satu path.

```js
const joinedPath = path.join("/user", "local", "bin/file.txt");
console.log(joinedPath); // Output: '/user/local/bin/file.txt'
```

5. `path.resolve([...paths])`
   Menghasilkan path absolut dengan menggabungkan beberapa segmen path dan menguraikan mereka ke dalam path absolut.

```js
const absolutePath = path.resolve("user", "local", "bin/file.txt");
console.log(absolutePath); // ...currentDirectory/user/local/bin/file.txt
```

6. `path.normalize(p)`
   Menguraikan path yang tidak standar menjadi bentuk yang standar.

```js
const nonStandardPath = "/user//local/bin/../bin/file.txt";
console.log(path.normalize(nonStandardPath)); // Output: '/user/local/bin/file.txt'
```

7. `path.parse(p)`
   Menguraikan path menjadi sebuah objek dengan properti root, dir, base, ext, dan name.

```js
const filePath = "/user/local/bin/file.txt";
console.log(path.parse(filePath));
/* Output:
{
  root: '/',
  dir: '/user/local/bin',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/
```

8. `path.format(pathObject)`
   Kebalikan dari path.parse(). Mengembalikan path string dari sebuah objek path.

```js
const pathObject = {
  root: "/",
  dir: "/user/local/bin",
  base: "file.txt",
  ext: ".txt",
  name: "file",
};
console.log(path.format(pathObject)); // Output: '/user/local/bin/file.txt'
```

## Kesimpulan

Modul path di Node.js menyediakan berbagai metode yang memudahkan dalam bekerja dengan jalur file dan direktori. Dengan menggunakan modul ini, Anda dapat mengelola jalur file dengan lebih efektif dan menghindari kesalahan yang mungkin terjadi saat bekerja dengan jalur secara manual.
