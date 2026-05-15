const express = require('express')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')

const User = require('../models/User')

const router = express.Router()

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

router.post('/google', async (req, res) => {

    try {

        const { credential } = req.body

        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID
        })

        const payload = ticket.getPayload()

        const { name, email } = payload

        let user = await User.findOne({ email })

        // CREATE USER IF NOT EXISTS

        if (!user) {

            user = await User.create({
                name,
                email,
                password: 'google-auth-user'
            })

        }

        // GENERATE JWT

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        )

        res.json({
            token,
            user
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: 'Google Authentication Failed'
        })

    }

})

module.exports = router