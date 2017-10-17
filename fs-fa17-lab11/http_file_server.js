let http = require('http'),
    fs = require('fs'),
    port = process.argv[2],
    dir = process.argv[3];

let server = http.createServer( function (request, response) {
    let op = fs.createReadStream(dir);

    op.on('open', function () {
        op.pipe(response);
    });

    op.on('error', function (err) {
        res.end(err);
    });
})

server.listen(port)
