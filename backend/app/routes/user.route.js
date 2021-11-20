const express = require('express');
const router = express.Router();

// Middleware qui gère l'upload sur notre app.
const multer = require('multer');
const upload = require('../middleware/multer_config');
// const destination = multer({ dest: 'images/' });

const sessionAuth = require('../middleware/session.js');

// Import du controller user pour gérer les actions.
const userCtrl = require('../controllers/users.controller.js');

// /api/auth/routeActionController.
router.post('/signup', upload.single('profilePicture'), userCtrl.userSignup);
router.post('/login', userCtrl.userLogin);
router.put(
    '/edit/:id',
    sessionAuth,
    upload.single('profilePicture'),
    userCtrl.userEdit
);
router.delete('/delete/:id', sessionAuth, userCtrl.deleteUser);
router.delete('/logout', sessionAuth, userCtrl.userLogout);
router.get('/user', sessionAuth, userCtrl.userMe);
router.get('/:id', sessionAuth, userCtrl.getAllPostsByUser); // ordre de route si route avec specificité

// Permet d'utiliser user.js du répertoire routes.dans app.js à la base du projet.
module.exports = router;
