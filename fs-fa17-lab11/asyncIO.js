var fs = require('fs'),
    content,
    string,
    array,
    lineNum;


fs.readFile(process.argv[2], function callback(err,data) {
    if (err) {
        throw err;
    }
    content = data;
    string = content.toString();
    array = string.split('\n');
    lineNum = array.length-1;

    console.log(lineNum);
})