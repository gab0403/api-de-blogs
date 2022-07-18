const express = require('express');
const controller = require('../controllers/postController');
const middleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', middleware.validateToken, controller.getPost);

module.exports = router;