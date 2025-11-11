'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleContactClick = (type: string, value: string, href: string) => {
    if (type === 'Email' || type === 'Phone') {
      navigator.clipboard.writeText(value)
      alert(`${value} copied to clipboard!`)
    } else {
      window.open(href, '_blank')
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'imustafaali04@gmail.com', color: 'from-red-400 to-pink-500', href: 'mailto:imustafaali04@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8802379998', color: 'from-green-400 to-blue-500', href: 'tel:+918802379998' },
    { icon: MapPin, label: 'Location', value: 'India, New Delhi', color: 'from-purple-400 to-pink-500', href: 'https://www.google.com/maps/place/New+Delhi,+Delhi,+India' },
  ]

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Mustafaaliansari8', color: 'hover:text-blue-400' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/mustafa-ali-ansari-7267a3373/', color: 'hover:text-blue-400' },
    { icon: Twitter, url: 'https://x.com/iSazid08', color: 'hover:text-blue-300' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Message sent! (This is a demo)')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10"></div>
      
      {/* Floating elements */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-accent/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
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
          Let's Connect
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-8 rounded-2xl"
          >
            <motion.h3 
              className="text-3xl font-bold mb-6 text-white"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Let's Build Something Amazing Together
            </motion.h3>
            <p className="text-white/90 mb-8 leading-relaxed text-lg">
              Ready to bring your ideas to life? I'm always excited to work on innovative projects 
              and collaborate with forward-thinking teams. Let's create something extraordinary!
            </p>
            
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={info.label}
                  onClick={() => handleContactClick(info.label, info.value, info.href)}
                  className="flex items-center space-x-4 glass-effect p-4 rounded-xl cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <motion.div 
                    className={`p-3 rounded-full bg-gradient-to-r ${info.color}`}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-white/70">{info.label}</p>
                    <p className="font-semibold text-white">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 glass-effect rounded-full text-white transition-colors ${social.color}`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.form 
            onSubmit={handleSubmit}
            className="glass-effect p-8 rounded-2xl space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-4 glass-effect rounded-xl bg-transparent text-white placeholder-white/70 border border-white/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-4 glass-effect rounded-xl bg-transparent text-white placeholder-white/70 border border-white/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <textarea 
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full p-4 glass-effect rounded-xl bg-transparent text-gray-800 placeholder-white/70 border border-white/30 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
              />
            </motion.div>
            <motion.button 
              type="submit"
              className="w-full p-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-accent hover:to-primary transition-all glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ['0 0 20px rgba(240, 147, 251, 0.5)', '0 0 30px rgba(240, 147, 251, 0.8)', '0 0 20px rgba(240, 147, 251, 0.5)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}