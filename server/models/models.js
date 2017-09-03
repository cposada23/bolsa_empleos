let mongoose = require('mongoose');
let _ = require('underscore');
let config = require('../config/settings');

module.exports = function(wagner) {

    mongoose.connect(config.database);

    let Empresa = mongoose.model('Empresa', require('./organizacion/empresa'), 'empresas' );
    let User = mongoose.model('User', require('./organizacion/user'), 'users');

    let models = {
        Empresa: Empresa,
        User: User
    };

    _.each(models, function (value, key) {
        wagner.factory(key, function() {
            return value
        })
    });

    return models;
};