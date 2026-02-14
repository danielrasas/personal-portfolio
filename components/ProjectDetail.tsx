
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <button 
          onClick={onBack}
          className="group mb-8 flex items-center text-slate-500 hover:text-indigo-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </button>

        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            {project.title}
          </h1>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl mb-16 aspect-video">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview & Technical Scope</h2>
            <div className="prose prose-slate lg:prose-lg max-w-none text-slate-600 leading-relaxed space-y-4">
              {project.longDescription.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Role</h3>
              <p className="text-slate-900 font-medium">Lead Engineer / Designer</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Key Outcomes</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Applied rigorous safety standards
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Optimized process efficiency
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  Successful scale-up prototypes
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="text-2xl font-bold text-slate-900 mb-10">Project Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((img, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow bg-slate-100 aspect-square">
                <img 
                  src={img} 
                  alt={`${project.title} gallery ${index}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-slate-100 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Interested in this project?</h3>
          <a 
            href={`mailto:danielrasas@gmail.com?subject=Inquiry about ${project.title}`}
            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition-all"
          >
            Discuss with Daniel
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
