const http = require('http');
const fs = require('fs');

const hostname = '192.168.1.180';
const port = 3000;

const server = http.createServer((req, res) => {

    console.log(req.url);
    
    if (req.method === 'GET' && req.url === '/echo.epub') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Accept-Ranges', 'bytes');
        res.setHeader('Server', 'Giitic');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.setHeader('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    
        fs.readFile('pre _ fer.epub', (err, data) => {
            if (err) throw err;
            console.log('Solicitud epub');
            res.end(data);
            // request.pipe(data);
        });
      } else {
        console.log('No encontrado');
        res.statusCode = 404;
        res.end();
      }
    
});

server.listen(port, hostname, () => {
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});