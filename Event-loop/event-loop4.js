const fs = require("fs");

setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("Timer Expired"), 0);
Promise.resolve().then(() => console.log("Promise")); //can also be written as Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt", "utf-8", () => {
  console.log("File reading CB");
});

process.nextTick(() =>{
  process.nextTick(() => console.log("2nd nextTick"))
  console.log("nextTick")
} );

console.log("lastline of file");

//lastline of file
//nextTick
//2nd nextTick
//Promise
//Timer Expired
//setImmediate
//File reading CB
