import React from 'react';
interface FooterProps {
  darkMode: boolean;
}
const Footer: React.FC<FooterProps> = ({
  darkMode
}) => {
  return <footer className={`py-8 ${darkMode ? 'bg-dark-primary' : 'bg-light-primary'}`}>
    <div className="container mx-auto px-6 text-center">
      <p className={`text-sm ${darkMode ? 'text-dark-text-secondary' : 'text-light-text-secondary'}`}>
        © {new Date().getFullYear()} ushanrashmika23. All rights reserved.
      </p>
    </div>
  </footer>;
};
export default Footer;