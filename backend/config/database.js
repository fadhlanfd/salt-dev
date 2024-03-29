// config/database.js
const { Pool } = require('pg');

// Buat pool koneksi PostgreSQL
const pool = new Pool({
    user: 'username',
    host: 'localhost',
    database: 'database_name',
    password: 'password',
    port: 5432,
});

// Export pool koneksi PostgreSQL
module.exports = pool;
