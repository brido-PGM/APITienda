const mongoose = require('mongoose');
require('dotenv').config();

const URI =  `mongodb+srv://${process.env.USER}:${process.env.CON}@adso2903013.o31ha.mongodb.net/${process.env.DB}`
mongoose.connect(URI)

module.exports = mongoose;