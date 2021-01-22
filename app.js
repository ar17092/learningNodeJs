/**
 * Curso de Node Js con bluuweb!
 */

/**
 * Servidor express básico
 */

const express = require('express');
const app = express();
const port = 3000;


/**
 * Archivos estáticos, al ponerlo antes de las rutas, si index existe, tomará la ruta raíz
 */
app.use(express.static(__dirname+'/public'));

/**
 * Path raíz
 */
app.get('/',(req,res)=>{
    res.send(`Hola mundo en puerto ${port}`)
});

/**
 * Path de login
 */
app.get('/login', (req,res)=>{
    res.send('Página de login desde el path /login')
});

/**
 * Enviando un servicio 404
 */
app.use((req, res, next)=>{
    res.status(404).sendFile(__dirname+"/public/404.html")
});

app.listen(port, ()=>{
    console.log(`Ejemplo de app escuchando en el url http://localhost:${port}`);
});
