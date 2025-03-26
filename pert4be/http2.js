const http = require('http');

const routes = {
    '/info' : '<h1> Info Page</h1> ', //  cara akses ini ketik http://localhost:3000/info
    '/about' : '<h1> Learn More About us</h1>',
    '/conatct' : '<h1> Contact Us </h1>',
};

const port = 3000;
const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');

    if (routes[req.url]) { // ada slash kek http://localhost:3000/info akan keluarkan hasil dalam nya
        res.end(routes[req.url]);
    } else { // jika hanya http://localhost:3000 dia akan mengeluarkan welcome
        res.end('<h1> Welcome!</h1>');
    }
});

app.listen(port);
console.log('server running on port number : ${port');