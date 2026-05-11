import React from 'react';
import { motion } from 'framer-motion';
import logo from "../assets/TantheonLogo.png";

const Footer = () => {
  return (
    <footer className="bg-black-accent py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-bold tracking-tighter text-white">
                <img src={logo} alt="Tatheon Digital" className="h-10 md:h-12 w-auto object-contain" />
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              Turning Local Ideas Into Global Brands through premium websites, apps, e-commerce, 3D design, SEO, and support.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Portfolio', 'Packages', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-electric-blue transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4">
              {['3D Development', 'Web Applications', 'E-Commerce', 'UI/UX Design', 'SEO Optimization'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-500 hover:text-electric-blue transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Stay Connected</h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-electric-blue outline-none transition-all text-white text-sm"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 rounded-lg bg-electric-blue text-black font-bold text-xs uppercase tracking-widest">
                Join
              </button>
            </div>
            <p className="text-gray-600 text-[10px] mt-4 uppercase tracking-[0.2em]">
              Subscribe to our futuristic newsletter.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs font-medium uppercase tracking-[0.2em]">
            © 2026 Tantheon Digital. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em]">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
