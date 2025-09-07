import React, { useEffect, useRef } from 'react';
import { ArrowDownIcon, Layers } from 'lucide-react';
import Me from './../assets/me.png';
// import { BadgeCheck } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}
const Hero: React.FC<HeroProps> = ({
  darkMode
}) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Simple animation on load
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    if (title) title.style.opacity = '1';
    if (title) title.style.transform = 'translateY(0)';
    setTimeout(() => {
      if (subtitle) subtitle.style.opacity = '1';
      if (subtitle) subtitle.style.transform = 'translateY(0)';
    }, 300);
    setTimeout(() => {
      if (cta) cta.style.opacity = '1';
      if (cta) cta.style.transform = 'translateY(0)';
    }, 600);
  }, []);
  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-2">
    <div className="container mx-auto max-w-4xl text-center">
      <div className='p-1 bg-white/30 w-fit h-fit mx-auto rounded-full mb-5 cursor-pointer'><img src={Me} alt="Hero Background" className="w-44 mx-auto " /></div>
      <h1 ref={titleRef} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out">
        Hi, I'm{' '}
        <span className={darkMode ? 'text-primary' : 'text-primary'}>
          Ushan Rashmika
        </span>
      </h1>
      <p ref={subtitleRef} className={`text-xl md:text-2xl mb-10 opacity-0 transform translate-y-10 transition-all duration-1000 ease-out delay-300 ${darkMode ? 'text-dark-text-secondary' : 'text-light-text-secondary'}`}>
        I craft structured, elegant software | web apps.
      </p>
      <div ref={ctaRef} className="opacity-0 transform translate-y-10 transition-all duration-1000 ease-out delay-600">
        <button onClick={handleScroll} className={`group px-8 py-3 rounded-full font-medium tracking-wider text-sm uppercase transition-all duration-300 ${darkMode ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-blue-500/20' : 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-blue-500/20'}`}>
          <span className="flex items-center">
            See My Work
            {/* <ArrowDownIcon className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" /> */}
            {/* <BadgeCheck className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" /> */}
            <Layers className="ml-2 h-4 w-4 "/>
          </span>
        </button>
      </div>
    </div>
    <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
      <ArrowDownIcon className={`h-6 w-6 ${darkMode ? 'text-dark-text-secondary' : 'text-light-text-secondary'}`} />
    </div>
  </section>;
};
export default Hero;