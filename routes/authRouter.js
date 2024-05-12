const express = require('express');
const { check } = require('express-validator');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');

const router = express.Router();

router.post('/register', [
    check('username').notEmpty().withMessage('Username is required'),
    check('email').isEmail().withMessage('Invalid email'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], registerUser);

router.post('/login', [
    check('email').isEmail().withMessage('Invalid email'),
    check('password').notEmpty().withMessage('Password is required')
], loginUser);

router.post('/logout', logoutUser);

module.exports = router;
