let http = require('http'),
    url = require('url'),
    port = process.argv[2];


let server = http.createServer(function(request, response) {
    let reqUrl = url.parse(request.url, true),
        path = reqUrl.pathname,
        time = reqUrl.query.iso,
        op;


    if (path === '/api/unixtime') {
        op = unixTime(time);
        console.log(path);
    } else if (path === '/api/parsetime') {
        op = parseTime(time);
        console.log(path);
    } else {
        console.log(path);
    }

    if (op) {
        response.writeHead(200, {'Content-type':'application/json'});
        response.end(JSON.stringify(op));
    } else {
        response.writeHead(404);
        response.end();
    }
}).listen(port);

function unixTime(time) {
    return {
        unixtime: Date.parse(time)
    }
}

function parseTime(time) {
    let date = new Date(Date.parse(time));

    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    };
}