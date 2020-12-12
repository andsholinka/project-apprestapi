'use strict';

var response = require('./res');
const connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Application REST API is running", res)
};

//!menampilam semua data mahasiswa
exports.tampilSemuaMahasiswa = (req, res) => {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if (error) {
            connection.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

//!menampilam semua data mahasiswa berdasarkan id
exports.tampilBerdasarkanId = (req, res) => {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa where id_mahasiswa = ?', [id],
        function (error, rows, field) {
            if (error) {
                connection.log(error)
            } else {
                response.ok(rows, res)
            }
        });
};