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
    title: 'Task Management App',
    description: ['A productivity application for managing tasks, projects, and team collaboration.',],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    technologies: ['Angular', 'Firebase', 'TypeScript'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  }, {
    id: 3,
    title: 'Weather Dashboard',
    description: [
      'Real-time weather information with forecasts, maps, and customizable alerts.'
    ],
    image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  }, {
    id: 4,
    title: 'Social Media Dashboard',
    description: ['Analytics platform for tracking engagement across multiple social media channels.',],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  }, {
    id: 5,
    title: 'Fitness Tracker',
    description: ['Mobile application for tracking workouts, nutrition, and fitness progress.'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    technologies: ['React Native', 'Redux', 'Firebase'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  }, {
    id: 6,
    title: 'Recipe Finder',
    description: ['Search engine for recipes with filtering by ingredients, cuisine, and dietary restrictions.',],
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    technologies: ['JavaScript', 'API Integration', 'Bootstrap'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
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