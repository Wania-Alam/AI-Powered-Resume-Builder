const Resume = require('../models/Resume')

/**
 * CREATE RESUME
 */
exports.createResume = async (req, res) => {
  try {
    const resume = await Resume.create({
      userId: req.userId,
      ...req.body
    })

    res.json(resume)

  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: 'Failed to save resume' })
  }
}

/**
 * GET ALL RESUMES
 */
exports.getMyResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({
      userId: req.userId
    }).sort({ createdAt: -1 })

    res.json(resumes)

  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch resumes' })
  }
}

/**
 * GET SINGLE RESUME
 */
exports.getSingleResume = async (req, res) => {
  try {
    const resume = await Resume.findOne({
      _id: req.params.id,
      userId: req.userId
    })

    res.json(resume)

  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch resume' })
  }
}

/**
 * UPDATE RESUME
 */
exports.updateResume = async (req, res) => {
  try {
    const updated = await Resume.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.userId
      },
      req.body,
      { new: true }
    )

    res.json(updated)

  } catch (err) {
    res.status(500).json({ msg: 'Failed to update resume' })
  }
}

/**
 * DELETE RESUME
 */
exports.deleteResume = async (req, res) => {
  try {
    await Resume.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId
    })

    res.json({ msg: 'Deleted' })

  } catch (err) {
    res.status(500).json({ msg: 'Failed to delete resume' })
  }
}