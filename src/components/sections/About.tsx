import React, { useEffect, useRef } from 'react';
interface AboutProps {
  darkMode: boolean;
}
const About: React.FC<AboutProps> = ({
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
  const skills = ['Java','Spring Boot', 'JavaScript','TypeScript','Angular','React','Node.js','SCSS','Tailwind CSS','Bootstrap','Python','NextJS','Git','Flutter','Dart','Mysql','MongoDB','Firebae',];
  return <section id="about" className={`py-20 md:py-32 ${darkMode ? 'bg-[#1a1a1d80]' : 'bg-[#f5f5f78e]'}`}>
    <div ref={sectionRef} className="container mx-auto px-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out">
      <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
        About{' '}
        <span className={darkMode ? 'text-[#0071e3]' : 'text-[#0071e3]'}>
          Me
        </span>
      </h2>
      <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
        <div className="md:w-1/2">
          <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-[#b1b1b3]' : 'text-[#6e6e73]'}`}>
            I’m Ushaan Rashmika, a software engineering student with 5+ years of experience creating user-focused applications. Skilled in Java, JavaScript, Python, and Flutter, I combine technical expertise with creative problem-solving to build clean, efficient software that delivers great user experiences.
            </p>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-[#b1b1b3]' : 'text-[#6e6e73]'}`}>
            Beyond coding, I enjoy exploring new tech, contributing to open-source, and mentoring others. I’m passionate about integrating AI and IoT into software to create innovative solutions that address real-world problems.
            </p>
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map((skill, index) => <span key={skill} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${darkMode ? 'bg-[#2c2c30] text-[#f5f5f7] shadow-md shadow-black/20' : 'bg-white text-[#1d1d1f] shadow-md shadow-black/5'}`} style={{
              animationDelay: `${index * 100}ms`,
              animation: 'float 3s ease-in-out infinite',
              // animationDelay: `${index * 0.1}s`
            }}>
              {skill}
            </span>)}
          </div>
        </div>
      </div>
    </div>
  </section>;
};
export default About;