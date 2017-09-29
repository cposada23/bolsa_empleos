let express = require('express');
let status = require('http-status');
let auth =  require('../middleware/auth');

module.exports = function(wagner) {

    let api = express.Router();

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
            req.assert('companyName', 'You must enter the company Username').notEmpty();
            req.assert('password', 'Password must be at least 4 characters long').len(4);

            let errors = req.validationErrors();

            if(errors) {
                console.error('errors: ', errors);
                return res.status(status.BAD_REQUEST).send(errors);
            }

            process.nextTick(function () {

                User.findOne({companyName: reqUser.companyName}, function (err, user) {

                    if(err){
                        return res
                            .status(status.INTERNAL_SERVER_ERROR)
                            .json({error: err.toString()});
                    }

                    if(user){

                        return res
                            .status(status.CONFLICT)
                            .json({error: 'The username already exist'});
                    }

                    User(reqUser).save( function (error) {

                        if(error){
                            return res
                                .status(status.INTERNAL_SERVER_ERROR)
                                .json({error: error.toString()});
                        }

                        res.json({message: 'Successful registration'});
                    });
                });
            });
        }
    }));

    // autentique al usuario: http://localhost:3000/organizacion/login
    // Request headers:  name: Content-Type  value: application/json
    api.post('/login', wagner.invoke(function (User) {

        return function (req,res) {
            req.assert('companyName', 'You must enter the company Username').notEmpty();
            req.assert('password', 'Password must be at least 4 characters long').len(4);

            let errors = req.validationErrors();

            if(errors) {
                console.error('errors: ', errors);
                return res.status(status.BAD_REQUEST).send(errors);
            }

            let reqAccess = req.body;

            process.nextTick(function () {

                User.findOne({companyName: reqAccess.companyName}, function (err, user) {

                    // todo: unset the success field.
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

    // Registre la oferta: http://localhost:3000/organizacion/nuevo
    // Request headers:  name: Content-Type  value: application/json
    api.post('/nuevo', auth.verifyToken, wagner.invoke(function (Job) {

        return function (req, res) {

            // todo: field validation (by asserts or using the built-in mongoose validators)

            let reqJob = req.body.content;

            process.nextTick(function () {

                Job.findOne({jobName: reqJob.jobName}, function (err, job) {

                    if(err){
                        return res
                            .status(status.INTERNAL_SERVER_ERROR)
                            .json({error: err.toString()});
                    }

                    if(job){
                        return res
                            .status(status.CONFLICT)
                            .json({error: err.toString()});
                    }

                    Job(reqJob).save(function (error) {
                        if(error){
                            return res
                                .status(status.INTERNAL_SERVER_ERROR)
                                .json({error: error.toString()});
                        }

                        res.json({message: 'Job has been successfully registered'});
                    });
                })
            })
        }
    }));

    return api;
};