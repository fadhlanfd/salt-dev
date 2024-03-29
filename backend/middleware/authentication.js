// middleware/authentication.js
const jwt = require('jsonwebtoken');

// Contoh middleware untuk mengautentikasi pengguna
exports.authenticateUser = (req, res, next) => {
    // Lakukan proses autentikasi di sini
    // Jika pengguna berhasil diotentikasi, panggil next()
    // Jika autentikasi gagal, kirim respons error
};
