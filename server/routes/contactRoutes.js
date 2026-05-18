const express = require('express')

const router = express.Router()

const nodemailer = require('nodemailer')

router.post('/send', async (req, res) => {

  try {

    const {
      name,
      email,
      subject,
      message
    } = req.body

    const transporter =
      nodemailer.createTransport({

        service: 'gmail',

        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      })

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

      subject: `CV Forge Contact: ${subject}`,

      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `
    })

    res.status(200).json({
      msg: 'Message Sent Successfully'
    })

  } catch (err) {

    console.log(err)

    res.status(500).json({
      msg: 'Failed to send message'
    })
  }
})

module.exports = router