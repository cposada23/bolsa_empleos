let mongoose = require('mongoose');
let _ = require('underscore');

module.exports = function(wagner) {

    mongoose.connect('mongodb://localhost:27017/bolsa-de-empleos');

    let Empresa = mongoose.model('Empresa', require('./organizacion/empresa'), 'empresas' );

    let models = {
        Empresa: Empresa
    };

    _.each(models, function (value, key) {
        wagner.factory(key, function() {
            return value
        })
    });

    return models;
};