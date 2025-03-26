const modeloProducto = require('../models/producto.model')

exports.listar = async (req,res)=>{
    let resultado = await modeloProducto.find();
    console.log(resultado);
    if(resultado) {
        res.status(200).json({'mensaje' : resultado});
    } else {
        res.status(200).json({'mensaje' : 'Hubo un error'});
    }
}

exports.crear =  async (req, res)=>{
    let nuevoProducto = new modeloProducto({
        "referencia": req.body.ref,
        "nombre": req.body.name,
        "precio": req.body.price 
    })
    res.json(await nuevoProducto.save());
}

exports.buscar = async (req,res)=>{
    let resultado = await modeloProducto.findOne({'nombre':req.params.x});
    console.log(resultado);
    if(resultado) {
        res.status(200).json({'mensaje': resultado});
    } else {
        res.status(200).json({'mensaje': 'hubo un error'});
    }
}