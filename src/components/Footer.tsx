import React from 'react';
interface FooterProps {
  darkMode: boolean;
}
const Footer: React.FC<FooterProps> = ({
  darkMode
}) => {
  return <footer className={`py-8 ${darkMode ? 'bg-[#0c0c0e]' : 'bg-[#ffffff]'}`}>
    <div className="container mx-auto px-6 text-center">
      <p className={`text-sm ${darkMode ? 'text-[#b1b1b3]' : 'text-[#6e6e73]'}`}>
        © {new Date().getFullYear()} ushanrashmika23. All rights reserved.
      </p>
    </div>
  </footer>;
};
export default Footer;