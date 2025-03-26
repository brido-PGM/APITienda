const modeloUsuario = require('../models/usuario.model')
const modeloVendedor = require('../models/vendedor.model')

exports.registrar = async (req,res)=>{
    const nuevoUsuario = new modeloUsuario({
    correo: 'example22@gmail.com',
    contrasena: '11223344',
    rol: 'vendedor'
    });
    let resultado = await nuevoUsuario.save();
    console.log(resultado)

    const nuevoVendedor = new modeloVendedor({
        nombre: 'Carlos',
        documento: '123567890',
        ventas: 10,
        userId: resultado._id
    })
    let result = await nuevoVendedor.save();
    console.log(result)

}

exports.listar = async (req,res)=>{
    let resultado = await modeloVendedor.find();
    console.log(resultado);
    if(resultado) {
        res.status(200).json({'mensaje' : resultado});
    } else {
        res.status(200).json({'mensaje' : 'Hubo un error'});
    }
}

exports.buscar = async (req,res)=>{
    let resultado = await modeloVendedor.findOne({'nombre':req.params.x});
    console.log(resultado);
    if(resultado) {
        res.json({'mensaje': resultado});
    } else {
        res.json({'mensaje': 'hubo un error'});
    }
}

exports.editar = async (req, res)=>{
    let resultado = await modeloVendedor.findOne({'nombre':req.params.x});
    modeloVendedor.updateOne({resultado},{set: {
        nombre: 'Marcelo',
        documento: '0987654321',
        ventas: 5,
        userId: resultado._id
    }});
    resultado.save()
    console.log(resultado)
}
