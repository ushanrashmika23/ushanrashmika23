import React, { useEffect, useState, useRef } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, SendIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';


interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const templateParams = {
    from_name: name,
    from_email: email,
    message: `${message} \n\nSent from: ${email} (${name})`,
  };

  emailjs.send('service_7c53znu', 'template_mewezdk', templateParams, 'IcM6f9EewQwqVEEPr')
    .then(() => {
      alert('Message sent!');
      setName('');      // clear name field
      setEmail('');     // clear email field
      setMessage('');   // clear message field
    })
    .catch(() => alert('Failed to send message. Try again.'));
};

  const inputStyle = `w-full px-4 py-3 mt-1 rounded-xl outline-none transition-all duration-300
    ${darkMode
      ? 'bg-[#2c2c30] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#0071e3]'
      : 'bg-white text-[#1d1d1f] placeholder-gray-500 focus:ring-2 focus:ring-[#0071e3] shadow-md shadow-black/5'}`;

  const labelStyle = `block text-sm font-semibold mb-1
    ${darkMode ? 'text-[#e5e5e5]' : 'text-[#1d1d1f]'}`;

  return (
    <section id="contact" className={`relative py-20 md:py-32 overflow-hidden ${darkMode ? 'bg-[#1a1a1d80]' : 'bg-[#f5f5f78e]'}`}>
      <div ref={sectionRef} className="container relative mx-auto px-6 opacity-0 translate-y-10 transition-all duration-1000 ease-out">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Contact <span className="text-[#0071e3]">Me</span>
        </h2>
        <div className="max-w-[600px] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="animate-slideInRight" style={{ animationDelay: '200ms' }}>
              <label htmlFor="name" className={labelStyle}>Full Name</label>
              <input
                type="text"
                id="name"
                className={inputStyle}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="animate-slideInRight" style={{ animationDelay: '400ms' }}>
              <label htmlFor="email" className={labelStyle}>Email Address</label>
              <input
                type="email"
                id="email"
                className={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="animate-slideInRight" style={{ animationDelay: '600ms' }}>
              <label htmlFor="message" className={labelStyle}>Message</label>
              <textarea
                id="message"
                rows={5}
                className={inputStyle}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me what you're thinking..."
                required
              />
            </div>

            <button
              type="submit"
              className={`group w-full px-8 py-4 rounded-full font-medium text-white text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] animate-scaleIn ${darkMode ? 'bg-[#0071e3] hover:bg-[#0077ED] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30' : 'bg-[#0071e3] hover:bg-[#0077ED] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30'}`}
              style={{ animationDelay: '800ms' }}
            >
              <span className="flex items-center justify-center">
                Send Message
                <SendIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </form>

          <div
            className="mt-12 flex justify-center space-x-6 animate-fadeIn"
            style={{ animationDelay: '1000ms' }}
          >
            {/* GitHub */}
            <a
              href="#"
              className={`p-4 rounded-full transition-all duration-300 hover:scale-110 group ${darkMode ? 'hover:bg-[#2c2c30]' : 'hover:bg-[#f5f5f7]'
                }`}
              aria-label="GitHub"
            >
              <GithubIcon
                className={`h-6 w-6 transition-colors duration-300 ${darkMode
                  ? 'text-[#b1b1b3] group-hover:text-black'
                  : 'text-[#6e6e73] group-hover:text-black'
                  }`}
              />
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className={`p-4 rounded-full transition-all duration-300 hover:scale-110 group ${darkMode ? 'hover:bg-[#2c2c30]' : 'hover:bg-[#f5f5f7]'
                }`}
              aria-label="LinkedIn"
            >
              <LinkedinIcon
                className={`h-6 w-6 transition-colors duration-300 ${darkMode
                  ? 'text-[#b1b1b3] group-hover:text-[#0077b5]'
                  : 'text-[#6e6e73] group-hover:text-[#0077b5]'
                  }`}
              />
            </a>

            {/* Email */}
            <a
              href="#"
              className={`p-4 rounded-full transition-all duration-300 hover:scale-110 group ${darkMode ? 'hover:bg-[#2c2c30]' : 'hover:bg-[#f5f5f7]'
                }`}
              aria-label="Email"
            >
              <MailIcon
                className={`h-6 w-6 transition-colors duration-300 ${darkMode
                  ? 'text-[#b1b1b3] group-hover:text-[#ea4335]'
                  : 'text-[#6e6e73] group-hover:text-[#ea4335]'
                  }`}
              />
            </a>

          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;
