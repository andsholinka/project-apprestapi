'use strict';

var response = require('./res');
const connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Application REST API is running", res)
};

//menampilam semua data mahasiswa
exports.tampilSemuaMahasiswa = (req, res) => {
    connection.query('SELECT * FROM mahasiswa', function (error, rows, fields) {
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilam semua data mahasiswa berdasarkan id
exports.tampilBerdasarkanId = (req, res) => {
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa where id_mahasiswa = ?', [id],
        function (error, rows, field) {
            if (error) {
                console.log(error)
            } else {
                response.ok(rows, res)
            }
        });
};

//menambah data mahasiswa
exports.tambahMahasiswa = (req, res) => {
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)',
        [nim, nama, jurusan],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil Menambahkan Data!", res)
            }
        }
    );
};

//mengubah data berdasarkan id
exports.updateMahasiswa = (req, res) => {
    var id = req.params.id;
    var nim = req.body.nim;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query('UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?',
        [nim, nama, jurusan, id],
        function (error, rows, fields) {
            if (error) {
                console.log(error)
            } else {
                response.ok("Berhasil Mengubah Data!", res)
            }
        }
    );
};

//menghapus data berdasarkan id
exports.hapusMahasiswa = function (req, res) {
    var id = req.params.id;
    connection.query('DELETE FROM mahasiswa WHERE id_mahasiswa=?', [id],
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Berhasil Hapus Data", res)
            }
        }
    );
}

//menampilkan matakuliah group
exports.tampilGroupMatakuliah = function (req, res) {
    connection.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa',
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.oknested(rows, res);
            }
        }
    );
}