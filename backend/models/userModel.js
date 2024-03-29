// models/userModel.js

// Data hardcode
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', password: 'password1' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', password: 'password2' }
  ];
  
  // Fungsi untuk mendapatkan semua pengguna
  const getAllUsers = () => {
    return users;
  };
  
  // Fungsi untuk mendapatkan pengguna berdasarkan ID
  const getUserById = (id) => {
    return users.find(user => user.id === id);
  };
  
  module.exports = {
    getAllUsers,
    getUserById
  };
  