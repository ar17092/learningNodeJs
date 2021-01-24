/**
 * Curso de Node Js con bluuweb!
 */

/**
 * Servidor express básico
 */

const express = require('express');
const app = express();
const port = 3000;

//Motor de plantillas EJS
app.set('view engine','ejs');
app.set('views',__dirname+'/views');

/**
 * Archivos estáticos, al ponerlo antes de las rutas, si index existe, tomará la ruta raíz
 */
app.use(express.static(__dirname+'/public'));

/**
 * Exportando router
 */
app.use('/',require('./router/routes'));
app.use('/mascotas',require('./router/Mascotas'));

/**
 * Enviando un status 404
 */
app.use((req, res, next)=>{
    res.status(404).render("404",{
        titulo:"404",
        descripcion:"Not found"
    });
});

app.listen(port, ()=>{
    console.log(`Ejemplo de app escuchando en el url http://localhost:${port}`);
});
