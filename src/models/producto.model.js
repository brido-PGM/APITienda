const { model } = require('mongoose');
const mongoose = require('../config/conection')

const schemaProducto = new mongoose.Schema ({
    refencia: {
        type: [Number, 'la referencia debe ser numerica'],
        required: [true, 'la referencia es obligatoria']
    },
    nombre: {
        type: [String, 'el nombre debe ser texto'],
        required: [true, 'el nombre es obligatorio']
    },
    precio: {
        type: [Decimal128, 'el precio debe tener decimales'],
        default: 0.0,
        min: [0.0, 'los precios no pueden ser negativos']
    }
},{versionKey:false});

const producto = mongoose.model("producto", schemaProducto);
module.exports = producto;