const fs = require("fs");

var a = 100;
setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf-8", () => {
    console.log("File reading CB");
})

setTimeout(() => console.log("Timer Expired"));

function printA() {
    console.log("a=",a);
}

printA();
console.log("lastline of file");

//a=100;
//lastline of file
//Timer Expired
//setImmediate
//File reading CB
