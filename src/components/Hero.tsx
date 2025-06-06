import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Server, 
  GitBranch, 
  Database, 
  Shield, 
  Zap,
  Download,
  Github,
  Linkedin
} from 'lucide-react';
import FloatingParticles from './FloatingParticles';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'AWS DevOps Engineer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        index = 0;
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  const techIcons = [
    { Icon: Cloud, color: 'text-cyber-blue', delay: 0.2 },
    { Icon: Server, color: 'text-cyber-magenta', delay: 0.4 },
    { Icon: GitBranch, color: 'text-cyber-green', delay: 0.6 },
    { Icon: Database, color: 'text-cyber-blue', delay: 0.8 },
    { Icon: Shield, color: 'text-cyber-magenta', delay: 1.0 },
    { Icon: Zap, color: 'text-cyber-green', delay: 1.2 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingParticles />
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight to-black opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 text-center px-6">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-8 relative"
          >
            <div className="w-full h-full rounded-full border-4 border-cyber-blue animate-glow bg-gradient-to-r from-cyber-blue to-cyber-magenta flex items-center justify-center text-4xl font-bold">
              CD
            </div>
            <div className="absolute inset-0 rounded-full border-4 border-cyber-magenta animate-pulse opacity-50"></div>
          </motion.div>

          {/* Greeting */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-3xl font-tech text-cyber-green mb-4"
          >
            Hello, I'm Alex Chen
          </motion.h1>

          {/* Glitch Title */}
          <div className="mb-8">
            <h2 
              className="glitch text-4xl md:text-6xl font-orbitron font-bold mb-4"
              data-text={text}
            >
              {text}
              <span className="terminal-cursor"></span>
            </h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-tech leading-relaxed"
          >
            Architecting scalable cloud infrastructure and automating deployment pipelines 
            to accelerate digital transformation in the cyberpunk era.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300 font-orbitron font-bold"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 0, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-transparent border-2 border-cyber-magenta text-cyber-magenta hover:bg-cyber-magenta hover:text-black transition-all duration-300 font-orbitron font-bold flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-6 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-blue hover:text-white transition-colors"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -360 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyber-blue hover:text-white transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none">
          {techIcons.map(({ Icon, color, delay }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                scale: [0, 1, 1, 0],
                y: [0, -20, -20, 0],
                rotate: 360
              }}
              transition={{
                duration: 4,
                delay: delay,
                repeat: Infinity,
                repeatDelay: 2
              }}
              className={`absolute ${color}`}
              style={{
                left: `${10 + (index * 15)}%`,
                top: `${20 + (index % 2) * 20}%`,
              }}
            >
              <Icon className="w-8 h-8 animate-float" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;