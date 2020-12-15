const jwt = require('jsonwebtoken');
const config = require('../config/secret');

function verifikasi(role) {
    return function (req, res, next) {
        //cek auth header
        var token = req.headers['authorization'];
        if (!token) return res.status(401).send({
            auth: false,
            message: 'No token provided.'
        });
        //verifikasi
        jwt.verify(token, config.secret, function (err, decoded) {
            if (err) {
                return res.status(401).send({
                    auth: false,
                    message: 'Token tidak terdaftar!'
                });
            } else {
                // console.log(role)
                if (role == 1) {
                    req.auth = decoded;
                    next();
                } else {
                    return res.status(401).send({
                        auth: false,
                        message: 'Gagal mengotorisasi role anda!'
                    });
                }
            }
        });
    }
}

module.exports = verifikasi