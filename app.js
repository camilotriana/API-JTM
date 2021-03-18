const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const db = require('./config/db').database;

//Conexion a la base de datos
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log('CONEXION EXITOSA');
    })
    .catch((err)=>{
        console.log('CONEXION FALLIDA',err);
    });

//Definir puerto
const port = process.env.port || 3000;

//Inicializmos Middlewares
//app.use(cors());
app.use(bodyParser.json());

const customerRoutes = require('./routes/apis/controllerCustomer');
app.use('/api/customers', customerRoutes);

app.listen(port, ()=>{
    console.log('Servidor iniciado en el puerto',port);
});