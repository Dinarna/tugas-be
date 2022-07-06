const express = require('express');
const getPost = require('../middlewares/getPost');
const router = express.Router();
const controller = require('../controllers/posts');
const auth = require('../middlewares/auth');
router.use(auth.auth);
router.get('/', controller.index);

router.get('/:id', getPost, controller.show);

router.post('/', controller.create);

router.patch('/:id', getPost, controller.update);

router.delete('/:id', getPost, controller.delete);



module.exports = router;