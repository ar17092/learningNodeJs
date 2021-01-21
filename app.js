/**
 * Servidor básico creado con NodeJs desde documentación oficial
 */
// const http = require('http');

// const hostname= '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hola mundo');
// });

// server.listen(port, hostname,() =>{
//     console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
// });


/**
 * Curso de Node Js con bluuweb!
 */

//Importando forma 1
//const frutero = require('./frutas')

//Importando forma 2
const {frutas,pisto} = require('./frutas');
var cowsay = require('cowsay');

 frutas.forEach(item =>{
     console.count(item);
 });
console.log("\n"+pisto);

console.log(cowsay.say({
	text : "I'm a moooodule",
	e : "oO",
	T : "U "
}));