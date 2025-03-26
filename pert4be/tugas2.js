const http = require('http');
const Router = require('./Router');

const port = 3000;
const app = http.createServer(Router);

app.listen(port, () => {
    console.log(`Server running on port number: ${port}`);
});