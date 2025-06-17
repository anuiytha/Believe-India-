const express = require('express');
const router = express.Router();
const { createIdea, getIdeas, getIdeaById, updateIdea, deleteIdea, insertIdea } = require('../controllers/ideaController');

router.post('/ideas', createIdea);
router.get('/ideas', getIdeas);
router.get('/ideas/:idea_id', getIdeaById);
router.put('/ideas/:idea_id', updateIdea);
router.delete('/ideas/:idea_id', deleteIdea);

module.exports = router;