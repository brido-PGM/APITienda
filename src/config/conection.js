const mongoose = require('mongoose');
require('dotenv').config();

//const URI = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@adso2903013.o31ha.mongodb.net/${process.env.BD}`
const URI =  `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@adso2903013.o31ha.mongodb.net/${process.env.BD}`
mongoose.connect(URI)

module.exports = mongoose;