const express = require('express')

const router = express.Router()

const auth = require('../middleware/auth')

const User = require('../models/User')

router.get('/me', auth, async (req, res) => {

  try {

    const user = await User.findById(req.userId)
      .select('-password')

    res.json(user)

  } catch (err) {

    console.log(err)

    res.status(500).json({
      msg: 'Server Error'
    })

  }
})

module.exports = router