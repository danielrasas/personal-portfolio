
import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-slate-900 mb-16 text-center">Work Experience</h3>
        
        <div className="max-w-3xl mx-auto space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 md:left-1/2 md:-translate-x-px"></div>
              
              <div className={`md:flex items-center justify-between mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-5/12"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-indigo-600 md:relative md:left-auto md:top-auto md:z-10 md:ring-8 md:ring-white"></div>
                
                <div className={`md:w-5/12 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full mb-3">
                    {exp.period}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                  <p className="text-indigo-600 font-medium mb-4">{exp.company}</p>
                  <ul className={`text-slate-600 text-sm space-y-2 list-disc list-inside ${index % 2 === 0 ? 'text-left' : 'md:text-right md:list-none'}`}>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
