import React from 'react';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-blue-600 uppercase tracking-widest">Certifications</h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Credentials & Achievements
          </h3>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <div 
              key={idx}
              className="bg-white p-6 rounded-3xl border border-slate-200/50 shadow-sm hover:shadow-md hover:border-slate-305/75 hover:-translate-y-1 transition-all duration-300 flex items-start space-x-5"
            >
              {/* Credential/Shield Icon */}
              <div className="p-3.5 bg-blue-50 text-blue-600 rounded-2xl flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>

              {/* Credential Details */}
              <div className="space-y-1.5 flex-grow">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {cert.issuer}
                  </span>
                  
                  {/* Verified check badge */}
                  <span className="flex items-center space-x-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100/50">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Verified</span>
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-800 leading-snug tracking-tight">
                  {cert.title}
                </h4>

                <div className="flex items-center space-x-1 text-slate-400 text-xs font-semibold">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Issued {cert.date}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
