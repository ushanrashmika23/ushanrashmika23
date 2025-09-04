import React, { useEffect, useState, useRef } from 'react';
import { BriefcaseIcon, CalendarIcon, ExternalLinkIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
interface ExperienceProps {
  darkMode: boolean;
}
interface TimelineItem {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  link: string;
  technologies: string[];
  type: 'experience' | 'education';
  gpa?: string;
}
const Experience: React.FC<ExperienceProps> = ({
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
  const timelineItems: TimelineItem[] = [{
    id: 1,
    title: 'Founder of RUSOFT ltd',
    company: 'Rusoft pvt ltd',
    duration: '2025 - Present',
    description: 'Leading software and web application development services for diverse client needs.',
    link: '#',
    technologies: ['Full-Stack Apps', 'Software Solutions', 'Web Apps'],
    type: 'experience'
  }, {
    id: 2,
    title: 'BS.c (hons) Software Engineering',
    company: 'General Sir John Kotelawala Defense University',
    duration: '2025 - 2029',
    description: 'Specializing in software development, system design, and modern programming technologies.',
    link: '#',
    technologies: ['Computer Science', 'Software Engineering', 'System Architectures'],
    type: 'education',
    // gpa: '3.8/4.0'
  }, {
    id: 3,
    title: 'Full Stack Developer',
    company: 'Fiverr',
    duration: '2023 - Present',
    description: 'Delivering end-to-end web development services including frontend, backend, and database solutions for global clients.',
    link: '#',
    technologies: ['Angular', 'Python', 'PostgreSQL', 'Jenkins'],
    type: 'experience'
  }, {
    id: 4,
    title: 'CCNA: Introduction to Networks',
    company: 'Cisco Networking Academy',
    duration: '2025 May',
    description: 'Completed Cisco networking fundamentals covering network protocols, routing, switching, and network troubleshooting.',
    link: '#',
    technologies: [""],
    type: 'education'
  }, {
    id: 5,
    title: 'Full Stack Developer',
    company: 'Upwork',
    duration: '2023 - Present',
    description: 'Providing comprehensive web development services from UI/UX design to server-side implementation and deployment.',
    link: '#',
    technologies: ['JavaScript', 'React', 'Express', 'MongoDB'],
    type: 'experience'
  }];

  // Sort timeline items by starting year (most recent first)
  const sortedTimelineItems = [...timelineItems].sort((a, b) => {
    const getStartYear = (duration: string): number => {
      // Extract first year from duration string (e.g., "2024 - Present" -> 2024, "2023" -> 2023)
      const match = duration.match(/^\d{4}/);
      return match ? parseInt(match[0]) : 0;
    };

    const yearA = getStartYear(a.duration);
    const yearB = getStartYear(b.duration);

    return yearB - yearA; // Descending order (most recent first)
  });

  const latestItems = sortedTimelineItems.slice(0, 3);
  const displayedItems = showAll ? sortedTimelineItems : latestItems;
  return <section id="experience" className="py-20 md:py-32">
    <div ref={sectionRef} className="container mx-auto px-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
        Experience &{' '}
        <span className={darkMode ? 'text-[#0071e3]' : 'text-[#0071e3]'}>
          Education
        </span>
      </h2>
      <div className="max-w-4xl mx-auto">
        {displayedItems.map((item, index) => (
          <div key={item.id}>
            {item.type === 'education' ? (
              // Education - Same width and margins as experience with seamless timeline
              <div className={`relative flex items-start gap-8 mb-12 ${index !== displayedItems.length - 1 ? 'pb-12' : ''}`} style={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeIn 0.6s forwards',
                animationDelay: `${index * 0.2}s`
              }}>
                {/* Timeline line - seamless continuation with extended length */}
                {index !== displayedItems.length - 1 && <div className={`absolute left-[26px] w-[2px] ${darkMode ? 'bg-[#2c2c30]' : 'bg-[#e5e5e7]'}`} style={{ top: '-48px', height: 'calc(100% + 96px)' }} />}
                {/* Empty spacer to align with experience cards */}
                <div className="relative flex-shrink-0 w-14 h-14"></div>
                {/* Education card - same width as experience */}
                <div className={`flex-grow p-4 rounded-lg transition-all duration-300 hover:scale-[1.01] border-l-4 ${darkMode ? 'bg-[#1a1a1d]/70 shadow-md shadow-black/20 border-l-[#0071e3]' : 'bg-[#f5f5f7] shadow-md shadow-black/5 border-l-[#0071e3]'
                  }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-semibold">{item.title}</h4>
                    <span className={`text-xs ${darkMode ? 'text-[#b1b1b3]' : 'text-[#6e6e73]'}`}>
                      {item.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-sm ${darkMode ? 'text-[#0071e3]' : 'text-[#0071e3]'}`}>
                      {item.company}
                    </span>
                    {item.gpa && (
                      <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-[#0071e3]/20 text-[#0071e3]' : 'bg-[#0071e3]/10 text-[#0071e3]'
                        }`}>
                        {item.gpa}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className={`text-xs mb-2 ${darkMode ? 'text-[#b1b1b3]' : 'text-[#6e6e73]'}`}>
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              // Experience - Original timeline design with extended line
              <div className={`relative flex items-start gap-8 mb-12 ${index !== displayedItems.length - 1 ? 'pb-12' : ''}`} style={{
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeIn 0.6s forwards',
                animationDelay: `${index * 0.2}s`
              }}>
                {/* Timeline line - extended to connect fully */}
                {index !== displayedItems.length - 1 && <div className={`absolute left-[26px] top-12 w-[2px] ${darkMode ? 'bg-[#2c2c30]' : 'bg-[#e5e5e7]'}`} style={{ height: 'calc(100% + 48px)' }} />}
                {/* Timeline dot */}
                <div className={`relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center ${darkMode ? 'bg-[#1a1a1d] shadow-lg shadow-black/30' : 'bg-white shadow-lg shadow-black/5'}`}>
                  <BriefcaseIcon className={`w-6 h-6 ${darkMode ? 'text-[#0071e3]' : 'text-[#0071e3]'}`} />
                </div>
                {/* Content card */}
                <div className={`flex-grow p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] ${darkMode ? 'bg-[#1a1a1d] shadow-xl shadow-black/30' : 'bg-white shadow-xl shadow-black/5'}`}>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <div className="flex items-center">
                      <CalendarIcon className={`w-4 h-4 mr-2 ${darkMode ? 'text-[#b1b1b3]' : 'text-[#6e6e73]'}`} />
                      <span className={`text-sm uppercase tracking-wider ${darkMode ? 'text-[#b1b1b3]' : 'text-[#6e6e73]'}`}>
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  <a href={item.link} className={`inline-flex items-center text-lg font-medium mb-4 transition-colors duration-300 ${darkMode ? 'text-[#0071e3] hover:text-[#0077ED]' : 'text-[#0071e3] hover:text-[#0077ED]'}`}>
                    {item.company}
                    <ExternalLinkIcon className="ml-2 w-4 h-4" />
                  </a>
                  <p className={`mb-6 leading-relaxed ${darkMode ? 'text-[#b1b1b3]' : 'text-[#6e6e73]'}`}>
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech: string) => (
                      <span key={tech} className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${darkMode ? 'bg-[#2c2c30] text-[#b1b1b3]' : 'bg-[#f5f5f7] text-[#6e6e73]'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {sortedTimelineItems.length > 3 && (
        <div className="mt-12 text-center">
          <button onClick={() => setShowAll(!showAll)} className={`group flex items-center mx-auto text-sm font-medium tracking-wider uppercase transition-colors duration-300 ${darkMode ? 'text-[#0071e3] hover:text-[#0077ED]' : 'text-[#0071e3] hover:text-[#0077ED]'}`}>
            {showAll ? <>
              Show Recent Items{' '}
              <ChevronUpIcon className="ml-1 h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </> : <>
              See All Experience & Education{' '}
              <ChevronDownIcon className="ml-1 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
            </>}
          </button>
        </div>
      )}
    </div>
  </section>;
};
export default Experience;