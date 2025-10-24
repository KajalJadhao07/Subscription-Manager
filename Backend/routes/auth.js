const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register new user and return JWT
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        if (!name || !email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        const payload = { id: savedUser._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '1h' });

        res.status(201).json({ token, user: savedUser, msg: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
});

// Login and return JWT
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'User does not exist' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = { id: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET || 'dev-secret', { expiresIn: '1h' });

        res.status(200).json({ token, user, msg: 'Login successful' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error', error: err.message });
    }
});

module.exports = router;