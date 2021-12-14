// const morgan = require('morgan');
const express = require('express')
const path = require('path');
const config = require('./config.js');
const app = express();

// app.use(morgan('dev'));
app.use(express.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Static Files
app.use(express.static(path.join(__dirname,'build')));

// Dinamic routes
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Starting Server
app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});
