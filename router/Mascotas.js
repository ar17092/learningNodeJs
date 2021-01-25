const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota')

router.get('/', async (req,res)=>{

    try {
        
        const arrayDB = await Mascota.find()
        //console.log(arrayDB);

        res.render('mascotas',{
            array: arrayDB
            // array: [
            //     {
            //         id:'1234',nombre:'Kiba',descripcion:"Kiba descripcion"
            //     },
            //     {
            //         id:'1235',nombre:'Perla',descripcion:"perla descripcion"
            //     }
            // ]
        });
    } catch (error) {
        console.log(error);
    }
});

router.get('/crear', (req,res)=>{
    res.render('crear');
});

router.post('/', async(req,res) =>{
    const body = req.body;
    try {
        await Mascota.create(body);
        res.redirect('/mascotas');
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;