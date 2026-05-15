router.post('/ats-score', async (req, res) => {

    try {

        const { skills, summary, experience } = req.body

        let score = 50

        if (skills.length > 20) score += 20

        if (summary.length > 100) score += 10

        if (experience.length > 100) score += 20

        if (score > 100) score = 100

        res.json({ score })

    } catch (error) {

        res.status(500).json({
            message: 'ATS Calculation Failed'
        })

    }

})