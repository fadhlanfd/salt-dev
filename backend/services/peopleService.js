// services/userService.js
const People = require('../models/peopleModel');

// Contoh fungsi untuk membuat pengguna baru
exports.createUser = async (userData) => {
    try {
        const newUser = await People.create(userData);
        return newUser;
    } catch (err) {
        throw new Error(err.message);
    }
};
