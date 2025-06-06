import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  MapPin, 
  Briefcase, 
  GraduationCap,
  Award,
  Rocket
} from 'lucide-react';

const Journey: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const milestones = [
    {
      year: '2024',
      title: 'Senior DevOps Engineer',
      company: 'CyberTech Solutions',
      type: 'work',
      icon: Briefcase,
      description: 'Leading cloud migration projects and implementing advanced CI/CD pipelines for enterprise clients.',
      achievements: [
        'Reduced deployment time by 75%',
        'Implemented multi-region disaster recovery',
        'Led team of 5 junior engineers'
      ],
      color: 'cyber-blue'
    },
    {
      year: '2023',
      title: 'AWS Solutions Architect Associate',
      company: 'Amazon Web Services',
      type: 'certification',
      icon: Award,
      description: 'Achieved advanced AWS certification, demonstrating expertise in designing distributed systems.',
      achievements: [
        'Scored 920/1000 on certification exam',
        'Specialized in serverless architectures',
        'Expert in cost optimization strategies'
      ],
      color: 'cyber-green'
    },
    {
      year: '2022',
      title: 'DevOps Engineer',
      company: 'StartupLab Inc.',
      type: 'work',
      icon: Rocket,
      description: 'Built scalable infrastructure from ground up, enabling rapid growth and deployment automation.',
      achievements: [
        'Implemented Infrastructure as Code',
        'Set up monitoring and alerting systems',
        'Achieved 99.9% uptime SLA'
      ],
      color: 'cyber-magenta'
    },
    {
      year: '2021',
      title: 'Cloud Practitioner Certification',
      company: 'Amazon Web Services',
      type: 'certification',
      icon: Award,
      description: 'First step into cloud computing, establishing foundation in AWS services and best practices.',
      achievements: [
        'Comprehensive understanding of AWS ecosystem',
        'Cloud security fundamentals',
        'Cost management expertise'
      ],
      color: 'cyber-blue'
    },
    {
      year: '2020',
      title: 'Systems Administrator',
      company: 'TechCorp Ltd.',
      type: 'work',
      icon: Briefcase,
      description: 'Managed on-premises infrastructure and began automation journey with scripting and monitoring.',
      achievements: [
        'Automated 80% of routine tasks',
        'Implemented backup and recovery systems',
        'Reduced server downtime by 60%'
      ],
      color: 'cyber-green'
    },
    {
      year: '2019',
      title: 'Bachelor of Computer Science',
      company: 'Cyber University',
      type: 'education',
      icon: GraduationCap,
      description: 'Graduated with honors, specializing in distributed systems and network security.',
      achievements: [
        'Summa Cum Laude (GPA: 3.9/4.0)',
        'Thesis on container orchestration',
        'President of DevOps Student Club'
      ],
      color: 'cyber-magenta'
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case 'cyber-blue': return 'text-cyber-blue';
      case 'cyber-green': return 'text-cyber-green';
      case 'cyber-magenta': return 'text-cyber-magenta';
      default: return 'text-cyber-blue';
    }
  };

  const getBorderColor = (color: string) => {
    switch (color) {
      case 'cyber-blue': return 'border-cyber-blue';
      case 'cyber-green': return 'border-cyber-green';
      case 'cyber-magenta': return 'border-cyber-magenta';
      default: return 'border-cyber-blue';
    }
  };

  return (
    <section id="journey" className="py-20 bg-gradient-to-b from-midnight to-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              <span className="neon-green">My</span> <span className="text-cyber-magenta">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-green to-cyber-magenta mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 font-tech max-w-3xl mx-auto">
              From curious student to cloud architect - every milestone shaped my expertise 
              in the ever-evolving DevOps landscape.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyber-blue via-cyber-green to-cyber-magenta"></div>

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:flex-row`}
                  >
                    {/* Timeline Node */}
                    <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 
                                   w-4 h-4 rounded-full ${getBorderColor(milestone.color)} border-2 bg-black z-10`}>
                      <div className={`w-2 h-2 rounded-full ${getIconColor(milestone.color).replace('text-', 'bg-')} 
                                     absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, rotateY: isEven ? 2 : -2 }}
                        className={`glassmorphism rounded-lg p-6 ${getBorderColor(milestone.color)} border-l-4 
                                   hover:shadow-lg transition-all duration-300`}
                        style={{
                          boxShadow: `0 0 20px rgba(${
                            milestone.color === 'cyber-blue' ? '0, 240, 255' :
                            milestone.color === 'cyber-green' ? '57, 255, 20' : '255, 0, 255'
                          }, 0.1)`
                        }}
                      >
                        {/* Year Badge */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 
                                       ${getIconColor(milestone.color)} bg-black/50 border ${getBorderColor(milestone.color)}`}>
                          <Calendar className="w-4 h-4" />
                          <span className="font-orbitron font-bold text-sm">{milestone.year}</span>
                        </div>

                        {/* Title */}
                        <h3 className={`text-xl font-orbitron font-bold mb-2 ${getIconColor(milestone.color)}`}>
                          {milestone.title}
                        </h3>

                        {/* Company */}
                        <div className="flex items-center gap-2 mb-4 text-gray-300">
                          <Icon className="w-4 h-4" />
                          <span className="font-tech">{milestone.company}</span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 font-tech mb-4 leading-relaxed">
                          {milestone.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          {milestone.achievements.map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                              transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                              className="flex items-center gap-2 text-sm text-gray-400"
                            >
                              <div className={`w-1 h-1 rounded-full ${getIconColor(milestone.color).replace('text-', 'bg-')}`}></div>
                              <span className="font-tech">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;