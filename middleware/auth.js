const connection = require('../koneksi');
const mysql = require('mysql');
const md5 = require('MD5');
const response = require('../res');
const jwt = require('jsonwebtoken');
const config = require('../controller/secret');
const ip = require('ip');

//controller untuk register
exports.registrasi = (req, res) => {
    var post = {
        username = req.body.username,
        email = req.body.email,
        password = md5(req.body.password),
        role = req.body.role,
        tanggal_daftar = new Date()
    }

    var query = "SELECT email FROM ?? WHERE ??";
    var table = ["user", "email", post.email];

    query = mysql.format(query, table);

    connection.query(query, function (err, rows) {
        if (err) {
            console.log(err);
        } else {
            if (rows.length == 0) {
                var query = "INSERT INTO ?? SET ?";
                var table = ["user"];
                query = mysql.format(query, table),
                    connection.query(query, function (err, rows) {
                        if (err) {
                            console.log(err)
                        } else {
                            response.ok("Berhasil menambahkan data user baru", res)
                        }
                    });
            } else {
                response.ok("Email sudah terdaftar!")
            }
        }
    })
}