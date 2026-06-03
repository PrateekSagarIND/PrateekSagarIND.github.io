import React from 'react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const pillars = [
    {
      title: "Generative & Agentic AI",
      description: "Building autonomous systems using LangChain, LangGraph, and Model Context Protocol (MCP) orchestrators.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "text-blue-600 bg-blue-50 border-blue-100"
    },
    {
      title: "RAG & Recommender Systems",
      description: "Developing semantic search pipelines, vector-based retrieval, and collaborative/hybrid recommendation models.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: "text-purple-600 bg-purple-50 border-purple-100"
    },
    {
      title: "Bioinformatics & PLMs",
      description: "Applying Transformer-based Protein Language Models (e.g. ProtBERT) to predict microbial genotoxicity and map embeddings.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547" />
          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
        </svg>
      ),
      color: "text-emerald-600 bg-emerald-50 border-emerald-100"
    },
    {
      title: "Data Analytics & Power BI",
      description: "Building interactive dashboards, KPI tracking systems, business intelligence reports, and data-driven analytics solutions using Power BI, DAX, data modeling, and visualization techniques.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "text-amber-600 bg-amber-50 border-amber-100"
    }
  ];

  return (
    <section id="about" className="py-16 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-blue-600 uppercase tracking-widest">About Me</h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Specialization & Academic Pedigree
          </h3>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Info (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="text-2xl font-bold text-slate-800 tracking-tight">
              Bridging Research-driven ML with Production AI Systems
            </h4>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              {personalInfo.about}
            </p>
            <div className="p-5 rounded-2xl bg-white border border-slate-200/60 shadow-sm flex items-start space-x-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                {/* Academic/University Cap Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-slate-800">M.Tech in Computer Science & Engineering</h5>
                <p className="text-sm font-semibold text-slate-500">IIIT Delhi • Specializing in AI/ML</p>
                <p className="text-xs text-slate-400 mt-1 font-medium">Focusing on Deep Learning architectures, Bio-Informatics pipelines, and Agentic workflows.</p>
              </div>
            </div>
          </div>

          {/* Right Cards (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="group bg-white p-6 rounded-2xl border border-slate-200/50 shadow-sm hover:shadow-md hover:border-slate-350/70 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl border ${pillar.color} transition-colors duration-250`}>
                    {pillar.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-250">
                      {pillar.title}
                    </h5>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed font-medium">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
