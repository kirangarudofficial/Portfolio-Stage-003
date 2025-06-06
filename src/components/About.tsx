import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Award, 
  Code, 
  Cloud, 
  Shield, 
  Database, 
  GitBranch,
  Server,
  Zap
} from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'AWS Cloud Services', level: 85, icon: Cloud, color: 'cyber-blue' },
    { name: 'CI/CD Pipelines', level: 90, icon: GitBranch, color: 'cyber-green' },
    { name: 'Infrastructure as Code', level: 80, icon: Code, color: 'cyber-magenta' },
    { name: 'Container Orchestration', level: 75, icon: Server, color: 'cyber-blue' },
    { name: 'Security & Compliance', level: 70, icon: Shield, color: 'cyber-green' },
    { name: 'Database Management', level: 85, icon: Database, color: 'cyber-magenta' },
  ];

  const certifications = [
    'AWS Cloud Practitioner',
    'AWS Solutions Architect Associate',
    'Docker Certified Associate',
    'Kubernetes Administrator (CKA)',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-midnight">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              <span className="neon-blue">About</span> <span className="text-cyber-magenta">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-magenta mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 font-tech max-w-3xl mx-auto">
              A passionate DevOps engineer specializing in cloud architecture and automation, 
              bridging the gap between development and operations in the digital frontier.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glassmorphism rounded-lg p-8">
                <h3 className="text-2xl font-orbitron font-bold text-cyber-green mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6" />
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-300 font-tech leading-relaxed">
                  <p>
                    Started as a systems administrator, I quickly fell in love with the 
                    challenge of automating repetitive tasks and optimizing infrastructure. 
                    The cloud revolution opened up endless possibilities.
                  </p>
                  <p>
                    Today, I architect scalable solutions on AWS, implement robust CI/CD 
                    pipelines, and ensure high availability while maintaining security 
                    best practices. Every deployment is a step toward digital excellence.
                  </p>
                  <p>
                    When I'm not coding or deploying, you'll find me exploring the latest 
                    DevOps tools, contributing to open-source projects, or mentoring 
                    aspiring cloud engineers.
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <motion.div variants={itemVariants} className="glassmorphism rounded-lg p-8">
                <h3 className="text-2xl font-orbitron font-bold text-cyber-magenta mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6" />
                  Certifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-black/50 rounded-lg p-4 border border-cyber-blue/30 hover:border-cyber-blue transition-colors"
                    >
                      <div className="text-cyber-blue font-tech text-sm">{cert}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={itemVariants} className="glassmorphism rounded-lg p-8">
              <h3 className="text-2xl font-orbitron font-bold text-cyber-blue mb-8 flex items-center gap-3">
                <Code className="w-6 h-6" />
                Technical Skills
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className={`w-5 h-5 text-${skill.color}`} />
                          <span className="font-tech text-white">{skill.name}</span>
                        </div>
                        <span className={`text-${skill.color} font-orbitron font-bold`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          className={`h-full bg-gradient-to-r from-${skill.color} to-white rounded-full relative`}
                          style={{
                            background: skill.color === 'cyber-blue' 
                              ? 'linear-gradient(90deg, #00f0ff, #ffffff)'
                              : skill.color === 'cyber-green'
                              ? 'linear-gradient(90deg, #39ff14, #ffffff)'
                              : 'linear-gradient(90deg, #ff00ff, #ffffff)'
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;