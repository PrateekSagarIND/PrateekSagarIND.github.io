import React from 'react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-base font-semibold text-blue-600 uppercase tracking-widest">Projects</h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Selected Work & Research Pipelines
          </h3>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="group bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/40 shadow-sm hover:shadow-md hover:border-slate-300/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Header */}
                <div className="flex items-center">
                  {/* Folder / Code Icon */}
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.0" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Project Title */}
                <h4 className="text-lg sm:text-xl font-bold text-slate-800 mt-5 tracking-tight group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>

                {/* Project Description */}
                <p className="text-sm text-slate-650 mt-3 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              {/* Technologies & Action Footer */}
              <div className="mt-6 space-y-4">
                {/* Technologies Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-0.5 text-[11px] font-semibold text-purple-750 bg-purple-50/80 border border-purple-100/50 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-sm hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span>View on GitHub</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

