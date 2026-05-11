import React from 'react';
import { motion } from 'framer-motion';
import Hero3D from './Hero3D';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark-navy">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-electric-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]" />
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 pointer-events-none md:pointer-events-auto">
        <Hero3D />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-electric-blue animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] text-electric-blue uppercase">The Future of Web</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Turning <span className="text-gradient">Local Ideas</span> <br />
            Into <span className="text-gradient">Global Brands.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-xl">
            Tantheon Digital builds cinematic websites, web applications, e-commerce platforms, 
            and immersive 3D experiences that help ambitious businesses look global from day one.
          </p>
          
          <div className="flex flex-wrap gap-6 mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-electric-blue to-neon-purple text-white font-bold flex items-center gap-2 shadow-[0_0_30px_rgba(0,191,255,0.3)]"
            >
              Start Your Project <ArrowRight size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 rounded-xl glass border border-white/10 text-white font-bold"
            >
              View Portfolio
            </motion.button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
            {[
              { label: "3D", sub: "interactive web experiences" },
              { label: "100%", sub: "mobile-first builds" },
              { label: "SEO", sub: "ready technical foundations" },
              { label: "24/7", sub: "support mindset" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-electric-blue mb-1">{stat.label}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{stat.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Decorative elements for mobile */}
        <div className="hidden md:block">
          {/* 3D scene occupies this space via absolute positioning */}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-electric-blue"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
