const http = require('http');
// setup hostname dan port yang akan digunakan
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// membyuat server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // 200 ok
    res.setHeader('Content-type', 'text/plain'); // memberti tahu browser tipe dan data respon yang dikirim
    res.end('Hello World');// mengakshiri respon dengan hello world
});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/')
});
// cara buka localhost:3000 di tempat url google atau browser
// kalau mau matiin server langsung ctrl + c di terminal
