let express = require('express');
let status = require('http-status');

module.exports = function(wagner) {

    let api = express.Router();

    // liste todas las empresas registradas: http://localhost:3000/organizacion/listar
    api.get('/listar', wagner.invoke(function (Empresa) {

        return function (req, res) {

            Empresa.find({}).exec(function (error, empresas) {
                if (error) {
                    return res.status(status.INTERNAL_SERVER_ERROR).json({error: error.toString()});
                }

                //res.json({ empresas: empresas});
                res.json(empresas);
            })
        };
    }));

    return api;
};