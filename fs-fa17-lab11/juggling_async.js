var http = require('http');
    urls = [process.argv[2], process.argv[3], process.argv[4]],
    responses = ['','',''],
    count = 0;

function readResponse(index) {
    http.get(urls[index], function(response) {
        responses[index] += response;
        response.on('end', function() {
            count++;
            if (count == 3) {
                console.log(response);
            };
        });
    });
};



for (var i = 0; i < urls.length; i++) {
    readResponse(i);
}
