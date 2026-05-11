import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const About = () => {
  const points = [
    {
      title: "Conversion-focused strategy",
      desc: "Premium details, practical structure, and a smooth path from idea to launch."
    },
    {
      title: "Fast responsive engineering",
      desc: "Premium details, practical structure, and a smooth path from idea to launch."
    },
    {
      title: "Immersive 3D interactions",
      desc: "Premium details, practical structure, and a smooth path from idea to launch."
    },
    {
      title: "Long-term support mindset",
      desc: "Premium details, practical structure, and a smooth path from idea to launch."
    }
  ];

  return (
    <section id="about" className="py-24 bg-dark-navy relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Built for <span className="text-gradient">Local Ambition</span> <br />
              with Global Presence
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
              Tantheon Digital gives founders, growing teams, and established companies 
              a digital identity that feels premium, trustworthy, and ready for international attention.
            </p>
            
            <div className="flex gap-6">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-electric-blue to-neon-purple text-white font-bold flex items-center gap-2"
              >
                Build With Us <ArrowUpRight size={20} />
              </button>
              <button 
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-xl glass border border-white/10 text-white font-bold"
              >
                Explore Services
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl glass border border-white/5 hover:border-electric-blue/20 transition-all group"
              >
                <div className="text-electric-blue font-bold text-lg mb-4 opacity-40 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
