const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Sign Up
router.post('/signup', authMiddleware.validateSignup,  async (req, res) => {
    const { username, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'User already exists' });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user = new User({ username, email, password: hashedPassword });
        user.save().then(() => {
            const payload = { user: { id: user.id } };
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        }).catch((err) => {
            console.error('Error creating user:', err);
            return res.status(500).json({ msg: 'Server error' });
        })
        
        
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Sign In
router.post('/signin', authMiddleware.validateSignin, async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'Invalid Email' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid Password' });

        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Update Profile
router.put('/profile', authMiddleware.tokenCheck, async (req, res) => {
    const { username, email } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            { username, email },
            { new: true }
        );
        res.json(updatedUser);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
