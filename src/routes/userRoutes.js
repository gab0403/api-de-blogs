const express = require('express');
const controller = require('../controllers/userController');
const middleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', middleware.validateToken, controller.getUsers);
router.post('/', controller.createUser);

module.exports = router;