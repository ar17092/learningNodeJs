const express = require('express');
const router = express.Router();

/**
 * Path raíz
 */
router.get('/',(req,res)=>{
    res.render("index",{titulo:"Titulo dinámico"});
});

/**
 * Path de login
 */
router.get('/login', (req,res)=>{
    res.render("login",{titulo:"Ingresa tus credenciales"});
});

module.exports = router;