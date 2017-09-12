'use strict';

var path   = require('path');
let wagner = require('wagner-core');
require('../models/models')(wagner);

module.exports = function (app) {

    app.use('/organizacion', require('../routes/organizacion')(wagner));
    // app.use('/universidad', require('../models/universidad'));
    // app.use('/facultad',    require('../models/facultad'));
    // app.use('/carrera',     require('../models/carrera'));
    // app.use('/materia',     require('../models/materia'));
    // app.use('/usuario',     require('../models/'));
    
};