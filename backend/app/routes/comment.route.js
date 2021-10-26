const express = require('express');
const router = express.Router();

// Import du controller post pour gérer les actions.
const commentCtrl = require('../controllers/comments.controller.js');

// REST convention les resc au pluriels. =>
// GET /comments // récupérer la liste des commentaires
// POST /comments // créer un commentaire
// GET /comments/:id // récupérer le commentaire 1
// PUT /comments/:id // éditer le commentaire 1
// DELETE /comments/:id // supprimer le commentaire 1

router.post('/:postid/comments', commentCtrl.create);
router.get('/:postid/comments', commentCtrl.findAllByPost); // get sur le post id tous les comment'

module.exports = router;
