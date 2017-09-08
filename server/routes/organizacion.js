let express = require('express');
let status = require('http-status');

// todo: use the built in body-parser module in express
let bodyparser = require('body-parser');


module.exports = function(wagner) {

    let api = express.Router();
    api.use(bodyparser.json());

    // liste todas las empresas registradas: http://localhost:3000/organizacion/listar
    // Request headers:  name: Content-Type  value: application/json
    api.get('/listar', wagner.invoke(function (Empresa) {

        return function (req, res) {

            Empresa.find({}).exec(function (error, empresas) {
                if (error) {
                    return res.status(status.INTERNAL_SERVER_ERROR).json({error: error.toString()});
                }

                // todo: null response

                //res.json({ empresas: empresas});
                res.json(empresas);
            })
        };
    }));

    // Registre al nuevo usuario: http://localhost:3000/organizacion/registrar
    // Request headers:  name: Content-Type  value: application/json
    api.post('/registrar', wagner.invoke( function (User) {

        return function (req, res) {

            let reqUser = req.body;

            process.nextTick(function () {

                User.findOne({companyName: reqUser.companyName}, function (err, user) {

                    if(err){
                        return res
                            .status(status.INTERNAL_SERVER_ERROR)
                            .json({error: error.toString()});
                    }

                    if(user){
                        // todo: set a proper http status error

                        return res.status(status.CONFLICT).json({error: 'El usuario ya existe'});
                    }

                    let newCompany = new User();

                    newCompany.companyName = reqUser.companyName;
                    newCompany.role = reqUser.role;
                    newCompany.setPassword(reqUser.password);

                    newCompany.save( function (error) {

                        if(error){
                            return res
                                .status(status.INTERNAL_SERVER_ERROR)
                                .json({error: error.toString()});
                        }

                        res.json({message: 'Registro exitoso'});
                    });
                });
            });
        }
    }));

    api.post('/login', wagner.invoke(function (User) {

        return function (req,res) {

            let reqAccess = req.body;

            process.nextTick(function () {

                User.findOne({companyName: reqAccess.companyName}, function (err, user) {

                    // todo: set an adequate response message, or none if possible

                    if(err){
                        return res
                            .status(status.INTERNAL_SERVER_ERROR)
                            .json({error: error.toString()});
                    }

                    if(!user){
                        let content = {
                            success: false,
                            message: 'Incorrect username or password'
                        };
                        return res
                            .status(status.UNAUTHORIZED)
                            .json(content);
                    }

                    if(user){

                        if(!user.validPassword(reqAccess.password)){
                            let content = {
                                success: false,
                                message: 'Incorrect username or password'
                            };
                            return res
                                .status(status.UNAUTHORIZED)
                                .json(content);
                        }

                        let token = user.generateJwt();
                        let content = {
                            user: user.companyName,
                            role: user.role,
                            token: token
                        };

                        res.json(content);
                    }
                });
            });
        }
    }));

    return api;
};