import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  MessageSquare, 
  User, 
  Building, 
  Send,
  Terminal,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Phone
} from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [terminalText, setTerminalText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const terminalCommands = [
    '> Initializing secure connection...',
    '> Loading contact protocols...',
    '> Ready to receive transmission...',
    '> Type your message below:'
  ];

  useEffect(() => {
    if (inView) {
      let commandIndex = 0;
      let charIndex = 0;
      const timer = setInterval(() => {
        if (commandIndex < terminalCommands.length) {
          if (charIndex < terminalCommands[commandIndex].length) {
            setTerminalText(prev => prev + terminalCommands[commandIndex][charIndex]);
            charIndex++;
          } else {
            setTerminalText(prev => prev + '\n');
            commandIndex++;
            charIndex = 0;
          }
        } else {
          clearInterval(timer);
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [inView]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Message transmitted successfully! I\'ll respond within 24 hours.');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.chen@cyberdev.com',
      href: 'mailto:alex.chen@cyberdev.com',
      color: 'cyber-blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'cyber-green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
      color: 'cyber-magenta'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'text-cyber-blue hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'text-cyber-green hover:text-white'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com',
      color: 'text-cyber-magenta hover:text-white'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-midnight relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(-45deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              <span className="neon-green">Initialize</span> <span className="text-cyber-blue">Contact</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 font-tech max-w-3xl mx-auto">
              Ready to build the future? Let's connect and discuss how we can 
              transform your infrastructure together.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info & Terminal */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Terminal Display */}
              <div className="glassmorphism rounded-lg p-6 border border-cyber-green">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-5 h-5 text-cyber-green" />
                  <span className="text-cyber-green font-orbitron font-bold">Contact Terminal</span>
                </div>
                <div 
                  className="bg-black rounded p-4 font-tech text-sm text-cyber-green min-h-32"
                  style={{ fontFamily: 'Share Tech Mono, monospace' }}
                >
                  <pre className="whitespace-pre-wrap">{terminalText}</pre>
                  <span className="animate-pulse">_</span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className="flex items-center gap-4 glassmorphism rounded-lg p-4 border border-gray-800 hover:border-cyber-blue transition-all duration-300"
                    >
                      <div className={`w-12 h-12 rounded-full border-2 border-${info.color} text-${info.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-gray-400 font-tech text-sm">{info.label}</div>
                        <div className={`text-${info.color} font-orbitron font-bold`}>{info.value}</div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="glassmorphism rounded-lg p-6"
              >
                <h3 className="text-xl font-orbitron font-bold text-white mb-4">Connect Online</h3>
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
                        className={`w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center transition-all duration-300 ${social.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glassmorphism rounded-lg p-8 border border-cyber-blue"
            >
              <h3 className="text-2xl font-orbitron font-bold text-cyber-blue mb-6">
                Send Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-black/50 border border-gray-600 rounded-lg py-3 pl-12 pr-4 text-white font-tech focus:border-cyber-blue focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      required
                      className="w-full bg-black/50 border border-gray-600 rounded-lg py-3 pl-12 pr-4 text-white font-tech focus:border-cyber-blue focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Company & Subject Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company (Optional)"
                      className="w-full bg-black/50 border border-gray-600 rounded-lg py-3 pl-12 pr-4 text-white font-tech focus:border-cyber-blue focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      required
                      className="w-full bg-black/50 border border-gray-600 rounded-lg py-3 pl-12 pr-4 text-white font-tech focus:border-cyber-blue focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message... Tell me about your project requirements, timeline, and budget."
                    required
                    rows={6}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg py-3 px-4 text-white font-tech focus:border-cyber-blue focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 bg-cyber-blue text-black font-orbitron font-bold rounded-lg transition-all duration-300 hover:bg-cyber-blue/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Transmitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;