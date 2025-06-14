import React, { useEffect, useState, useRef } from 'react';
import { ExternalLinkIcon, GithubIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
interface ProjectsProps {
  darkMode: boolean;
}
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}
const Projects: React.FC<ProjectsProps> = ({
  darkMode
}) => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const projects: Project[] = [{
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with product catalog, shopping cart, and payment processing.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  }, {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for managing tasks, projects, and team collaboration.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    technologies: ['Angular', 'Firebase', 'TypeScript'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  }, {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with forecasts, maps, and customizable alerts.',
    image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  }, {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'Analytics platform for tracking engagement across multiple social media channels.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    technologies: ['Vue.js', 'Express', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  }, {
    id: 5,
    title: 'Fitness Tracker',
    description: 'Mobile application for tracking workouts, nutrition, and fitness progress.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    technologies: ['React Native', 'Redux', 'Firebase'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  }, {
    id: 6,
    title: 'Recipe Finder',
    description: 'Search engine for recipes with filtering by ingredients, cuisine, and dietary restrictions.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    technologies: ['JavaScript', 'API Integration', 'Bootstrap'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false
  }
];
  const featuredProjects = projects.filter(project => project.featured);
  const allProjects = projects;
  return <section id="projects" className="py-20 md:py-32">
      <div ref={sectionRef} className="container mx-auto px-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My{' '}
          <span className={darkMode ? 'text-[#0071e3]' : 'text-[#0071e3]'}>
            Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll ? allProjects : featuredProjects).map((project, index) => <div key={project.id} className={`group rounded-xl overflow-hidden transition-all duration-500 transform hover:scale-[1.02] ${darkMode ? 'bg-[#1a1a1d] shadow-xl shadow-black/30' : 'bg-white shadow-xl shadow-black/5'}`} style={{
          opacity: 0,
          transform: 'translateY(20px)',
          animation: 'fadeIn 0.6s forwards',
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 ${darkMode ? 'text-[#b1b1b3]' : 'text-[#6e6e73]'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => <span key={tech} className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-[#2c2c30] text-[#b1b1b3]' : 'bg-[#f5f5f7] text-[#6e6e73]'}`}>
                      {tech}
                    </span>)}
                </div>
                <div className="flex justify-between">
                  <a href={project.demoUrl} className={`flex items-center text-sm font-medium transition-colors duration-300 ${darkMode ? 'text-[#0071e3] hover:text-[#0077ED]' : 'text-[#0071e3] hover:text-[#0077ED]'}`}>
                    Live Demo <ExternalLinkIcon className="ml-1 h-4 w-4" />
                  </a>
                  <a href={project.githubUrl} className={`flex items-center text-sm font-medium transition-colors duration-300 ${darkMode ? 'text-[#0071e3] hover:text-[#0077ED]' : 'text-[#0071e3] hover:text-[#0077ED]'}`}>
                    View Code <GithubIcon className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <button onClick={() => setShowAll(!showAll)} className={`group flex items-center mx-auto text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${darkMode ? 'text-[#0071e3] hover:text-[#0077ED]' : 'text-[#0071e3] hover:text-[#0077ED]'}`}>
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
    </section>;
};
export default Projects;