import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail,
  Heart,
  Code,
  Zap
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:alex.chen@cyberdev.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-midnight to-black border-t border-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, #00f0ff 1px, transparent 1px),
                           radial-gradient(circle at 80% 80%, #ff00ff 1px, transparent 1px),
                           radial-gradient(circle at 40% 60%, #39ff14 1px, transparent 1px)`,
          backgroundSize: '50px 50px, 70px 70px, 60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-6 cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              <Terminal className="w-8 h-8 text-cyber-blue" />
              <span className="text-2xl font-orbitron font-bold neon-blue">CyberDev</span>
            </motion.div>
            
            <p className="text-gray-300 font-tech leading-relaxed mb-6 max-w-md">
              Architecting the future of cloud infrastructure with cutting-edge DevOps solutions. 
              Transforming ideas into scalable, secure, and automated systems.
            </p>

            {/* Tech Stack Icons */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-cyber-green">
                <Code className="w-4 h-4" />
                <span className="font-tech text-sm">AWS Certified</span>
              </div>
              <div className="flex items-center gap-2 text-cyber-magenta">
                <Zap className="w-4 h-4" />
                <span className="font-tech text-sm">DevOps Expert</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full border border-gray-600 hover:border-cyber-blue 
                             flex items-center justify-center text-gray-400 hover:text-cyber-blue 
                             transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-orbitron font-bold text-cyber-green mb-6">Quick Links</h3>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05, x: 5 }}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-cyber-blue transition-colors duration-300 font-tech"
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-orbitron font-bold text-cyber-magenta mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <motion.a
                href="mailto:alex.chen@cyberdev.com"
                whileHover={{ scale: 1.02 }}
                className="block text-gray-400 hover:text-cyber-blue transition-colors duration-300 font-tech"
              >
                alex.chen@cyberdev.com
              </motion.a>
              <motion.a
                href="tel:+15551234567"
                whileHover={{ scale: 1.02 }}
                className="block text-gray-400 hover:text-cyber-green transition-colors duration-300 font-tech"
              >
                +1 (555) 123-4567
              </motion.a>
              <div className="text-gray-400 font-tech">
                San Francisco, CA
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400 font-tech text-sm">
              <span>© {currentYear} CyberDev Portfolio. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-cyber-magenta fill-current" />
              </motion.div>
              <span>and lots of ☕</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#home')}
              className="px-4 py-2 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue 
                       hover:text-black transition-all duration-300 font-tech text-sm rounded"
            >
              Back to Top ↑
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 opacity-20">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Terminal className="w-6 h-6 text-cyber-blue" />
        </motion.div>
      </div>
      
      <div className="absolute top-10 right-10 opacity-20">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Code className="w-6 h-6 text-cyber-green" />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;