router.post('/cover-letter', async (req, res) => {

    try {

        const { company, role, skills } = req.body

        const prompt = `
        Write a professional cover letter for:

        Company: ${company}
        Role: ${role}
        Skills: ${skills}
        `

        const result = await model.generateContent(prompt)

        const response = await result.response

        const text = response.text()

        res.json({
            coverLetter: text
        })

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: 'Cover Letter Generation Failed'
        })

    }

})