// Path Module
// Bekerja dengan direktori

const path = require("path");

// *Path basename
/* 
  console.log(path.basename("c:/desktop/nodejs/index.js"));
  console.log(path.basename("c:/desktop/nodejs/index.js", ".js")); 

  Output:
  index.js                                                      
  index
*/

// *path dirname
/*
  console.log(path.dirname("c:/desktop/nodejs/index.js"));

  Output:
  c:/desktop/nodejs
*/

// *path extname
/* 
  console.log(path.extname("c:/desktop/nodejs/index.js"));  

  Output:
  .js
*/

// *path join
/*  
  console.log(path.join("c:", "desktop", "nodejs", "index.txt"));
  
  Output:
  c:\desktop\nodejs\index.txt   
*/

// *path resolve
/*  
  console.log(path.resolve("05-Path-Module", "index.js"));
  
  Output:
  D:\CodeB\Tutorial\Nodejs-Tutorial\05-Path-Module\index.js  
*/

// *path normalize
/* 
  console.log(path.normalize("c:/users//documents/nodejs//index.js"));

  Output:
  c:\users\documents\nodejs\index.js
*/

// *path relative
/*  
  const from = ""c:/users/desktop/nodejs";
  const to = "c:/users/desktop/nodejs/index.js";

  console.log(path.relative(from, to));

  Output:
  c:/users/desktop/nodejs/index.js
*/

// *path parse
/* 
  console.log(path.parse("c:/users/desktop/nodejs/learn/index.js"));
  
  Output: 
  {                                                             
    root: 'c:/',
    dir: 'c:/users/desktop/nodejs/learn',
    base: 'index.js',
    ext: '.js',
    name: 'index'
  }  
*/

// *path format
/* 
  const formatPath = {
    root: "D:/",
    dir: "D:/CodeB/LearnNode",
    base: "index.js",
    ext: ".js",
    name: "index",
  };
  console.log(path.normalize(path.format(formatPath)));

  Output: 
  D:\CodeB\LearnNode\index.js
*/
