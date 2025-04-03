const fs = require("fs");

setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("Timer Expired"), 0);
Promise.resolve().then(() => console.log("Promise")); //can also be written as Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt", "utf-8", () => {
  setTimeout(() => console.log("2nd Timer Expired"), 0);
  process.nextTick(() => console.log("2ndnextTick"));
  setImmediate(() => console.log("2nd setImmediate"));
  console.log("File reading CB");
});

process.nextTick(() => console.log("nextTick"));

console.log("lastline of file");

//lastline of file
//nextTick
//Promise
//Timer Expired
//setImmediate
//File reading CB  -> Event loop is at polling phase here
//2nd nexttick
//2nd setImmediate -> because check phase is after polling phase
//2nd Timer
