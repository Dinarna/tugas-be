const express = require('express');
const controller = require('../controllers/auth');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', controller.index);
router.post('/register', controller.register);
router.post('/login', controller.login);

module.exports = router;