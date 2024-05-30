This is note for Node JSThis is the next
This is the next

# Manual Writing

## Promises FS

Promise-based operations return a promise that is fulfilled when the asynchronous operation is complete.

```js
// Wajib import seperti ini jika di package.json type module
import * as fs from "fs/promises";
```

### Membuat Direktori Baru

```js
fs.mkdir("<nama folder>", { recursive: true });
```

recursive berguna jika tidak ada folder maka akan dibuatkan, jika `false` maka akan error.

### Remove Directory

```js
await fs.rmdir("<nama folder>");
```

Di path yang sama, folder akan terhapus.

### Read Files

```js
const data = await fs.readFile("text.txt", "utf-8");
console.log(data);
```

Content yang ada di dalam `text.txt` akan di print ke console, `utf-8` menandakan bahwa ini adalah string.

### Read All Folder ( Inside that folder )

```js
try {
  const data = await fs.readdir(
    "D:/CodeB/Tutorial/Nodejs-Tutorial/06-FS-Module"
  ); // membaca folder diatas
  for (const file of data) {
    // masing masing folder akan dibaca satu persatu
    console.log(file);
  }
} catch (err) {
  console.log(err);
}
```

Reads the contents of a directory.

The optional options argument can be a string specifying an encoding, or an object with an encoding property specifying the character encoding to use for the filenames. If the encoding is set to 'buffer', the filenames returned will be passed as <Buffer> objects.

### Create File, Content and Read the file

```js
try {
  // membuat file baru note.md, dan buat content di dalamnya
  const data = await fs.writeFile("note.md", "This is note for Node JS");
  console.log("File has been created ...");

  // membaca file yang baru aja dibikin
  console.log(await fs.readFile("note.md", "utf-8"));
} catch (err) {
  console.log(err);
}
```

Asynchronously writes data to a file, replacing the file if it already exists. data can be a string, a buffer, an <AsyncIterable>, or an <Iterable> object.

### Append Content

```js
try {
  // sisipkan kontent ke file note.md
  await fs.appendFile("note.md", "\nThis is the next");
  console.log("The content has been append ...");
} catch (err) {
  console.log(err);
}
```

Asynchronously append data to a file, creating the file if it does not yet exist. data can be a string or a <Buffer>.

### Copying File

```js
try {
  // copy file note.md, dan ganti menjadi note.txt
  await fs.copyFile("note.md", "note.txt");
  console.log("File note.md was copied to note.txt ");
} catch (err) {
  console.log(err);
}
```

Asynchronously copies src to destination. By default, dest is overwritten if it already exists.

### Get File Information

```js
try {
  console.log(await fs.stat("note.txt"));
  console.log(await fs.statfs("note.txt"));
} catch (err) {
  console.log(err);
}
```

Using fs.stat() to check for the existence of a file before calling fs.open(), fs.readFile(), or fs.writeFile() is not recommended. Instead, user code should open/read/write the file directly and handle the error raised if the file is not available.

## Callback API

The callback form takes a completion callback function as its last argument and invokes the operation asynchronously. The arguments passed to the completion callback depend on the method, but the first argument is always reserved for an exception. If the operation is completed successfully, then the first argument is null or undefined.

### Make Folder

```js
fs.mkdir("Callback-Folder", { recursive: true }, (err) => {
  if (err) throw err;
});
```

Asynchronously creates a directory.

The callback is given a possible exception and, if recursive is true, the first directory path created, (err[, path]). path can still be undefined when recursive is true, if no directory was created (for instance, if it was previously created).

### Write File

```js
fs.writeFile(
  "text.txt",
  "Membuat folder dengan callback API",
  "utf-8",
  (err) => {
    if (err) throw err;
  }
);
```

When file is a filename, asynchronously writes data to the file, replacing the file if it already exists. data can be a string or a buffer.

When file is a file descriptor, the behavior is similar to calling fs.write() directly (which is recommended). See the notes below on using a file descriptor.

### Append File

```js
// sisipkan kontent ke text.txt
fs.appendFile("text.txt", "\nHey yo whatzup", (err) => {
  if (err) throw err;
});
```

Asynchronously append data to a file, creating the file if it does not yet exist. data can be a string or a <Buffer>.

## Sync FS

The synchronous APIs block the Node.js event loop and further JavaScript execution until the operation is complete. Exceptions are thrown immediately and can be handled using try…catch, or can be allowed to bubble up.

### Create a Folder

```js
function makeFolder() {
  // membuat folder baru bernama SyncFolder
  fs.mkdirSync("SyncFolder");
  console.log("Folder has been created");
}
makeFolder();
```

Synchronously creates a directory. Returns undefined, or if recursive is true, the first directory path created. This is the synchronous version of fs.mkdir().

### Create a file

```js
function makeFile() {
  // membuat file text.txt beserta kontent di dalamnya
  fs.writeFileSync("text.txt", "Create file from Sync", "utf-8");
  console.log("File has been created ...");
}
makeFile();
```

Returns undefined.
