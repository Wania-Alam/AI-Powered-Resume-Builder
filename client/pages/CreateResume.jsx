import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useNavigate, useParams } from "react-router-dom";

import API from "../services/api";

import MinimalForm from "../components/forms/MinimalForm";
import ModernForm from "../components/forms/ModernForm";
import ProfessionalForm from "../components/forms/ProfessionalForm";

import MinimalTemplate from "../components/templates/MinimalTemplate";
import ModernTemplate from "../components/templates/ModernTemplate";
import ProfessionalTemplate from "../components/templates/ProfessionalTemplate";

function CreateResume() {
  useEffect(() => {
    document.title = "Create Resume - CV Forge";
  }, []);

  const { id } = useParams(); // ✅ FIXED (inside component)
  const navigate = useNavigate(); // ✅ FIXED

  const selectedTemplate = localStorage.getItem("template");

  const resumeRef = useRef();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    jobTitle: "",
    summary: "",
    skills: "",
    education: "",
    experience: "",
    projects: "",
    certifications: "",
    achievements: "",
    languages: "",
  });

  // =========================
  // AI SUMMARY
  // =========================
  const generateSummary = async () => {
    try {
      setLoading(true);

      const res = await API.post("/ai/summary", {
        jobTitle: formData.jobTitle,
        skills: formData.skills,
      });

      setFormData((prev) => ({
        ...prev,
        summary: res.data.summary,
      }));

      toast.success("AI Summary Generated");
    } catch (error) {
      console.log(error);
      toast.error("Failed To Generate Summary");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOAD EXISTING RESUME
  // =========================

  useEffect(() => {
    const fetchResume = async () => {
      try {
        if (!id) return;

        const token = localStorage.getItem("token");

        const res = await API.get(`/resume/single/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setFormData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchResume();
  }, [id]);

  // =========================
  // AUTO SAVE DRAFT
  // =========================

  useEffect(() => {
    localStorage.setItem("resumeDraft", JSON.stringify(formData));
  }, [formData]);

  // =========================
  // RESTORE DRAFT
  // =========================

  useEffect(() => {
    if (id) return;

    const draft = localStorage.getItem("resumeDraft");

    if (draft) {
      setFormData(JSON.parse(draft));
    }
  }, []);
  // =========================
  // SAVE RESUME
  // =========================
  const saveResume = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return toast.error("Please login first");
      }

      const payload = {
        ...formData,
        template: selectedTemplate,
      };

      if (id) {
        await API.put(`/resume/update/${id}`, payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Resume Updated");
      } else {
        await API.post("/resume/create", payload, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success("Resume Saved");
      }

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      toast.error("Failed to save resume");
    }
  };

  // =========================
  // PDF DOWNLOAD
  // =========================
  // =========================
  // PDF DOWNLOAD
  // =========================
  const downloadPDF = async () => {
    try {
      const element = document.getElementById("resume-preview");

      if (!element) {
        return toast.error("Resume not found");
      }

      toast.loading("Preparing PDF...", {
        id: "pdf",
      });

      // clone node
      const clonedElement = element.cloneNode(true);

      // hidden container
      const container = document.createElement("div");

      container.style.position = "fixed";
      container.style.top = "-9999px";
      container.style.left = "-9999px";
      container.style.width = "800px";
      container.style.background = "#ffffff";
      container.style.padding = "20px";

      container.appendChild(clonedElement);

      document.body.appendChild(container);

      // FORCE SAFE COLORS
      const allElements = container.querySelectorAll("*");

      allElements.forEach((el) => {
        el.style.color = "#000000";

        if (
          window.getComputedStyle(el).backgroundColor !== "rgba(0, 0, 0, 0)"
        ) {
          el.style.backgroundColor = "#ffffff";
        }

        el.style.borderColor = "#d1d5db";
      });

      const canvas = await html2canvas(clonedElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      document.body.removeChild(container);

      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = 210;

      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      pdf.save("resume.pdf");

      toast.success("PDF Downloaded", {
        id: "pdf",
      });
    } catch (err) {
      console.log(err);

      toast.error("PDF download failed", {
        id: "pdf",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 lg:p-10">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">Create Resume</h1>

          <p className="text-gray-500 mt-2">Template: {selectedTemplate}</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={saveResume}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
          >
            Save Resume
          </button>

          <button
            onClick={downloadPDF}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
          >
            Download PDF
          </button>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-2 gap-10">
        {/* FORM */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <div className="flex justify-end mb-6">
            <button
              onClick={generateSummary}
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl"
            >
              {loading ? "Generating..." : "Generate AI Summary"}
            </button>
          </div>

          {selectedTemplate === "Minimal" && (
            <MinimalForm formData={formData} setFormData={setFormData} />
          )}

          {selectedTemplate === "Modern" && (
            <ModernForm formData={formData} setFormData={setFormData} />
          )}

          {selectedTemplate === "Professional" && (
            <ProfessionalForm formData={formData} setFormData={setFormData} />
          )}
        </div>

        {/* PREVIEW */}
        <div>
          <div
            ref={resumeRef}
            id="resume-preview"
            className="bg-white p-8 rounded-3xl shadow-2xl"
          >
            {selectedTemplate === "Minimal" && (
              <MinimalTemplate formData={formData} />
            )}

            {selectedTemplate === "Modern" && (
              <ModernTemplate formData={formData} />
            )}

            {selectedTemplate === "Professional" && (
              <ProfessionalTemplate formData={formData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateResume;
