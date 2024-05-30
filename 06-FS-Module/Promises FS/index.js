import * as fs from "fs/promises";

// Make Directory based on dir in terminal
/* 
  try {
    await fs.mkdir("TEST/TEST2", { recursive: true });
    console.log("Folder has been created ...");
  } catch (err) {
    console.log(err);
  }
*/

// Remove Directory
// try {
//   await fs.rmdir("test");
// } catch (err) {
//   console.log(err.path);
// }

// Read Files
/* 
  try {
    const data = await fs.readFile("text.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
*/

// Read All Folder ( Inside that Folder )
/*  
  try {
    const data = await fs.readdir(
      "D:/CodeB/Tutorial/Nodejs-Tutorial/06-FS-Module"
    );
    for (const file of data) {
      console.log(file);
    }
  } catch (err) {
    console.log(err);
  }
*/

// Create File, Content and Read the file
/* 
  try {
    const data = await fs.writeFile("note.md", "This is note for Node JS");
    console.log("File has been created ...");

    console.log(await fs.readFile("note.md", "utf-8"));
  } catch (err) {
    console.log(err);
  }
*/

// Append Content
/* 
  try {
    await fs.appendFile("note.md", "\nThis is the next");
    console.log("The content has been append ...");
  } catch (err) {
    console.log(err);
  }
*/

// Copy File
/*  
  try {
    await fs.copyFile("note.md", "note.txt");
    console.log("File note.md was copied to note.txt ");
  } catch (err) {
    console.log(err);
  }
*/

// Get File Information
/* 
  try {
    console.log(await fs.stat("note.txt"));
    console.log(await fs.statfs("note.txt"));
  } catch (err) {
    console.log(err);
  }
*/
