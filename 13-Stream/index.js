import { createReadStream } from "fs";

// membaca file data.txt dan di log ke console
const stream = createReadStream("../13-Stream/data.txt", { encoding: "utf8" });
stream.on("data", (data) => {
  console.log(data);
});
