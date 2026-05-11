import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Rocket, Shield } from 'lucide-react';

const pricingData = [
  {
    name: "Starter Package",
    price: "80 – 150",
    description: "Best for small businesses & startups",
    icon: <Zap className="text-electric-blue" size={24} />,
    features: [
      "1–5 Pages",
      "Mobile Responsive",
      "Contact Form",
      "WhatsApp Integration",
      "Basic SEO",
      "Free 1-month support",
      "Free hosting for a year then US$30/year"
    ],
    popular: false,
    color: "from-blue-500/20 to-cyan-500/20",
    delay: 0.1
  },
  {
    name: "Business Package",
    price: "200 – 350",
    description: "Best for growing businesses",
    icon: <Rocket className="text-neon-purple" size={24} />,
    features: [
      "6–10 Pages",
      "Modern Custom Design",
      "Admin Dashboard",
      "Google Maps Integration",
      "Social Media Integration",
      "SEO Optimization",
      "Speed Optimization",
      "Free hosting for a year then US$30/year"
    ],
    popular: true,
    color: "from-purple-500/20 to-pink-500/20",
    delay: 0.2
  },
  {
    name: "Premium Package",
    price: "450 – 800+",
    description: "Best for companies & online services",
    icon: <Shield className="text-electric-blue" size={24} />,
    features: [
      "Custom Design",
      "Booking Systems",
      "User Accounts",
      "E-commerce/Store",
      "Payment Integration",
      "Advanced SEO",
      "Analytics Dashboard",
      "Free hosting for a year then US$30/year"
    ],
    popular: false,
    color: "from-blue-500/20 to-purple-500/20",
    delay: 0.3
  }
];

const PricingCard = ({ pkg }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: pkg.delay, duration: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
      className={`relative p-10 rounded-[2.5rem] liquid-glass transition-all duration-500 flex flex-col ${
        pkg.popular ? 'border-neon-purple/50 shadow-[0_0_50px_rgba(138,43,226,0.15)]' : ''
      }`}
    >
      {pkg.popular && (
        <div className="absolute -top-0,5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-electric-blue to-neon-purple text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2 rounded-full shadow-lg">
          Most Popular
        </div>
      )}
      
      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center mb-6`}>
        {pkg.icon}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
      <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>
      
      <div className="flex items-baseline gap-2 mb-8">
        <span className="text-gray-400 text-xl font-medium">US$</span>
        <span className="text-4xl font-bold text-white tracking-tight">{pkg.price}</span>
      </div>
      
      <div className="space-y-4 mb-10 flex-grow">
        {pkg.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-electric-blue/10 flex items-center justify-center">
              <Check className="text-electric-blue" size={12} />
            </div>
            {feature}
          </div>
        ))}
      </div>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
          pkg.popular 
            ? 'bg-gradient-to-r from-electric-blue to-neon-purple text-white shadow-lg' 
            : 'glass border border-white/10 text-white hover:bg-white/5'
        }`}
      >
        Choose Package
      </motion.button>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section id="packages" className="py-24 bg-dark-navy relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Premium Websites for Every <span className="text-gradient">Growth Stage</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Transparent ranges, strong foundations, and free hosting for the first year on every package.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((pkg, i) => (
            <PricingCard key={i} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
