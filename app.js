/**
 * Curso de Node Js con bluuweb!
 */

/**
 * Servidor básico creado con NodeJs desde documentación oficial
 */
const http = require('http');

const hostname= '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hola</h1> <h2>Mundo</h2> <p>Como <strong>estas</strong></p>');
});

server.listen(port, hostname,() =>{
    console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
});
