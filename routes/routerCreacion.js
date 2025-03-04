const exp = require('express');
const router = exp.Router();
const modeloProducto = require('../src/models/producto.model')

const app = exp()


router.post('/productos', async (req, res)=>{
    let nuevoProducto = new modeloProducto({
        "referencia": req.body.ref,
        "nombre": req.body.name,
        "precio": req.body.price 
    })
    res.json(await nuevoProducto.save());
})

module.exports = router
