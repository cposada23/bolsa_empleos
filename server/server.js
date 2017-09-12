let express = require('express');
// let wagner = require('wagner-core');



let app = express();
require('./config/config')(app);
require('./endpoints/routes')(app);

// app.use('/organizacion', require('./routes/organizacion')(wagner));

app.listen(app.get('port'), () => {
    console.log(`Servidor express escuchado en el puerto ${app.get('port')}`);
});