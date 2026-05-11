import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative bg-black-accent selection:bg-electric-blue/30 selection:text-electric-blue">
      {/* Custom Cursor Backdrop */}
      <motion.div 
        className="fixed top-0 left-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none z-0"
        animate={{
          x: mousePos.x - 250,
          y: mousePos.y - 250,
        }}
        transition={{ type: 'spring', damping: 50, stiffness: 400, mass: 0.8 }}
      />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric-blue to-neon-purple z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      
      {/* Loader Overlay (Optional but premium) */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, delay: 2 }}
        onAnimationComplete={() => document.body.style.overflow = 'auto'}
        className="fixed inset-0 z-[999] bg-black-accent flex items-center justify-center pointer-events-none"
      >
        <div className="flex flex-col items-center gap-6">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 border-4 border-electric-blue border-t-transparent rounded-full shadow-[0_0_20px_rgba(0,191,255,0.5)]"
          />
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white font-bold tracking-[0.5em] uppercase text-xs"
          >
            Tantheon Digital
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
