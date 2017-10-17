let net = require('net');
let port = process.argv[2];

let server = net.createServer(function (socket) {
    socket.end(formatDate() + '\n');
})

server.listen(port);

function doubleDigits(n) {
    if (n > 9 || n.length > 1) {
        return n;
    } else {
        return `0${n}`;
    }
}

function formatDate() {
    let today = new Date(),
        yr = today.getFullYear(),
        mo = doubleDigits(today.getMonth() + 1),
        d = doubleDigits(today.getDate()),
        hr = doubleDigits(today.getHours()),
        mi = doubleDigits(today.getMinutes()),
        full = `${yr}-${mo}-${d} ${hr}:${mi}`;

    return full;
}


