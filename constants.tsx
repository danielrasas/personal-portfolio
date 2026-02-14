
import React from 'react';
import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'chem-e-car',
    title: 'UC Davis Chem-E-Car Lead',
    description: 'Led the design and execution of a chemically-powered vehicle. Managed reaction kinetics and safety.',
    longDescription: 'As the Project Lead for the UC Davis Chem-E-Car team, I spearheaded the technical development of a vehicle powered and stopped by chemical reactions. My role involved orchestrating the synergy between the power-source sub-team (focusing on lead-acid battery chemistry) and the stopping-mechanism sub-team (utilizing an iodine clock reaction). I was responsible for ensuring all components met stringent AIChE safety regulations, developing comprehensive Process Safety Management (PSM) documentation, and managing a team of 15+ engineering students. We focused on optimizing reaction kinetics to achieve sub-second stopping precision.',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1532187875605-7fe359843c68?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['Process Engineering', 'Reaction Kinetics', 'Safety Protocols', 'Leadership'],
    link: '#'
  },
  {
    id: 'gear-systems',
    title: '3D Printed Gear Systems',
    description: 'Designed and manufactured complex mechanical gear assemblies using additive manufacturing.',
    longDescription: 'This project focused on the precision engineering of mechanical power transmission systems using FDM and SLA 3D printing technologies. I designed multi-stage planetary gearboxes with optimized gear tooth profiles to minimize friction and maximize torque transfer. The challenge involved accounting for material shrinkage and thermal expansion of polymers. I utilized SolidWorks for iterative design and stress analysis (FEA) to ensure the gear systems could withstand operational loads. This project bridged my interest in mechanical design with the precision requirements of chemical process equipment.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1535813543269-799bee353d55?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['SolidWorks', '3D Printing', 'Mechanical Design', 'Prototyping'],
    link: '#'
  },
  {
    id: 'process-scaleup',
    title: 'Process Chemistry Scale-up',
    description: 'Research project focusing on transitioning chemical synthesis from laboratory to industrial scale.',
    longDescription: 'In this research initiative, I analyzed the scale-up challenges associated with an exothermic organic synthesis reaction. I developed mass and energy balances to predict reactor performance at the 100L pilot plant scale based on 100mL laboratory data. Key focus areas included heat removal strategies, mixing efficiency (Reynolds number optimization), and the implementation of automated safety interlocks. I produced P&IDs (Piping and Instrumentation Diagrams) and conducted a preliminary HAZOP (Hazard and Operability) study to identify potential process deviations.',
    image: 'https://images.unsplash.com/photo-1532187875605-7fe359843c68?auto=format&fit=crop&q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1603126733518-29a4593eff90?auto=format&fit=crop&q=80&w=800'
    ],
    tags: ['Analytical Chemistry', 'Synthesis', 'Scale-up', 'Lab Safety'],
    link: '#'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'e1',
    company: 'University of California, Davis',
    role: 'Chem-E-Car Project Lead',
    period: '2023 - Present',
    description: [
      'Spearheaded the technical development of a chemical-powered car for national competition.',
      'Developed comprehensive Process Safety Management (PSM) documents and Hazard Analysis.',
      'Coordinated between chemical synthesis and mechanical integration sub-teams.'
    ]
  },
  {
    id: 'e2',
    company: 'UC Davis Department of Chemical Engineering',
    role: 'Process Engineering Student',
    period: '2021 - Present',
    description: [
      'Focused on Process Safety, Heat Transfer, and Thermodynamics in complex industrial systems.',
      'Utilized MATLAB and industry-standard software for chemical process simulation.',
      'Active member of AIChE (American Institute of Chemical Engineers).'
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Engineering & Safety',
    items: ['Process Safety', 'HAZOP', 'P&ID Design', 'Reaction Engineering', 'Thermodynamics']
  },
  {
    category: 'Chemistry & Research',
    items: ['Process Chemistry', 'Organic Synthesis', 'Analytical Chemistry', 'Laboratory Protocols']
  },
  {
    category: 'Tools & Technology',
    items: ['MATLAB', 'AutoCAD', 'SolidWorks', '3D Printing', 'Slicing Software']
  }
];

export const PERSONAL_INFO = {
  name: "Daniel Rasas",
  role: "Chemical Engineering Student",
  tagline: "Specializing in process safety, engineering, and chemical synthesis at UC Davis.",
  about: "I am a Chemical Engineering student at UC Davis with a strong background in process safety and mechanical design. My experience ranges from leading high-stakes collegiate engineering projects like Chem-E-Car to designing precision 3D-printed gear systems. I am passionate about bridging the gap between chemical theory and practical industrial application.",
  email: "danielrasas@gmail.com",
  linkedin: "https://linkedin.com/in/danielrasas",
  github: "https://github.com/danielrasas",
  twitter: "https://twitter.com/danielrasas"
};
