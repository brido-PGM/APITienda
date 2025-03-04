// const { version } = require('mongoose');
const mongoose = require('../config/conection')

const schemaProducto = new mongoose.Schema ({
    referencia: {
        type: Number,
        required: [true, 'la referencia es obligatoria'],
        validate: {
            validator: Number.isInteger,
            message: 'la referencia debe ser numerica'
        }
    },
    nombre: {
        type: String,
        required: [true, 'el nombre es obligatorio'],
    },
    precio: {
        type: mongoose.Types.Decimal128,
        default: 0.0,
        min: [0.0, 'los precios no pueden ser negativos'],
    }
},{versionKey:false});

const producto = mongoose.model("producto", schemaProducto);
module.exports = producto;