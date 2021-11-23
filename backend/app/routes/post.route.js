const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer_config');
// Import du controller post pour gérer les actions.
const postCtrl = require('../controllers/posts.controller.js');

// /api/auth/routeActionController.
router.post('/', upload.single('profilePicture'), postCtrl.create);
router.get('/:id', postCtrl.findOne);
router.get('/', postCtrl.findAll);
router.delete('/:id', postCtrl.delete);

// Permet d'utiliser pots.js du répertoire routes.dans app.js à la base du projet.
module.exports = router;
