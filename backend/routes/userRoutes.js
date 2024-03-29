// routes/userRoutes.js
const express = require('express');
const userModel = require('../models/userModel');

const router = express.Router();

// Route to get all users
router.get('/', (req, res) => {
  const users = userModel.getAllUsers();
  res.json(users);
});

// Route to get user by ID
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = userModel.getUserById(userId);
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
});

module.exports = router;
