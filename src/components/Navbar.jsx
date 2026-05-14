import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Cpu, Layout, MessageSquare, Briefcase, Info } from 'lucide-react';
import logo from "../assets/TantheonLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Globe size={18} /> },
    { name: 'Services', href: '#services', icon: <Cpu size={18} /> },
    { name: 'Portfolio', href: '#portfolio', icon: <Briefcase size={18} /> },
    { name: 'Packages', href: '#packages', icon: <Layout size={18} /> },
    { name: 'About', href: '#about', icon: <Info size={18} /> },
    { name: 'Contact', href: '#contact', icon: <MessageSquare size={18} /> },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 glass ${
        scrolled ? 'py-3' : 'py-6'
      }`}
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        willChange: 'backdrop-filter, background',
      }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 z-10"
        >
          <span className="font-bold tracking-tighter text-white">
            <img src={logo} alt="Tatheon Digital" className="h-10 md:h-12 w-auto object-contain" />
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-gray-300 hover:text-electric-blue transition-colors flex items-center gap-2 text-sm font-medium uppercase tracking-widest"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold text-sm shadow-[0_0_20px_rgba(138,43,226,0.4)]"
          >
            GET STARTED
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-20">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white transition-colors hover:text-electric-blue"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
            style={{
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              willChange: 'backdrop-filter',
            }}
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-electric-blue flex items-center gap-4 text-lg font-medium transition-colors"
                >
                  <span className="text-electric-blue">{link.icon}</span>
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-electric-blue to-neon-purple text-white font-bold transition-transform hover:scale-105"
              >
                START PROJECT
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
