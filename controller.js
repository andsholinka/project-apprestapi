'use strict';

var response = require('./res');
const connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Application REST API is running")
};