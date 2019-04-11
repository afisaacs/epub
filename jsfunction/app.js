const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

    console.log(req.url);
    
    if (req.method === 'GET' && req.url === '/moby-dick.epub') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Accept-Ranges', 'bytes');
        res.setHeader('Server', 'Giitic')
    
        fs.readFile('moby-dick.epub', (err, data) => {
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