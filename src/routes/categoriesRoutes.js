const express = require('express');
const controller = require('../controllers/categoriesController');
const middleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', middleware.validateToken, controller.createCategory);

module.exports = router;