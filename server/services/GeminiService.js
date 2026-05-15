const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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

        Make it concise and professional.`;

    const result = await model.generateContent(prompt);

    const response = result.response.text();

    return response;

  } catch (error) {
    console.log(error);
    return "Failed to generate summary";
  }
}

module.exports = { generateSummary };