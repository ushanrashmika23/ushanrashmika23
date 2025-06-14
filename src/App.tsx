import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import BackgroundBlobs from './components/BackgroundBlobs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './components/admin/add';
import AddProject from './components/admin/addProject';
import AddExperience from './components/admin/addExperience';
import AddTech from './components/admin/addTech';

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return <div className={`min-h-screen w-full transition-colors duration-500 ${darkMode ? 'bg-[#0c0c0e] text-[#f5f5f7]' : 'bg-[#ffffff] text-[#1d1d1f]'}`}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
          <BackgroundBlobs darkMode={darkMode} />
            <Navbar scrolled={scrolled} darkMode={darkMode} />
            <main className="relative z-10 animate-fadeIn">
              <Hero darkMode={darkMode} />
              <About darkMode={darkMode} />
              <Experience darkMode={darkMode} />
              <Projects darkMode={darkMode} />
              <Contact darkMode={darkMode} />
            </main>
            <Footer darkMode={darkMode} />
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </>} />
        <Route path='/new' element={ <Add/> } />
        <Route path='/project' element={ <AddProject/> } />
        <Route path='/experience' element={ <AddExperience/> } />
        <Route path='/tech' element={ <AddTech/> } />
      </Routes>
    </BrowserRouter>
  </div>;
}