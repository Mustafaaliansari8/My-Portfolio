'use client'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null)

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'imustafaali04@gmail.com', color: 'from-red-400 to-pink-500', href: 'mailto:imustafaali04@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 8802379998', color: 'from-green-400 to-blue-500', href: 'tel:+918802379998' },
    { icon: MapPin, label: 'Location', value: 'India, New Delhi', color: 'from-purple-400 to-pink-500', href: 'geo:28.6139,77.2090?q=New+Delhi,+India' },
  ]

  const socialLinks = [
    { icon: Github, url: 'https://github.com/Mustafaaliansari8', color: 'hover:text-blue-400' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/mustafa-ali-ansari-7267a3373/', color: 'hover:text-blue-400' },
    { icon: Twitter, url: 'https://x.com/iSazid08', color: 'hover:text-blue-300' },
  ]

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    try {
      console.log('Sending email with:', {
        serviceId: 'service_34i8oal',
        templateId: 'template_ywsbg3n',
        publicKey: '0ZsX2vrr0mjL_DJJE',
        templateParams: {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      })
      
      await emailjs.send(
        'service_34i8oal',
        'template_ywsbg3n',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        '0ZsX2vrr0mjL_DJJE'
      )
      setMessage({ type: 'success', text: 'Message sent successfully! I\'ll get back to you soon.' })
      setFormData({ name: '', email: '', message: '' })
      setErrors({})
    } catch (error: any) {
      console.error('EmailJS error details:', error)
      let errorMessage = 'Failed to send message. Please try again.'
      
      if (error?.text) {
        errorMessage = `Error: ${error.text}`
      } else if (error?.message) {
        errorMessage = `Error: ${error.message}`
      }
      
      setMessage({ type: 'error', text: errorMessage })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: '' })
    if (message) setMessage(null)
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
                <motion.a 
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                </motion.a>
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
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl mb-6 text-center font-medium ${
                  message.type === 'success' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}
              >
                {message.text}
              </motion.div>
            )}
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
                className={`w-full p-4 glass-effect rounded-xl bg-transparent text-white placeholder-white/70 border transition-all focus:outline-none focus:ring-2 focus:ring-accent/20 ${
                  errors.name ? 'border-red-500' : 'border-white/30 focus:border-accent'
                }`}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
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
                className={`w-full p-4 glass-effect rounded-xl bg-transparent text-white placeholder-white/70 border transition-all focus:outline-none focus:ring-2 focus:ring-accent/20 ${
                  errors.email ? 'border-red-500' : 'border-white/30 focus:border-accent'
                }`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
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
                className={`w-full p-4 glass-effect rounded-xl bg-transparent text-white placeholder-white/70 border transition-all focus:outline-none focus:ring-2 focus:ring-accent/20 resize-none ${
                  errors.message ? 'border-red-500' : 'border-white/30 focus:border-accent'
                }`}
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </motion.div>
            <motion.button 
              type="submit"
              disabled={isLoading}
              className={`w-full p-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all glow ${
                isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:from-accent hover:to-primary'
              }`}
              whileHover={!isLoading ? { scale: 1.05 } : {}}
              whileTap={!isLoading ? { scale: 0.95 } : {}}
              animate={!isLoading ? { 
                boxShadow: ['0 0 20px rgba(240, 147, 251, 0.5)', '0 0 30px rgba(240, 147, 251, 0.8)', '0 0 20px rgba(240, 147, 251, 0.5)']
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
              <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}