const http = require('http');

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey guys!');
});

server.listen(3000, 'localhost');
console.log('Listening on port 3000');