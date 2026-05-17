const express = require('express');

const router = express.Router();

const {
  generateSummary,
  chatWithAI
} = require('../controllers/aiController');

//
// RESUME SUMMARY
//
router.post('/summary', generateSummary);

//
// CHATBOT
//
router.post('/chat', chatWithAI);

module.exports = router;