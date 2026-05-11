import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Smartphone, 
  Box, 
  ShoppingBag, 
  Zap, 
  Search, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';

const services = [
  {
    title: "Custom Websites",
    description: "Bespoke brand systems, conversion-focused pages, and premium digital presence.",
    icon: <Monitor className="text-electric-blue" size={32} />,
    delay: 0.1
  },
  {
    title: "Responsive Web Design",
    description: "Mobile-first layouts tuned for phones, tablets, laptops, desktops, and ultra-wide displays.",
    icon: <Smartphone className="text-neon-purple" size={32} />,
    delay: 0.2
  },
  {
    title: "3D Website Development",
    description: "Immersive WebGL scenes, interactive product moments, and cinematic depth.",
    icon: <Box className="text-electric-blue" size={32} />,
    delay: 0.3
  },
  {
    title: "E-Commerce Solutions",
    description: "Online stores with catalogues, checkout flows, payments, and growth-ready operations.",
    icon: <ShoppingBag className="text-neon-purple" size={32} />,
    delay: 0.4
  },
  {
    title: "Web Applications",
    description: "Dashboards, portals, booking flows, and business tools built for repeat use.",
    icon: <Zap className="text-electric-blue" size={32} />,
    delay: 0.5
  },
  {
    title: "SEO Optimization",
    description: "Technical SEO, fast pages, structured metadata, and content foundations that rank.",
    icon: <Search className="text-neon-purple" size={32} />,
    delay: 0.6
  },
  {
    title: "Branding & UI/UX",
    description: "Sharp interfaces, brand direction, design systems, and frictionless user journeys.",
    icon: <Layers className="text-electric-blue" size={32} />,
    delay: 0.7
  },
  {
    title: "Maintenance & Support",
    description: "Updates, backups, fixes, performance checks, and reliable long-term care.",
    icon: <ShieldCheck className="text-neon-purple" size={32} />,
    delay: 0.8
  }
];

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: service.delay, duration: 0.5, type: 'spring', stiffness: 300, damping: 15 }}
      className="p-8 rounded-[2rem] liquid-glass group hover:border-electric-blue/40 transition-all duration-500"
    >
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
        {service.icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-electric-blue transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-400 leading-relaxed">
        {service.description}
      </p>
      
      <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-electric-blue opacity-0 group-hover:opacity-100 transition-all">
        Learn More <Zap size={14} />
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Digital Craft with <span className="text-gradient">Cinematic Depth</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            From responsive websites to WebGL-powered experiences, each build is shaped 
            to feel premium, load fast, and convert attention into action.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
