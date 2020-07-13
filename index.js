'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

 var cors = require('cors')
 app.use(cors())
 app.options('*', cors());

var persona_routes = require('./routes/personaRoute');
var auto_routes = require('./routes/autoRoute');
var auto_person_routes = require('./routes/autopersonaRoute');

var profesor_routes = require('./routes/profesoreRoute');
var asignatura_routes = require('./routes/asignaturaRoute');
var persona_asignatura_routes = require('./routes/personas_asignaturaRoute');

var usuario_routes = require('./routes/usuarioRoute');
const mongoose = require('mongoose')




app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api',persona_routes);
app.use('/api', auto_routes);
app.use('/api', auto_person_routes);
app.use('/api', profesor_routes);
app.use('/api', asignatura_routes);
app.use('/api', persona_asignatura_routes);
app.use('/api', usuario_routes);

mongoose.connect('mongodb+srv://danielbustos86:daniel123@cluster0-wxfwq.mongodb.net/UBB202001?retryWrites=true&w=majority', (err, res) => {

    if(err){
        console.log("NO CONECTA")
    }
    app.listen(5000, () => {

        console.log("Esta corriendo en puerto 5000")
    })
})