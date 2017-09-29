let config = require('../config/settings');
let jwt = require('jsonwebtoken');
let status = require('http-status');

module.exports = {

    verifyToken: ((req, res, next) => {

        let token = req.body.user.token;

        // todo: verify the current role as an organizational user

        if(token) {
            jwt.verify(token, config.secret, (error, decoded) => {
                if(error) {
                    return res
                        .status(status.FORBIDDEN)
                        .json({error: error.toString()})
                }
                req.decoded = decoded;
                next();
            })
        } else {
            return res
                .status(status.UNAUTHORIZED)
                .json({error: error.toString()})
        }
    })
};