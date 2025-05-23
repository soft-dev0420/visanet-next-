const jwt = require('jsonwebtoken');

const tokenCheck = (req, res, next) => {
    const { name, password } = req.body;

    const autheader = req.headers.authorization;
    if (!name || !password) {
        return res.status(400).json({ msg: 'Please provide all required fields' });
    }
    if (password.length < 6) {
        return res.status(400).json({ msg: 'Password must be at least 6 characters long' });
    }

    if (!autheader) return res.status(401).json({ msg: 'No token, authorization denied' });
    const token = autheader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

const validateSignup = (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ msg: 'Please provide all required fields' });
    }
    if (password.length < 6) {
        return res.status(400).json({ msg: 'Password must be at least 6 characters long' });
    }
    next();
}

const validateSignin = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ msg: 'Please provide all required fields' });
    }
    if (password.length < 6) {
        return res.status(400).json({ msg: 'Password must be at least 6 characters long' });
    }
    next();
}

module.exports = { tokenCheck, validateSignup, validateSignin };
