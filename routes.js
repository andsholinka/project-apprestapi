'use strict';

const verifikasi = require('./middleware/verifikasi');

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilSemuaMahasiswa);

    app.route('/tampil/:id')
        .get(jsonku.tampilBerdasarkanId);

    app.route('/tambah')
        .post(verifikasi(1), jsonku.tambahMahasiswa);

    app.route('/ubah/:id')
        .put(verifikasi(1), jsonku.updateMahasiswa);

    app.route('/hapus/:id')
        .delete(verifikasi(1), jsonku.hapusMahasiswa);

    app.route('/tampilmatakuliah')
        .get(verifikasi(1), jsonku.tampilGroupMatakuliah);
}