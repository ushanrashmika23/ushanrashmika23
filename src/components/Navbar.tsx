import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
interface NavbarProps {
  scrolled: boolean;
  darkMode: boolean;
}
const Navbar: React.FC<NavbarProps> = ({
  scrolled,
  darkMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = [{
    name: 'HOME',
    href: '#home'
  }, {
    name: 'ABOUT',
    href: '#about'
  }, {
    name: 'PROJECTS',
    href: '#projects'
  }, {
    name: 'JOURNAL',
    href: '#contact'
  }, {
    name: 'CONTACT',
    href: '#contact'
  }];
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? `${darkMode ? 'bg-dark-primary/80 backdrop-blur-lg' : 'bg-light-primary/80 backdrop-blur-lg'} shadow-sm` : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-extrabold tracking-wider">
            <a href="#home" onClick={e => handleScroll(e, '#home')}>
              USHAN
              <span className={`${darkMode ? 'text-primary' : 'text-primary'}`}>
                .
              </span>
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => handleScroll(e, link.href)} className={`text-base tracking-wider font-semibold transition-colors duration-300 ${darkMode ? 'text-dark-text-secondary hover:text-dark-text-primary' : 'text-light-text-secondary hover:text-light-text-primary'}`}>
                {link.name}
              </a>)}
          </nav>
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {mobileMenuOpen && <nav className="md:hidden pt-4 pb-2">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => handleScroll(e, link.href)} className={`text-base tracking-wider font-semibold transition-colors duration-300 ${darkMode ? 'text-dark-text-secondary hover:text-dark-text-primary' : 'text-light-text-secondary hover:text-light-text-primary'}`}>
                  {link.name}
                </a>)}
            </div>
          </nav>}
      </div>
    </header>;
};
export default Navbar;