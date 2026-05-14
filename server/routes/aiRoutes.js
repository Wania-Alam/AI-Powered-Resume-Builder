const express = require('express')
const { generateSummary } = require('../services/GeminiService')

const router = express.Router()

router.post('/summary', async (req, res) => {
    const { jobTitle, skills } = req.body

    const result = await generateSummary(jobTitle, skills)

    res.json({ summary: result })
})

module.exports = router