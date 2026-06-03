import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/50 py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Block: Logo / Name */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <span className="font-extrabold text-lg tracking-tight text-slate-800">
              Prateek<span className="gradient-text font-medium">Sagar</span>
            </span>
            <p className="text-xs text-slate-500 font-medium">
              © {currentYear} Prateek Sagar. All rights reserved.
            </p>
          </div>

          {/* Central Block: Quick Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {['hero', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => handleLinkClick(e, `#${section}`)}
                className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-blue-600 transition-colors"
              >
                {section}
              </a>
            ))}
          </div>

          {/* Right Block: Social Links & Tech Attribute */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex items-center space-x-4">
              {/* GitHub */}
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-800 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-800 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              {/* Email */}
              <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-slate-800 transition-colors">
                <span className="sr-only">Email</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Built with React + Vite + Tailwind v4
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
