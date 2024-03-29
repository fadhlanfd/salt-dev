// Import dependencies
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // Import rute pengguna
``
// Create an instance of Express
const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

// Gunakan rute pengguna
app.use('/api/users', userRoutes); // Mengarahkan semua rute pengguna ke userRoutes

// Middleware untuk menangani permintaan yang tidak ditemukan (404)
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Middleware untuk menangani kesalahan internal server (500)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Listen for incoming requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
