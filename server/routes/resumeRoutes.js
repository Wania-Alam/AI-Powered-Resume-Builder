const express = require('express')
const router = express.Router()

const auth = require('../middleware/auth')
const resumeController = require('../controllers/resumeController')

router.post('/create', auth, resumeController.createResume)

router.get('/my-resumes', auth, resumeController.getMyResumes)

router.get('/single/:id', auth, resumeController.getSingleResume)

router.put('/update/:id', auth, resumeController.updateResume)

router.delete('/delete/:id', auth, resumeController.deleteResume)

module.exports = router