const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);

//
// RESUME SUMMARY GENERATOR
//
async function generateSummary(jobTitle, skills, experience) {

  try {

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
      Generate a professional ATS-friendly resume summary.

      Job Title: ${jobTitle}
      Skills: ${skills}
      Experience: ${experience}

      Make it concise and professional.
    `;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    return response;

  } catch (error) {

    console.log(error);

    return "Failed to generate summary";
  }
}

//
// SUMMARY API CONTROLLER
//
exports.generateSummary = async (req, res) => {

  try {

    const { jobTitle, skills, experience } = req.body;

    const summary = await generateSummary(
      jobTitle,
      skills,
      experience
    );

    res.json({ summary });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      summary: "Failed to generate summary"
    });
  }
};

//
// CHATBOT API CONTROLLER
//
exports.chatWithAI = async (req, res) => {

  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        reply: "Message is required"
      });
    }

    // CAREER-ONLY PROMPT
    const prompt = `
      You are an AI Career Assistant.

      ONLY answer questions related to:
      - careers
      - resumes
      - interviews
      - jobs
      - internships
      - programming skills
      - career growth

      If user asks unrelated questions,
      politely refuse.

      User Question:
      ${message}
    `;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    res.json({
      reply: response
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      reply: "AI service error"
    });
  }
};