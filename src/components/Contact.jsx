import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, projectType, message } = formData;
    
    const subject = encodeURIComponent(`New Project Inquiry: ${projectType} - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Project Type: ${projectType}\n\n` +
      `Message:\n${message}`
    );
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=tantheon.web@gmail.com&su=${subject}&body=${body}`;
    
    window.open(gmailUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-black-accent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Start the build that <br />
              changes how people <span className="text-gradient">see your brand</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Send the project details, call directly, or open WhatsApp. Tantheon Digital is ready to turn the first idea into a premium digital launch.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-electric-blue group-hover:bg-electric-blue/10 transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-white font-medium">+263 78 566 9109</p>
                  <p className="text-white font-medium">+263 78 965 7604</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-neon-purple group-hover:bg-neon-purple/10 transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-white font-medium">tantheon.web@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-electric-blue group-hover:bg-electric-blue/10 transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-medium uppercase tracking-widest text-xs">Zimbabwe and global clients</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Follow Us</p>
              <div className="flex gap-4">
                {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 rounded-xl glass border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <motion.a
              href="https://wa.me/263785669109"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 mt-12 px-8 py-4 rounded-2xl bg-[#25D366] text-white font-bold shadow-[0_0_20px_rgba(37,211,102,0.3)]"
            >
              <MessageCircle size={24} /> Chat on WhatsApp
            </motion.a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[2.5rem] glass-card border border-white/10"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-electric-blue outline-none transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-electric-blue outline-none transition-all text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Project Type</label>
                <input 
                  type="text" 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  placeholder="Website, e-commerce, web app, or 3D experience"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-electric-blue outline-none transition-all text-white"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us what you want to build..."
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-electric-blue outline-none transition-all text-white resize-none"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-electric-blue to-neon-purple text-white font-bold flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,191,255,0.2)]"
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
