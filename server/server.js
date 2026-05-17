const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const aiRoutes = require('./routes/aiRoutes')
const resumeRoutes =require('./routes/resumeRoutes')
const documentRoutes = require('./routes/documentRoutes')

dotenv.config()

const app = express()

console.log("MY GEMINI KEY =", process.env.VITE_GEMINI_API_KEY);
app.use(cors())
app.use(express.json())

app.use('/api/ai', aiRoutes)
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/auth', require('./routes/googleAuthRoutes'))
app.use('/api/resume', require('./routes/resumeRoutes'))
app.use('/api/resume', resumeRoutes)
app.use('/api/document', documentRoutes)


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('API Running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})