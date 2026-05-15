import { useNavigate } from "react-router-dom";

function SelectTemplate() {
  const navigate = useNavigate();

  const chooseTemplate = (template) => {
    navigate("/create-resume", {
      state: { template },
    });
  };

  const templates = [
    {
      name: "Modern",

      color: "from-blue-500 to-indigo-600",

      description: "Best for developers, designers and modern tech careers.",

      features: [
        "Sidebar Design",
        "Projects Section",
        "Portfolio Links",
        "Modern UI",
      ],
    },

    {
      name: "Minimal",

      color: "from-gray-700 to-black",

      description:
        "ATS-friendly clean design for internships and fresh graduates.",

      features: [
        "Simple Layout",
        "ATS Optimized",
        "Clean Typography",
        "Fast Reading",
      ],
    },

    {
      name: "Professional",

      color: "from-emerald-600 to-teal-700",

      description: "Corporate-style template for managers and professionals.",

      features: [
        "Elegant Header",
        "Achievements",
        "Certifications",
        "Leadership",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-5xl font-bold text-center">Choose Resume Template</h1>

      <div className="grid lg:grid-cols-3 gap-10 mt-16">
        {templates.map((template) => (
          <div
            key={template.name}
            onClick={() =>
              navigate("/create-resume", {
                state: {
                  template: template.name,
                },
              })
            }
            className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
          >
            {/* TOP PREVIEW */}

            <div
              className={`h-56 bg-gradient-to-r ${template.color} p-6 flex items-end`}
            >
              <h2 className="text-4xl font-bold text-white">{template.name}</h2>
            </div>

            {/* BODY */}

            <div className="p-8">
              <p className="text-gray-600 leading-7">{template.description}</p>

              {/* FEATURES */}

              <div className="mt-6 space-y-3">
                {template.features.map((feature, index) => (
                  <div key={index} className="bg-gray-100 rounded-xl p-3">
                    {feature}
                  </div>
                ))}
              </div>

              {/* BUTTON */}

              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl transition">
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectTemplate;
