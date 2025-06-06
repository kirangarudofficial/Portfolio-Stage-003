import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Cloud, 
  GitBranch, 
  Shield, 
  Monitor, 
  Database, 
  Server,
  Zap,
  Target
} from 'lucide-react';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable, secure cloud infrastructure on AWS, Azure, and GCP with cost optimization.',
      features: [
        'Multi-cloud strategy development',
        'Serverless architecture design',
        'Cost optimization analysis',
        'Migration planning & execution'
      ],
      color: 'cyber-blue',
      price: 'From $150/hr'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipeline Setup',
      description: 'Build robust continuous integration and deployment pipelines with automated testing and deployment.',
      features: [
        'Pipeline architecture design',
        'Automated testing integration',
        'Blue-green deployments',
        'Rollback strategies'
      ],
      color: 'cyber-green',
      price: 'From $120/hr'
    },
    {
      icon: Database,
      title: 'Infrastructure as Code',
      description: 'Implement infrastructure automation using Terraform, CloudFormation, and other IaC tools.',
      features: [
        'Terraform/CloudFormation templates',
        'Infrastructure versioning',
        'Environment standardization',
        'Automated provisioning'
      ],
      color: 'cyber-magenta',
      price: 'From $130/hr'
    },
    {
      icon: Monitor,
      title: 'Monitoring & Observability',
      description: 'Set up comprehensive monitoring, logging, and alerting systems for proactive issue resolution.',
      features: [
        'Custom dashboards & metrics',
        'Distributed tracing setup',
        'Alert management',
        'Performance optimization'
      ],
      color: 'cyber-blue',
      price: 'From $110/hr'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Implement security best practices and ensure compliance with industry standards and regulations.',
      features: [
        'Security audit & assessment',
        'Compliance implementation',
        'Access control setup',
        'Vulnerability scanning'
      ],
      color: 'cyber-green',
      price: 'From $140/hr'
    },
    {
      icon: Server,
      title: 'Container Orchestration',
      description: 'Deploy and manage containerized applications using Kubernetes, Docker Swarm, and other platforms.',
      features: [
        'Kubernetes cluster setup',
        'Container optimization',
        'Service mesh implementation',
        'Auto-scaling configuration'
      ],
      color: 'cyber-magenta',
      price: 'From $125/hr'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyber-blue':
        return {
          text: 'text-cyber-blue',
          border: 'border-cyber-blue',
          bg: 'bg-cyber-blue',
          hover: 'hover:border-cyber-blue',
          shadow: '0 0 30px rgba(0, 240, 255, 0.3)'
        };
      case 'cyber-green':
        return {
          text: 'text-cyber-green',
          border: 'border-cyber-green',
          bg: 'bg-cyber-green',
          hover: 'hover:border-cyber-green',
          shadow: '0 0 30px rgba(57, 255, 20, 0.3)'
        };
      case 'cyber-magenta':
        return {
          text: 'text-cyber-magenta',
          border: 'border-cyber-magenta',
          bg: 'bg-cyber-magenta',
          hover: 'hover:border-cyber-magenta',
          shadow: '0 0 30px rgba(255, 0, 255, 0.3)'
        };
      default:
        return {
          text: 'text-cyber-blue',
          border: 'border-cyber-blue',
          bg: 'bg-cyber-blue',
          hover: 'hover:border-cyber-blue',
          shadow: '0 0 30px rgba(0, 240, 255, 0.3)'
        };
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-midnight to-black relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00f0ff 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #ff00ff 2px, transparent 2px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">
              <span className="neon-magenta">DevOps</span> <span className="text-cyber-blue">Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-magenta to-cyber-blue mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 font-tech max-w-3xl mx-auto">
              Transform your infrastructure with cutting-edge DevOps solutions designed 
              for the cyberpunk era of cloud computing.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colors = getColorClasses(service.color);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: colors.shadow
                  }}
                  className={`glassmorphism rounded-lg p-8 border border-gray-800 ${colors.hover} 
                             transition-all duration-300 relative overflow-hidden group`}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    <div className={`absolute inset-0 ${colors.bg}`}></div>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-full border-2 ${colors.border} ${colors.text} 
                               flex items-center justify-center mb-6 relative z-10`}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className={`text-xl font-orbitron font-bold mb-4 ${colors.text}`}>
                      {service.title}
                    </h3>

                    <p className="text-gray-300 font-tech mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.5, delay: index * 0.1 + idx * 0.1 }}
                          className="flex items-center gap-3 text-sm text-gray-400 font-tech"
                        >
                          <div className={`w-2 h-2 rounded-full ${colors.bg}`}></div>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className={`text-lg font-orbitron font-bold ${colors.text} mb-6`}>
                      {service.price}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                      className={`w-full py-3 px-6 border-2 ${colors.border} ${colors.text} 
                                 hover:bg-gradient-to-r hover:from-transparent hover:to-transparent
                                 hover:${colors.bg} hover:text-black transition-all duration-300 
                                 font-orbitron font-bold rounded`}
                    >
                      Get Started
                    </motion.button>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Zap className={`w-4 h-4 ${colors.text}`} />
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-20">
                    <Target className={`w-4 h-4 ${colors.text}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="glassmorphism rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-orbitron font-bold text-cyber-green mb-4">
                Ready to Transform Your Infrastructure?
              </h3>
              <p className="text-gray-300 font-tech mb-6">
                Let's discuss your project and build something extraordinary together.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(57, 255, 20, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-cyber-green text-black hover:bg-cyber-green/80 
                         transition-all duration-300 font-orbitron font-bold rounded"
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;