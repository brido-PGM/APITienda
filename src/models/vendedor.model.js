const mongo = require('../config/conection')

const schemaVendedor = new mongo.Schema({
    nombre: {
        type: String,
        required: true
    },
    documento: {
        type: String,
        required: true,
        minLength: 7,
        maxLength: 10,
    },
    ventas: {
        type: Number,
        default: 0,
        min: 0
    },
    userId: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
},{versionKey: false});

const modeloVendedor = mongo.model('vendedor', schemaVendedor);
module.exports = modeloVendedor