import fs from "fs";

// mmembuat buat file baru data.txt dan isi content 0 - 100
for (let i = 0; i <= 100; i++) {
  fs.writeFileSync("../13-Stream/data.txt", `${i}\n`, { flag: "a" });
  if (i == 100) {
    console.log("File has been saved");
  }
}
