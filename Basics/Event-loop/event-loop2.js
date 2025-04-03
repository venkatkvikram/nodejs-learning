const fs = require("fs");

var a = 100;
setImmediate(() => console.log("setImmediate"));
Promise.resolve().then(() => console.log("Promise")); //can also be written as Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File reading CB");
});

setTimeout(() => console.log("Timer Expired"), 0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
  console.log("a=", a);
}

printA();
console.log("lastline of file");

//a=100;
//lastline of file
//process.nextTick
//Promise
//Timer Expired
//setImmediate
//File reading CB
