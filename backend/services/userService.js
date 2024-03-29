const User = require('../models/userModel');

exports.createUser = async (userData) => {
    try {
        const newUser = await User.create(userData);
        return newUser;
    } catch (err) {
        throw new Error(err.message);
    }
};
