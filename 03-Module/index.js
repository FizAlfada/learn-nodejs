// Module
// Nantinya modul yang akan dibuat di file lain akan digunakan disini

const greetings = require("./greet");
const { person1, person2, person3 } = require("./people");

greetings(person1);
greetings(person2);
greetings(person3);
