
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectsProps {
  onProjectSelect: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <h3 className="text-3xl font-bold text-slate-900">Featured Projects</h3>
            <p className="text-slate-500 mt-2">A selection of my engineering work and research. Click to learn more.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              onClick={() => onProjectSelect(project)}
              className="group cursor-pointer flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-900 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex items-center pt-4 border-t border-slate-50">
                  <span className="text-indigo-600 font-bold text-sm flex items-center">
                    View Project Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
