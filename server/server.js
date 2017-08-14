let express = require('express');
let wagner = require('wagner-core');

require('./models/models')(wagner);

let app = express();

app.use('/organizacion', require('./routes/organizacion')(wagner));

app.listen(3000);
console.log('Escuchando en el puerto 3000: http://localhost:3000/');