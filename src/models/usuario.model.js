const mongo = require('../config/conection')

const schemaUsurio = new mongo.Schema({
    correo: {
        type: String,
        required: true,
        minLength: 5
    },
    contrasena: {
        type: String,
        required: true,
        minLength: 7
    },
    rol: {
        type: String,
        enum: ['invitado', 'vendedor', 'cliente'],
        default: 'invitado'
    }
}, {versionKey: false});

const modeloUsuario = mongo.model('usuario', schemaUsurio);
module.exports = modeloUsuario