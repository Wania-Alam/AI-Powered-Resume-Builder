import {
  FaRobot,
  FaFileAlt,
  FaDownload,
  FaUserTie,
  FaLightbulb,
  FaShieldAlt,
  FaRocket,
  FaBrain,
} from "react-icons/fa";

function About() {
  useEffect(() => {
    document.title = "CV Forge | About";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-cyan-500 text-white">
      {/* HERO SECTION */}

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-white font-semibold tracking-widest uppercase mb-4">
              About CV Forge
            </p>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Build Professional Careers With AI Power
            </h1>

            <p className="text-gray-300 text-lg leading-9 mt-8">
              CV Forge is an AI-powered career platform designed to help
              students, fresh graduates, professionals, and job seekers create
              impactful resumes and professional documents effortlessly. Our
              goal is to simplify the job preparation journey through modern
              technology, intelligent automation, and elegant design.
            </p>

            <p className="text-white text-lg leading-9 mt-6">
              Whether you are applying for internships, entry-level jobs,
              scholarships, or senior corporate positions, CV Forge gives you
              the tools to create ATS-friendly resumes, professional letters,
              and personalized career guidance — all in one place.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800 p-6 rounded-2xl">
                  <FaFileAlt className="text-4xl text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold">Smart Resumes</h3>
                  <p className="text-gray-400 mt-2 text-sm">
                    ATS-friendly templates optimized for recruiters.
                  </p>
                </div>

                <div className="bg-slate-800 p-6 rounded-2xl">
                  <FaRobot className="text-4xl text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold">AI Chatbot</h3>
                  <p className="text-gray-400 mt-2 text-sm">
                    Get career guidance powered by Gemini AI.
                  </p>
                </div>

                <div className="bg-slate-800 p-6 rounded-2xl">
                  <FaDownload className="text-4xl text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold">PDF Export</h3>
                  <p className="text-gray-400 mt-2 text-sm">
                    Download polished resumes and documents instantly.
                  </p>
                </div>

                <div className="bg-slate-800 p-6 rounded-2xl">
                  <FaUserTie className="text-4xl text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold">Career Growth</h3>
                  <p className="text-gray-400 mt-2 text-sm">
                    Prepare for jobs, interviews, and opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 lg:p-16">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">Our Mission</h2>

            <p className="text-gray-400 mt-6 max-w-4xl mx-auto text-lg leading-8">
              We believe career preparation should be accessible, intelligent,
              and stress-free. CV Forge was created to empower individuals with
              modern AI tools that improve confidence, professionalism, and
              productivity during the job application process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-slate-800 p-8 rounded-3xl">
              <FaLightbulb className="text-5xl text-yellow-400 mb-6" />

              <h3 className="text-2xl font-bold mb-4">Innovation</h3>

              <p className="text-gray-400 leading-8">
                We combine AI technology with practical career-building tools to
                create smarter and faster workflows for users.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl">
              <FaShieldAlt className="text-5xl text-green-400 mb-6" />

              <h3 className="text-2xl font-bold mb-4">Security</h3>

              <p className="text-gray-400 leading-8">
                User data and professional information are protected with secure
                authentication and private storage systems.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-3xl">
              <FaRocket className="text-5xl text-cyan-400 mb-6" />

              <h3 className="text-2xl font-bold mb-4">Growth</h3>

              <p className="text-gray-400 leading-8">
                Our platform is designed to help users grow professionally,
                improve applications, and increase hiring opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">Why Choose CV Forge?</h2>

          <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
            Everything you need for professional career preparation in one
            intelligent platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <FaBrain className="text-5xl text-cyan-400 mb-6" />

            <h3 className="text-2xl font-bold mb-4">AI Assistance</h3>

            <p className="text-gray-400 leading-8">
              Generate summaries, get interview advice, and receive intelligent
              career suggestions instantly.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <FaFileAlt className="text-5xl text-cyan-400 mb-6" />

            <h3 className="text-2xl font-bold mb-4">Multiple Templates</h3>

            <p className="text-gray-400 leading-8">
              Choose between Minimal, Modern, and Professional resume styles.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <FaDownload className="text-5xl text-cyan-400 mb-6" />

            <h3 className="text-2xl font-bold mb-4">Instant Downloads</h3>

            <p className="text-gray-400 leading-8">
              Download resumes and documents in clean PDF format anytime.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl">
            <FaRobot className="text-5xl text-cyan-400 mb-6" />

            <h3 className="text-2xl font-bold mb-4">Career Chatbot</h3>

            <p className="text-gray-400 leading-8">
              Ask questions related to jobs, resumes, internships, and
              professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-slate-900 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-5xl font-bold">
            Start Building Your Career Today
          </h2>

          <p className="text-lg text-cyan-100 mt-6 leading-8 max-w-3xl mx-auto">
            Create professional resumes, generate career documents, and receive
            AI-powered career guidance with CV Forge. Your next opportunity
            starts here.
          </p>

          <button className="mt-10 bg-white text-blue-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;
