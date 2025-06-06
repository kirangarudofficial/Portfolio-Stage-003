import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  Github, 
  Cloud, 
  Server, 
  Database, 
  Shield,
  GitBranch,
  Monitor
} from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Multi-Cloud Infrastructure Platform',
      description: 'Enterprise-grade infrastructure automation platform supporting AWS, Azure, and GCP with unified management dashboard.',
      image: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'cloud',
      technologies: ['Terraform', 'AWS', 'Azure', 'Kubernetes', 'Helm'],
      features: [
        'Multi-cloud resource management',
        'Cost optimization algorithms',
        'Automated disaster recovery',
        'Real-time monitoring dashboard'
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'Production',
      icon: Cloud
    },
    {
      id: 2,
      title: 'Serverless CI/CD Pipeline',
      description: 'Fully serverless continuous integration and deployment pipeline with automatic scaling and cost optimization.',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'cicd',
      technologies: ['AWS Lambda', 'CodePipeline', 'Docker', 'GitHub Actions'],
      features: [
        'Zero-infrastructure maintenance',
        'Automatic parallel testing',
        'Blue-green deployments',
        'Rollback mechanisms'
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'Production',
      icon: GitBranch
    },
    {
      id: 3,
      title: 'Container Security Scanner',
      description: 'Advanced container vulnerability scanner with ML-powered threat detection and automated remediation suggestions.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'security',
      technologies: ['Go', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis'],
      features: [
        'Real-time vulnerability scanning',
        'ML-based threat detection',
        'Compliance reporting',
        'Integration with CI/CD pipelines'
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'Beta',
      icon: Shield
    },
    {
      id: 4,
      title: 'Microservices Monitoring Suite',
      description: 'Comprehensive monitoring and observability platform for microservices architectures with distributed tracing.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'monitoring',
      technologies: ['Prometheus', 'Grafana', 'Jaeger', 'Elasticsearch', 'Kafka'],
      features: [
        'Distributed tracing',
        'Custom metrics dashboards',
        'Intelligent alerting',
        'Performance analytics'
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'Production',
      icon: Monitor
    },
    {
      id: 5,
      title: 'Database Automation Toolkit',
      description: 'Automated database provisioning, backup, and scaling toolkit for multi-database environments.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'database',
      technologies: ['Python', 'Ansible', 'PostgreSQL', 'MongoDB', 'Redis'],
      features: [
        'Automated provisioning',
        'Intelligent backup strategies',
        'Performance optimization',
        'Multi-database support'
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'Production',
      icon: Database
    },
    {
      id: 6,
      title: 'Edge Computing Orchestrator',
      description: 'Distributed edge computing management platform with automatic workload placement and optimization.',
      image: 'https://images.pexels.com/photos/1181304/pexels-photo-1181304.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'infrastructure',
      technologies: ['Kubernetes', 'Docker', 'MQTT', 'InfluxDB', 'Node.js'],
      features: [
        'Edge node management',
        'Workload orchestration',
        'Latency optimization',
        'IoT device integration'
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
      status: 'Development',
      icon: Server
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: Server },
    { id: 'cloud', name: 'Cloud', icon: Cloud },
    { id: 'cicd', name: 'CI/CD', icon: GitBranch },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'monitoring', name: 'Monitoring', icon: Monitor },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'text-cyber-green border-cyber-green';
      case 'Beta': return 'text-cyber-blue border-cyber-blue';
      case 'Development': return 'text-cyber-magenta border-cyber-magenta';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-midnight">
      <div className="container mx-auto px-6">
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
              <span className="neon-blue">Featured</span> <span className="text-cyber-green">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-green mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 font-tech max-w-3xl mx-auto">
              Cutting-edge DevOps solutions that push the boundaries of cloud infrastructure 
              and automation technologies.
            </p>
          </motion.div>

          {/* Filter Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 font-tech ${
                    filter === category.id
                      ? 'bg-cyber-blue text-black border-cyber-blue'
                      : 'bg-transparent text-cyber-blue border-cyber-blue hover:bg-cyber-blue/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    rotateY: 5,
                    boxShadow: '0 20px 40px rgba(0, 240, 255, 0.3)'
                  }}
                  className="glassmorphism rounded-lg overflow-hidden border border-gray-800 hover:border-cyber-blue transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-orbitron font-bold border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </div>

                    {/* Project Icon */}
                    <div className="absolute bottom-4 left-4">
                      <Icon className="w-8 h-8 text-cyber-blue" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-orbitron font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 font-tech text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-black/50 rounded text-xs font-tech text-cyber-green border border-cyber-green/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-black/50 rounded text-xs font-tech text-gray-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-1 mb-6">
                      {project.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-400 font-tech">
                          <div className="w-1 h-1 bg-cyber-blue rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-transparent border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black transition-all duration-300 rounded font-tech text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.a>
                      
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-cyber-magenta text-black hover:bg-cyber-magenta/80 transition-all duration-300 rounded font-tech text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;