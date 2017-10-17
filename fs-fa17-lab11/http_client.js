let url = process.argv[2],
    http = require('http');

http.get(url, function callback(response) {
    response.on('data', function(chunk) {
        console.log(chunk.toString());
    })
});