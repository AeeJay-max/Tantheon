import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Nyasha M.",
    role: "Founder, retail startup",
    content: "Tantheon Digital gave our brand a presence that finally feels as ambitious as the business behind it.",
    avatar: "https://i.pravatar.cc/150?u=1",
    delay: 0.1
  },
  {
    name: "Tawanda K.",
    role: "Operations lead",
    content: "The website loads fast, looks premium on every screen, and customers started taking us seriously immediately.",
    avatar: "https://i.pravatar.cc/150?u=2",
    delay: 0.2
  },
  {
    name: "Chipo R.",
    role: "Product owner",
    content: "They transformed a rough idea into a polished web app with the kind of details usually reserved for global agencies.",
    avatar: "https://i.pravatar.cc/150?u=3",
    delay: 0.3
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-dark-navy relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Trusted by <span className="text-gradient">Ambitious Teams</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Every project is designed to make the business feel sharper, 
            clearer, and more credible online.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: t.delay }}
              className="p-8 rounded-3xl glass-card relative border border-white/5"
            >
              <div className="absolute top-8 right-8 text-electric-blue/20">
                <Quote size={40} />
              </div>
              
              <p className="text-gray-300 text-lg italic mb-8 relative z-10 leading-relaxed">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-electric-blue" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
