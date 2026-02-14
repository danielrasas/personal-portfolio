
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl opacity-60 -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-violet-50 rounded-full blur-3xl opacity-60 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-2/3">
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-4 animate-fade-in">
              Chemical Engineering Student @ UC Davis
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              I'm <span className="text-indigo-600">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:scale-[1.02] transition-all"
              >
                View Engineering Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hidden md:block md:w-1/3">
            <div className="relative">
                <div className="absolute inset-0 bg-indigo-600 rounded-2xl rotate-3 -z-10 opacity-10"></div>
                <img 
                    src="https://picsum.photos/seed/engineer/600/600" 
                    alt={PERSONAL_INFO.name}
                    className="rounded-2xl shadow-2xl object-cover grayscale-0 transition-all duration-500 hover:scale-[1.02]"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
