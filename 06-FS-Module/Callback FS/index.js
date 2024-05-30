import * as fs from "fs/promises";

// Make Folder with callback
/* 
  fs.mkdir("Callback-Folder", { recursive: true }, (err) => {
    if (err) throw err
  });
*/

// Write File
/* 
  fs.writeFile(
    "text.txt",
    "Membuat folder dengan callback API",
    "utf-8",
    (err) => {
      console.log(err);
    }
  );
*/

// Append File
/* 
  fs.appendFile("text.txt", "\nHey yo whatzup", (err) => {
    console.log(err);
  });
*/
