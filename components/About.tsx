
import React from 'react';
import { PERSONAL_INFO, SKILLS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">About Me</h3>
            <div className="flex flex-col gap-6">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg md:hidden">
                <img src="/src/assets/self2.JPG" alt="Daniel Rasas" className="object-cover w-full h-full" />
              </div>
              <div className="hidden md:block relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg mb-6">
                <img src="/src/assets/self2.JPG" alt="Daniel Rasas" className="object-cover w-full h-full" />
              </div>
            </div>

            <div className="space-y-4 text-lg text-slate-600 leading-relaxed mt-4 md:mt-0">
              <p>{PERSONAL_INFO.about}</p>
              <p>
                When I'm not coding, you can find me exploring new hiking trails,
                experimenting with digital photography, or contributing to open-source projects.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8">Expertise</h3>
            <div className="space-y-8">
              {SKILLS.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-4">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
