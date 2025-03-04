const exp = require('express');
const router = exp.Router();
const modeloProducto = require('../src/models/producto.model')

router.get('/productos/:x', async (req,res)=>{
    let resultado = await modeloProducto.findOne({'nombre':req.params.x});
    console.log(resultado);
    if(resultado) {
        res.json({'mensaje': resultado});
    } else {
        res.json({'mensaje': 'hubo un error'});
    }
});

module.exports = router