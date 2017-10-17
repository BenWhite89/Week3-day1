let url = process.argv[2],
    http = require('http');

http.get(url, function callback(response) {
    let stream = '';

    response.on('data', function(chunk) {
        stream += chunk;
    });
    response.on('end', function(){
        console.log(stream.length);
        console.log(stream.toString());
    })
});