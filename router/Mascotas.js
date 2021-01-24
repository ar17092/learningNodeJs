const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('mascotas',{
        array: [
            {
                id:'1234',nombre:'Kiba',descripcion:"Kiba descripcion"
            },
            {
                id:'1235',nombre:'Perla',descripcion:"perla descripcion"
            }
        ]
    });
});

module.exports = router;