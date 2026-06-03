import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetPosition = contactSection.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[75vh] md:min-h-[80vh] pt-24 pb-12 flex items-center bg-dot-pattern bg-white overflow-hidden"
    >
      {/* Decorative Gradient Blobs for premium Github Pages visual style */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-indigo-100/30 to-blue-100/30 rounded-full blur-3xl -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
          
          {/* Main Hero Text (7 cols on desktop) */}
          <div className="md:col-span-7 text-center md:text-left space-y-6 order-2 md:order-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100/50">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
                Available for Roles & Collaborations
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-600">
                Hi, I am
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-none">
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <p className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-sans tracking-tight">
                {personalInfo.title}
              </p>
              <p className="text-lg sm:text-xl font-medium text-purple-700 tracking-wide">
                {personalInfo.subtitle}
              </p>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0 font-medium">
              {personalInfo.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <a
                href={personalInfo.resumeUrl}
                download="Prateek_Sagar_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 gradient-bg hover:opacity-95 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                {/* Download Icon */}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                onClick={handleContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold px-8 py-4 rounded-xl border border-slate-200/80 hover:border-slate-300 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-850 text-white font-bold px-6 py-4 rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                {/* GitHub Icon */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Profile Picture Frame (5 cols on desktop) */}
          <div className="md:col-span-5 flex justify-center order-1 md:order-2">
            <div className="relative group">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>
              
              {/* Image Border Container */}
              <div className="relative bg-white p-2 rounded-full shadow-xl">
                <img 
                  src={personalInfo.profileImg} 
                  alt={personalInfo.name} 
                  className="w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 rounded-full object-cover shadow-inner group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  onError={(e) => {
                    // Fallback to stylized SVG avatar if image fails to load
                    e.target.onerror = null; 
                    e.target.src = 'https://api.dicebear.com/7.x/bottts/svg?seed=Prateek';
                  }}
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 bg-white border border-slate-100 rounded-2xl py-2.5 px-4 shadow-lg flex items-center space-x-2 animate-bounce-slow">
                <div className="p-1 rounded-lg bg-purple-50 text-purple-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Focus</p>
                  <p className="text-xs font-bold text-slate-800">Agentic AI & GenAI</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modern Wave Divider at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
