const fs = require('fs');

function readHTMLFile(fileName) {
  try {
    const fileContent = fs.readFileSync(fileName);
    return fileContent;
  } catch (err) {
    console.log(err.message);
    return '';
  }
}

const routes = {
  '/': './views/index.html',
  '/about': './views/about.html',
  '/info' : '<h1>Information About Us</h1> Richard', // ini ditambahkan sesuai permintaan /info
};

function handle(request, response) {
  const url = request.url;
  console.log(`Someone opens ${url}`);
  
  response.setHeader('Content-Type', 'text/html');
  response.setHeader('Content-Type', 'text/html');
  if (routes[url]) {
    response.statusCode = 200;
    if (url === '/info'){
      response.end(routes[url]);
    } else {
      response.end(readHTMLFile(routes[url]));
    }
  }
  else { 
    response.statusCode = 404;
    response.end('<h1>Page not found</h1>');
  }
}

module.exports = handle ;