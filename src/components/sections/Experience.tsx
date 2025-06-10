import React, { useEffect, useRef } from 'react';
import { BriefcaseIcon, CalendarIcon, ExternalLinkIcon } from 'lucide-react';
interface ExperienceProps {
  darkMode: boolean;
}
interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  link: string;
  technologies: string[];
}
const Experience: React.FC<ExperienceProps> = ({
  darkMode
}) => {
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
  const experiences: Experience[] = [{
    id: 1,
    title: 'Senior Software Engineer',
    company: 'TechCorp Solutions',
    duration: '2021 - Present',
    description: 'Led development of cloud-native applications using React and Node.js. Implemented microservices architecture and improved system performance by 40%.',
    link: '#',
    technologies: ['React', 'Node.js', 'AWS', 'Docker']
  }, {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Innovations Inc',
    duration: '2019 - 2021',
    description: 'Developed and maintained multiple client applications. Implemented CI/CD pipelines and reduced deployment time by 60%.',
    link: '#',
    technologies: ['Angular', 'Python', 'PostgreSQL', 'Jenkins']
  }, {
    id: 3,
    title: 'Software Developer',
    company: 'StartUp Vision',
    duration: '2017 - 2019',
    description: 'Built responsive web applications and RESTful APIs. Collaborated with design team to implement pixel-perfect UI components.',
    link: '#',
    technologies: ['JavaScript', 'React', 'Express', 'MongoDB']
  }];
  return <section id="experience" className="py-20 md:py-32">
      <div ref={sectionRef} className="container mx-auto px-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
        Professional{' '}
        <span className={darkMode ? 'text-[#0071e3]' : 'text-[#0071e3]'}>
          Experience
        </span>
      </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => <div key={experience.id} className={`relative flex items-start gap-8 mb-12 ${index !== experiences.length - 1 ? 'pb-12' : ''}`} style={{
          opacity: 0,
          transform: 'translateY(20px)',
          animation: 'fadeIn 0.6s forwards',
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Timeline line */}
              {index !== experiences.length - 1 && <div className={`absolute left-[26px] top-12 w-[2px] h-full ${darkMode ? 'bg-[#2c2c30]' : 'bg-[#e5e5e7]'}`} />}
              {/* Timeline dot */}
              <div className={`relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${darkMode ? 'bg-[#1a1a1d] shadow-lg shadow-black/30' : 'bg-white shadow-lg shadow-black/5'}`}>
                <BriefcaseIcon className={`w-6 h-6 ${darkMode ? 'text-[#0071e3]' : 'text-[#0071e3]'}`} />
              </div>
              {/* Content card */}
              <div className={`flex-grow p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-[#1a1a1d] shadow-xl shadow-black/30' : 'bg-white shadow-xl shadow-black/5'}`}>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold">{experience.title}</h3>
                  <div className="flex items-center">
                    <CalendarIcon className={`w-4 h-4 mr-2 ${darkMode ? 'text-[#b1b1b3]' : 'text-[#6e6e73]'}`} />
                    <span className={`text-sm uppercase tracking-wider ${darkMode ? 'text-[#b1b1b3]' : 'text-[#6e6e73]'}`}>
                      {experience.duration}
                    </span>
                  </div>
                </div>
                <a href={experience.link} className={`inline-flex items-center text-lg font-medium mb-4 transition-colors duration-300 ${darkMode ? 'text-[#0071e3] hover:text-[#0077ED]' : 'text-[#0071e3] hover:text-[#0077ED]'}`}>
                  {experience.company}
                  <ExternalLinkIcon className="ml-2 w-4 h-4" />
                </a>
                <p className={`mb-6 leading-relaxed ${darkMode ? 'text-[#b1b1b3]' : 'text-[#6e6e73]'}`}>
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map(tech => <span key={tech} className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${darkMode ? 'bg-[#2c2c30] text-[#b1b1b3]' : 'bg-[#f5f5f7] text-[#6e6e73]'}`}>
                      {tech}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Experience;