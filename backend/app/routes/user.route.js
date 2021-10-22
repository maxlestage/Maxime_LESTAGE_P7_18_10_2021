const express = require('express');
const router = express.Router();

// Import du controller user pour gérer les actions.
const userCtrl = require('../controllers/users.controller.js');

// /api/auth/routeActionController.
router.post('/signup', userCtrl.userSignup);
router.post('/login', userCtrl.userLogin);

// Permet d'utiliser user.js du répertoire routes.dans app.js à la base du projet.
module.exports = router;
