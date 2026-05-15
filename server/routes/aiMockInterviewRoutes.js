router.post('/mock-interview', async (req, res) => {

    try {

        const { role } = req.body

        const prompt = `
        Generate 10 interview questions for ${role}
        `

        const result = await model.generateContent(prompt)

        const response = await result.response

        const text = response.text()

        res.json({
            questions: text
        })

    } catch (error) {

        res.status(500).json({
            message: 'Interview Generation Failed'
        })

    }

})