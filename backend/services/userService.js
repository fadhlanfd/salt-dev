// services/userService.js
const User = require('../models/userModel');

// Contoh fungsi untuk membuat pengguna baru
exports.createUser = async (userData) => {
    try {
        const newUser = await User.create(userData);
        return newUser;
    } catch (err) {
        throw new Error(err.message);
    }
};
