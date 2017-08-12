var express = require('express');
var wagner = require('wagner-core');

require('./models/models')(wagner);

var app = express();

app.listen(3000);
console.log('Escuchando en el puerto: http://localhost:3000/');