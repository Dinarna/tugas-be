const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('../middlewares/auth');
const {
    NONAME
} = require('dns');
require('dotenv').config();


module.exports = {
    index: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },
    register: async (req, res) => {
        const {
            name,
            email,
            password
        } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name: name,
            email: email,
            password: hashedPassword
        });

        try {
            const newUser = await user.save();
            res.status(201).json(newUser);
        } catch (error) {
            res.status(400).json({
                message: error.message
            })
        }
    },
    login: async (req, res) => {
        const {
            email,
            password
        } = req.body;
        try {
            const user = await User.findOne({
                email: email
            });
            if (user && bcrypt.compareSync(password, user.password)) {
                res.json({
                    userId: user._id,
                    token: auth.generateToken(user),
                });
            } else {
                res.status(400).json({
                    message: 'Invalid login credentials'
                });
            }
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}