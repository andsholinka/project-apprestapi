const express = require('express');
const auth = require('./auth');
const verifikasi = require('./verifikasi');
const router = express.Router();

//! daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);

//! daftarkan menu login
router.post('/api/v1/login', auth.login);

router.post('/api/v1/ubahpassword', verifikasi(1), auth.ubahPassword);

router.get('/verify', auth.verifikasi)

//! halaman menampilkan data tabel oleh administrator
router.get('/api/v1/admin/mahasiswa', verifikasi(1), auth.adminmahasiswa);

module.exports = router;