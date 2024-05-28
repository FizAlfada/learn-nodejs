// Sama seperti sebelumnya, kita akan memakai import dari file yang dibuat.
// sebelum kita menginstall package.json dengan command npm init, import dibawah tidak bisa digunakan
// di package.json tambahkan type module
import { greetings } from "./greetings.js";
import { p1, p2 } from "./persons.js";

greetings(p1);
greetings(p2);
