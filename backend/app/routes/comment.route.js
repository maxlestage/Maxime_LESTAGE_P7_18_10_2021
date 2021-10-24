const express = require('express');
const router = express.Router();

// Import du controller post pour gérer les actions.
const commentCtrl = require('../controllers/comments.controller.js');

router.post('/:postid/comments', commentCtrl.create);

module.exports = router;
