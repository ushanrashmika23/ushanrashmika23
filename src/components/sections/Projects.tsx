import React, { useEffect, useState, useRef } from 'react';
import { ExternalLinkIcon, GithubIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import ProjectModal, { Project } from '../ProjectModal';
interface ProjectsProps {
  darkMode: boolean;
}
const Projects: React.FC<ProjectsProps> = ({
  darkMode
}) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
      }
    }, {
      threshold: 0.1
    });
    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);
  const projects: Project[] = [{
    id: 1,
    title: 'Leafy - Environment Monitoring App',
    description: ["The Leafy hardware is a compact, battery-powered sensor that is inserted into the plant’s soil. It measures multiple parameters such as soil moisture, temperature, humidity, and light intensity. Some versions also track soil nutrient levels. The device uses Bluetooth Low Energy (BLE) or Wi-Fi to transmit data to the app, ensuring low power consumption and long battery life. Its weather-resistant design allows it to work both indoors and outdoors, making it ideal for all types of plants.",
      "The Leafy mobile app receives and processes the data from the hardware sensor in real time. It displays clear graphs and insights about the plant’s environment, sends smart notifications for watering or fertilizing, and provides plant-specific care recommendations. Users can create plant profiles, set custom care schedules, and even get tips on repotting or pruning. The app uses cloud sync so data can be accessed from multiple devices and shared with other users if needed."
    ],
    image: 'https://github.com/ushanrashmika23/project_images/blob/main/leafy/cov001withd.png?raw=true',
    images: [
      'https://github.com/ushanrashmika23/project_images/blob/main/leafy/cov001.png?raw=true',
      'https://github.com/ushanrashmika23/project_images/blob/main/leafy/cov002.png?raw=true',
    ],
    technologies: ['React Native', 'MongoDB', 'Node.js', 'Express', 'REST API'],
    demoUrl: 'https://github.com/ushanrashmika23/Leafy-Farm-Monitoring-App',
    githubUrl: 'https://github.com/ushanrashmika23/Leafy-Farm-Monitoring-App',
    featured: true
  }, {
    id: 2,
    title: 'SecureShare - File Sharing Platform',
    description: ['SecureShare is a lightweight PHP application designed for instant file upload and secure sharing. Its main goal is to allow users to upload files quickly and share them via expiring links, ensuring that shared content remains private and accessible only for a limited time. This approach makes SecureShare ideal for scenarios where sensitive files need to be distributed without permanent public exposure, such as sending confidential documents or temporary resources to colleagues or clients.',
      'The mechanism behind SecureShare involves a simple web interface where users can upload files. Once a file is uploaded, the application generates a unique link for sharing. This link is programmed to expire after a predefined period or after a certain number of accesses, automatically invalidating access and deleting the file if needed. By leveraging PHP for backend processing, SecureShare handles file storage, link creation, and expiration logic efficiently, making secure sharing effortless and reliable without complex setup or dependencies.'
    ],
    image: 'https://github.com/ushanrashmika23/project_images/blob/main/secure_share/cov001.png?raw=true',
    images: [
      'https://github.com/ushanrashmika23/project_images/blob/main/secure_share/cov003.png?raw=true',
      'https://github.com/ushanrashmika23/project_images/blob/main/secure_share/cov004.png?raw=true',
      'https://github.com/ushanrashmika23/project_images/blob/main/secure_share/cov005.png?raw=true',
      'https://github.com/ushanrashmika23/project_images/blob/main/secure_share/cov002.png?raw=true',

    ],
    technologies: ['PHP', 'JSON', 'HTML', 'CSS'],
    demoUrl: 'https://github.com/ushanrashmika23/secure-share',
    githubUrl: 'https://github.com/ushanrashmika23/secure-share',
    featured: true
  }, {
    id: 3,
    title: 'DevJournal - @ushanrashmika23',
    description: [
      'This project is all about creating a space where I can share my journey as a developer in a meaningful and organized way. The goal is to build a journal-like platform that combines project documentation, blog posts, learning notes, and tech updates in one place. It’s designed to be both personal and useful  a hub where I can track my progress, experiment with ideas, and reflect on what I learn. By writing about my projects and challenges, I aim to improve my own understanding while creating content that can help and inspire other developers. Over time, this project will grow into a complete archive of my work, thoughts, and discoveries, making it not just a journal, but a living portfolio of my development journey.'
    ],
    image: 'https://github.com/ushanrashmika23/project_images/blob/main/dev_journal/cov001.png?raw=true',
    images: [
      'https://github.com/ushanrashmika23/project_images/blob/main/dev_journal/cov002.png?raw=true',
      'https://github.com/ushanrashmika23/project_images/blob/main/dev_journal/cov003.png?raw=true',
    ],
    technologies: ['React', 'TailwindCSS', 'Node.js', "MongoDB", "Express"],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  }
  ];
  const featuredProjects = projects.filter(project => project.featured);
  const allProjects = projects;
  return <section id="projects" className={`py-20 md:py-32 ${darkMode ? 'bg-dark-secondary/50' : 'bg-light-secondary/56'}`}>
    <div ref={sectionRef} className="container mx-auto px-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
        My{' '}
        <span className={darkMode ? 'text-primary' : 'text-primary'}>
          Projects
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(showAll ? allProjects : featuredProjects).map((project, index) => <div key={project.id} className={`group rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] cursor-pointer ${darkMode ? 'bg-dark-secondary shadow-xl shadow-black/30' : 'bg-white shadow-xl shadow-black/5'}`} style={{
          opacity: 0,
          transform: 'translateY(20px)',
          animation: 'fadeIn 0.6s forwards',
          animationDelay: `${index * 0.1}s`
        }} onClick={() => setSelectedProject(project)}>
          <div className="h-48 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className={`mb-4 line-clamp-2  ${darkMode ? 'text-dark-text-secondary' : 'text-light-text-secondary'}`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map(tech => <span key={tech} className={`text-xs px-2 py-1 rounded-full transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-dark-tertiary text-dark-text-secondary shadow-md shadow-black/20' : 'bg-light-secondary text-light-text-secondary shadow-md shadow-black/5'}`}>
                {tech}
              </span>)}
            </div>
            <div className="flex justify-between">
              <a href={project.demoUrl} className={`flex items-center text-sm font-medium transition-all duration-300 hover:scale-105 ${darkMode ? 'text-primary hover:text-primary-hover' : 'text-primary hover:text-primary-hover'}`}>
                Live Demo <ExternalLinkIcon className="ml-1 h-4 w-4" />
              </a>
              <a href={project.githubUrl} className={`flex items-center text-sm font-medium transition-all duration-300 hover:scale-105 ${darkMode ? 'text-primary hover:text-primary-hover' : 'text-primary hover:text-primary-hover'}`}>
                View Code <GithubIcon className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>)}
      </div>
      <div className="mt-12 text-center">
        <button onClick={() => setShowAll(!showAll)} className={`group flex items-center mx-auto text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105 ${darkMode ? 'text-primary hover:text-primary-hover' : 'text-primary hover:text-primary-hover'}`}>
          {showAll ? <>
            Show Featured Projects{' '}
            <ChevronUpIcon className="ml-1 h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </> : <>
            See All Projects{' '}
            <ChevronDownIcon className="ml-1 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
          </>}
        </button>
      </div>
    </div>

    {/* Project Modal */}
    <ProjectModal
      project={selectedProject}
      darkMode={darkMode}
      onClose={() => setSelectedProject(null)}
    />
  </section>;
};
export default Projects;