import { useNavigate } from "react-router-dom";

function SelectDocument() {
  useEffect(() => {
    document.title = "Select Document Type - CV Forge";
  }, []);
  const navigate = useNavigate();

  const chooseDocument = (type) => {
    localStorage.setItem("documentType", type);

    navigate("/create-document");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-700 to-cyan-500 text-white flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-bold text-center mb-14">
        Choose Document Type
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* COVER LETTER */}

        <div className="bg-white text-gray-800 rounded-3xl shadow-xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Cover Letter</h2>

            <p className="text-gray-500 leading-relaxed text-sm">
              Create a professional cover letter tailored for job applications
              and ATS-friendly hiring systems.
            </p>
          </div>

          <button
            onClick={() => chooseDocument("Cover Letter")}
            className="mt-4 bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors w-full md:w-auto"
          >
            Select
          </button>
        </div>

        {/* INTERNSHIP PROPOSAL */}

        <div className="bg-white text-gray-800 rounded-3xl shadow-xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Internship Proposal</h2>

            <p className="text-gray-500 leading-relaxed text-sm">
              Draft formal internship request letters for companies,
              supervisors, and university submissions.
            </p>
          </div>

          <button
            onClick={() => chooseDocument("Internship Proposal")}
            className="mt-4 bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors w-full md:w-auto"
          >
            Select
          </button>
        </div>

        {/* RECOMMENDATION LETTER */}

        <div className="bg-white text-gray-800 rounded-3xl shadow-xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Recommendation Letter</h2>

            <p className="text-gray-500 leading-relaxed text-sm">
              Generate professional recommendation letters for academic,
              internship, or employment purposes.
            </p>
          </div>

          <button
            onClick={() => chooseDocument("Recommendation Letter")}
            className="mt-4 bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors w-full md:w-auto"
          >
            Select
          </button>
        </div>

        {/* JOB APPLICATION */}

        <div className="bg-white text-gray-800 rounded-3xl shadow-xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Job Application</h2>

            <p className="text-gray-500 leading-relaxed text-sm">
              Build formal job application letters for companies, HR
              departments, and recruiters.
            </p>
          </div>

          <button
            onClick={() => chooseDocument("Job Application")}
            className="mt-4 bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors w-full md:w-auto"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectDocument;
