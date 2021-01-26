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

//Crear nueva mascota
router.post('/', async(req,res) =>{
    const body = req.body;
    try {
        await Mascota.create(body);
        res.redirect('/mascotas');
    } catch (error) {
        console.log(error);
    }
});

//Obtener mascota por ID
router.get('/:id', async(req,res)=>{
    const id = req.params.id;
    try {
        const mascota  = await Mascota.findOne({_id: id});
        res.render('detalle',{
            mascota,
            error: false
        });
    } catch (e) {
        //console.log(e);
        res.render('detalle',{
            error: true,
            mensaje:"No existe el id seleccionado"
        });
    }
});

router.delete('/:id',async(req,res)=>{
    const id = req.params.id;

    try {
        const mascota = await Mascota.findByIdAndDelete({_id:id});

        if (mascota) {
            res.json({
                estado: true,
                mensaje: "eliminado"
            });
        } else {
            res.json({
                estado: false,
                mensaje: "Falló eliminar"
            });
        }

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;