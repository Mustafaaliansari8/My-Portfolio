'use client'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full stack e-commerce platform with React, Node.js, and MongoDB',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwindcss'],
      github: 'https://github.com/Mustafaaliansari8',
      demo: 'https://shopify.com',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Real-Time Chat App',
      description: 'WebSocket-based chat application with authentication and file sharing',
      tech: ['Next.js', 'React', 'Node.js'],
      github: 'https://github.com/Mustafaaliansari8',
      demo: 'https://discord.com',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative project management tool with real-time updates',
      tech: ['Java', 'Mongodb'],
      github: 'https://github.com/Mustafaaliansari8',
      demo: 'https://trello.com',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'API Gateway Service',
      description: 'Microservices API gateway with rate limiting and authentication',
      tech: ['Node.js', 'Mongodb', 'Bootstrap'],
      github: 'https://github.com/Mustafaaliansari8',
      demo: 'https://aws.amazon.com/api-gateway',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Mobile Banking App',
      description: 'React Native banking app with biometric authentication',
      tech: ['React', 'Node.js', 'Shadcn', 'AWS'],
      github: 'https://github.com/Mustafaaliansari8',
      demo: 'https://www.chase.com/digital/mobile-banking',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center'
    },
    {
      title: 'Cloud Analytics Dashboard',
      description: 'Real-time analytics dashboard with data visualization',
      tech: ['Html', 'Python', 'Css', 'Java'],
      github: 'https://github.com/Mustafaaliansari8',
      demo: 'https://analytics.google.com',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center'
    }
  ]

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          animate={{
            textShadow: ['0 0 20px rgba(102, 126, 234, 0.5)', '0 0 30px rgba(102, 126, 234, 0.8)', '0 0 20px rgba(102, 126, 234, 0.5)']
          }}
        >
          My Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, rotateY: 5 }}
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-black/20"
                  whileHover={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <motion.button 
                    onClick={() => handleLinkClick(project.github)}
                    className="p-2 glass-effect rounded-full hover:scale-110 transition-all"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.button>
                  <motion.button 
                    onClick={() => handleLinkClick(project.demo)}
                    className="p-2 glass-effect rounded-full hover:scale-110 transition-all"
                    whileHover={{ scale: 1.2, rotate: -360 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
                
                {/* Floating particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/30 rounded-full"
                    style={{
                      left: `${20 + i * 30}%`,
                      top: `${30 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
              
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold mb-3 text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-white/80 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={tech}
                      className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/30 cursor-pointer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.3)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}