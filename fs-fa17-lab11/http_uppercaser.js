let http = require('http'),
    map = require('through2-map'),
    port = process.argv[2];

let server = http.createServer(function (request, response) {
    request.on('data', function(data){
        if (this.method === 'POST') {
            let str = '';

            str += data;
            
            response.write(str.toUpperCase());
        }
    });
});

server.listen(port);