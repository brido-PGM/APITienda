const exp = require('express');
require('dotenv').config();
const enrutador = require('./routes/router');

const app = exp();

app.use(exp.json());    //  todo lo que se manda o se recibe se visualiza como un .json
app.use(exp.urlencoded({extended:false}));  //  las url pueden tener datos codificados

app.use('/v1', enrutador);
app.use('/v2', enrutador);
// app.use('/v3', enrutadorCreacion);


app.listen(9999, ()=>{
    console.log('Estamos en el puerto' + 9999);
})