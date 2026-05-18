import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ResumeSection from "../components/ResumeSection";
import DocumentSection from "../components/DocumentSection"; // Fixed minor plural naming syntax match
import ChatbotSection from "../components/ChatbotSection";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("documents"); // Updated default layout focus state to focus documents
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = "CV Forge | Dashboard";
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen w-full overflow-hidden">
      {/* SIDEBAR */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} user={user} />

      {/* MAIN CONTENT CONTAINMENT FRAMEWORK */}
      <main className="flex-1 p-10 overflow-y-auto h-screen w-full">
        {activeTab === "resume" && <ResumeSection />}
        {activeTab === "documents" && <DocumentSection />}
        {activeTab === "chatbot" && <ChatbotSection />}
      </main>
    </div>
  );
}

export default Dashboard;
