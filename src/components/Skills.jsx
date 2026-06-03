import React from 'react';
import { skillCategories } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-blue-600 uppercase tracking-widest">Skills</h2>
          <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Arsenal & Proficiency
          </h3>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((categoryObj, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-200/50 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <h4 className="text-lg font-bold text-slate-800 border-b border-slate-200/60 pb-3 mb-6 tracking-tight">
                  {categoryObj.category}
                </h4>

                {/* Skills Progress bars */}
                <div className="space-y-6">
                  {categoryObj.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex items-center justify-between text-sm font-bold text-slate-700">
                        <span className="tracking-tight">{skill.name}</span>
                        <span className="text-blue-650">{skill.level}%</span>
                      </div>
                      
                      {/* Outer Progress Bar container */}
                      <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                        {/* Progress Bar level filler */}
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag line decorative */}
              <div className="mt-8 pt-4 border-t border-slate-200/30 flex items-center space-x-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Verified Expertise</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Skill Tags call-out */}
        <div className="mt-16 text-center bg-blue-50/50 border border-blue-100/40 p-6 rounded-2xl max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-slate-600">
            💡 <span className="font-bold text-blue-750">Research & Implementation Focus:</span> Deep neural networks, Transformer tokenizers, Protein Embeddings mapping, LangGraph routing and multi-agent systems orchestration.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
