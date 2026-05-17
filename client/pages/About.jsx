import React from 'react';

export default function AboutPage() {
  // Hardcoded for now, but ready to be populated via an API fetch from your backend
  const stats = [
    { value: "1.2M+", label: "Resumes Created" },
    { value: "84%", label: "Higher Interview Rate" },
    { value: "10 Min", label: "Creation Time" },
    { value: "$15k", label: "Avg Salary Increase" }
  ];

  const values = [
    {
      icon: "⚡",
      title: "Radical Simplicity",
      description: "No complex design tools. If you can fill out a form, you can build a masterpiece layout ready for hire."
    },
    {
      icon: "🎯",
      title: "Recruiter-First Logic",
      description: "We don’t just make things look pretty. We design according to rigorous, up-to-date global hiring standards."
    },
    {
      icon: "🛡️",
      title: "AI with Integrity",
      description: "Our artificial intelligence enhances your real experience; it never fabricates data or lies about your skills."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans min-h-screen flex flex-col">
      
      {/* 1. HERO SECTION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <span className="text-emerald-600 text-sm font-semibold tracking-wider uppercase bg-emerald-50 px-3 py-1 rounded-full">
            Our Purpose
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4 mb-6 leading-tight">
            We Exist to End the <br className="hidden md:inline" />
            <span className="text-emerald-600">Job Search Grind.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Built by career experts and software engineers who believe securing an interview should depend on your talent—not your formatting skills.
          </p>
        </div>
      </section>

      {/* 2. OUR MISSION (TWO COLUMN) */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Equalizing the Hiring Playing Field.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Traditional hiring software rejects millions of brilliant candidates simply because their resumes lack the right invisible keywords. We created this platform to change that.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Our AI-driven builder automatically formats your unique experience into high-scoring, HR-approved layouts. We handle the complex design logic so you can focus entirely on telling your professional story.
          </p>
        </div>

        {/* Visual Mockup Container */}
        <div className="bg-gradient-to-tr from-emerald-500 to-teal-600 rounded-2xl p-8 shadow-xl text-white aspect-[4/3] flex flex-col justify-between">
          <div className="space-y-2">
            <div className="h-4 w-24 bg-white/20 rounded"></div>
            <div className="h-8 w-48 bg-white/40 rounded font-bold text-xl flex items-center justify-center text-left">
              Resume Status
            </div>
          </div>
          <div className="bg-white text-slate-900 p-4 rounded-xl shadow-lg space-y-3 transform translate-y-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm">ATS Compatibility Score</span>
              <span className="text-emerald-600 font-bold">98% Passed</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[98%]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS COUNTER */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl md:text-5xl font-extrabold text-emerald-500">
                {stat.value}
              </p>
              <p className="text-slate-400 text-sm mt-2 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CORE VALUES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900">The Principles Guiding Us</h2>
          <p className="text-slate-600 mt-2">How we build tools to serve your professional growth.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="bg-emerald-950 text-white py-16 px-6 text-center mt-auto">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ready to rewrite your professional story?
          </h2>
          <p className="text-emerald-100 max-w-md mx-auto">
            Get access to all templates and structural optimization parameters instantly.
          </p>
          <div className="pt-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 duration-150">
              Start Building for Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}