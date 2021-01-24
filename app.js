/**
 * Curso de Node Js con bluuweb!
 */

/**
 * Servidor express básico
 */

const express = require('express');
const app = express();
const port = 3000;

//Conexión a base de datos
const mongoose = require('mongoose');

const user = "aragon";
const password = "ajar24332";
const dbname = "veterinaria";
const uri = `mongodb+srv://${user}:${password}@clusteraragon.js6b2.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, 
{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('DB conectada'))
.catch(e => console.log(e));

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
