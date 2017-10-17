var fs = require('fs'),
    ls,
    op = [],
    ext = '.'+process.argv[3];

fs.readdir(process.argv[2], function callback (err, list) {
    if (err) {
        throw err;
    }
    ls = list;

    for (i = 0; i < ls.length; i++) {
        let item = ls[i],
            x = item.substring(item.length-3, item.length);

        if (ext === x) {
            op.push(item);
        }
    }

    for (i = 0; i < op.length; i++) {
        console.log(op[i]);
    }
})