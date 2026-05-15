const express = require('express')

const router = express.Router()

const Resume = require('../models/Resume')

router.post('/create', async (req, res) => {

    try {

        const resume = await Resume.create(req.body)

        res.json(resume)

    } catch (error) {

        res.status(500).json({
            message: 'Resume Creation Failed'
        })

    }

})

router.get('/:userId', async (req, res) => {

    try {

        const resumes = await Resume.find({
            user: req.params.userId
        }).sort({ createdAt: -1 })

        res.json(resumes)

    } catch (error) {

        res.status(500).json({
            message: 'Failed To Fetch Resumes'
        })

    }

})
router.put('/update/:id', async (req, res) => {

    try {

        const updatedResume = await Resume.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        res.json(updatedResume)

    } catch (error) {

        res.status(500).json({
            message: 'Resume Update Failed'
        })

    }

})

router.delete('/delete/:id', async (req, res) => {

    try {

        await Resume.findByIdAndDelete(req.params.id)

        res.json({
            message: 'Resume Deleted'
        })

    } catch (error) {

        res.status(500).json({
            message: 'Delete Failed'
        })

    }

})

module.exports = router