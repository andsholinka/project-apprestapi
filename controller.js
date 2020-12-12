'use strict';

var response = require('./res');
const connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Application REST API is running", res)
};

//!menampilam semua data mahasiswa
exports.tampilSemuaMahasiswa = (req, res) => {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fileds) {
        if (error) {
            connection.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};