import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Apple 3D Web",
    category: "3D Experience",
    description: "High-end 3D product showcase inspired by Apple's design language, featuring immersive WebGL interactions.",
    metric: "WebGL Optimized",
    image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2940&auto=format&fit=crop",
    link: "https://apple-3-d-web.vercel.app/",
    github: "https://github.com/AeeJay-max/Apple-3D-web",
    delay: 0.1
  },
  {
    title: "Zimcrafts Hub",
    category: "Luxury E-Commerce",
    description: "A modern e-commerce platform for local crafts, featuring a seamless shopping experience and premium UI.",
    metric: "Full-Stack System",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2978&auto=format&fit=crop",
    link: "https://zimcrafts-hub.vercel.app/",
    github: "https://github.com/thabani29/Zimcrafts-Hub/tree/main/frontend",
    delay: 0.2
  },
  {
    title: "Vertex Booking",
    category: "Service Platform",
    description: "Bookings, accounts, dashboards, and automated customer notifications.",
    metric: "2.8x faster operations",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2940&auto=format&fit=crop",
    link: "#",
    github: "#",
    delay: 0.3
  },
  {
    title: "Pulse SEO Engine",
    category: "Growth System",
    description: "Technical SEO, speed tuning, structured content, and measurable search growth.",
    metric: "+68% organic traffic",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop",
    link: "#",
    github: "#",
    delay: 0.4
  }
];

const PortfolioCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: project.delay, duration: 0.6 }}
      whileHover={{ y: -10 }}
      className="group relative rounded-3xl overflow-hidden glass-card aspect-[4/5] border border-white/5"
    >
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
      
      <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="flex justify-between items-start mb-2">
          <div className="text-xs font-bold text-electric-blue uppercase tracking-[0.3em]">
            {project.category}
          </div>
          <div className="text-[10px] font-bold text-neon-purple uppercase tracking-widest bg-neon-purple/10 px-2 py-1 rounded">
            {project.metric}
          </div>
        </div>
        <h3 className="text-3xl font-bold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {project.description}
        </p>
        
        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
           <motion.a 
             href={project.link}
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ scale: 1.1 }}
             className={`w-12 h-12 rounded-full glass flex items-center justify-center text-white border border-white/20 ${project.link === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
             onClick={(e) => project.link === '#' && e.preventDefault()}
           >
             <ExternalLink size={20} />
           </motion.a>
           <motion.a 
             href={project.github}
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ scale: 1.1 }}
             className={`w-12 h-12 rounded-full glass flex items-center justify-center text-white border border-white/20 ${project.github === '#' ? 'opacity-50 cursor-not-allowed' : ''}`}
             onClick={(e) => project.github === '#' && e.preventDefault()}
           >
             <Github size={20} />
           </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-black-accent">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Interactive <span className="text-gradient">Showcase Systems</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg"
            >
              Real projects and concept mockups that show the kind of global-standard visual polish 
              Tantheon Digital brings to websites, stores, and apps.
            </motion.p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 rounded-2xl glass border border-white/10 text-white font-bold flex items-center gap-2"
          >
            View All Projects <ExternalLink size={18} />
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <PortfolioCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
