'use client'
import { motion } from 'framer-motion'
import { Code, Database, Server, Globe, Smartphone, Cloud } from 'lucide-react'

export default function About() {
  const skills = [
    { icon: Code, name: 'Frontend Development', level: 95, color: 'from-blue-400 to-purple-500' },
    { icon: Database, name: 'Backend Development', level: 90, color: 'from-green-400 to-blue-500' },
    { icon: Server, name: 'DevOps & Cloud', level: 85, color: 'from-purple-400 to-pink-500' },
    { icon: Globe, name: 'Web Technologies', level: 92, color: 'from-yellow-400 to-red-500' },
    { icon: Smartphone, name: 'Mobile Development', level: 80, color: 'from-pink-400 to-red-500' },
    { icon: Cloud, name: 'Cloud Architecture', level: 88, color: 'from-indigo-400 to-purple-500' },
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          animate={{
            textShadow: ['0 0 20px rgba(240, 147, 251, 0.5)', '0 0 30px rgba(240, 147, 251, 0.8)', '0 0 20px rgba(240, 147, 251, 0.5)']
          }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-white"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Full Stack Developer
            </motion.h3>
            <p className="text-lg mb-6 leading-relaxed text-white/90">
              I'm a passionate full stack developer who thrives on creating cutting-edge digital experiences. 
              With expertise in modern web technologies, I transform ideas into reality through 
              clean code and innovative solutions.
            </p>
            <p className="text-lg leading-relaxed text-white/80">
              My journey spans across frontend frameworks, backend systems, databases, and cloud architecture. 
              I believe in building scalable, performant applications that make a difference.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className="glass-effect p-4 rounded-xl text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="mb-3"
                >
                  <skill.icon className="w-8 h-8 text-white mx-auto" />
                </motion.div>
                <h4 className="font-semibold text-sm text-white mb-2">{skill.name}</h4>
                <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                  <motion.div 
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.1 }}
                  />
                </div>
                <span className="text-xs text-white/70">{skill.level}%</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}