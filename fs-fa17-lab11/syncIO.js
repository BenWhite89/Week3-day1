var fs = require('fs'),
    str = fs.readFileSync(process.argv[2]).toString(),
    arr = str.split("\n"),
    lineNum = arr.length - 1;

console.log(lineNum);