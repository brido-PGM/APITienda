const exp = require('express');
require('dotenv').config();
const enrutador = require('./routes/router');

const app = exp();

app.use(exp.json());    //  todo lo que se manda o se recibe se visualiza como un .json
app.use(exp.urlencoded({extended:false}));  //  las url pueden tener datos codificados

app.use('/v1', enrutador);

app.listen(process.env.PORT, ()=>{
    console.log('Estamos en el puerto' + process.env.PORT);
});