import React from 'react';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-blue-600 uppercase tracking-widest">Experience</h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Work History & Research Roles
          </h3>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central line (desktop-only, shifts to left on mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

          <div className="space-y-12">
            {experience.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline point indicator */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-500 shadow-md -translate-x-1/2 z-10"></div>

                  {/* Empty space filler for desktop alignment */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Card Content (takes full width on mobile, half width on desktop) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="bg-white p-8 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-md hover:border-slate-300/60 hover:-translate-y-1 transition-all duration-300">
                      
                      {/* Duration Tag */}
                      <span className="inline-block px-3 py-1 text-xs font-bold text-blue-600 bg-blue-50 rounded-full mb-3 tracking-wide">
                        {exp.duration}
                      </span>

                      {/* Role & Company */}
                      <h4 className="text-xl font-bold text-slate-800 tracking-tight">
                        {exp.role}
                      </h4>
                      <p className="text-sm font-bold text-purple-600 mt-1">
                        {exp.company}
                      </p>

                      {/* Description */}
                      <p className="text-slate-600 text-sm mt-4 leading-relaxed font-medium">
                        {exp.description}
                      </p>
                      
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
