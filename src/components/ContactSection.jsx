import { Instagram, Linkedin, Mail, MapIcon, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"
import { useState, useEffect } from "react"
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init("5toW2M7YXrPGVu7Hs"); // Ganti dengan Public Key Anda
    }, [])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus({ type: '', message: '' })

        const form = e.target
        
        try {
            // EmailJS configuration - ganti dengan data Anda
            const serviceID = 'service_qku7frd' // dari EmailJS dashboard
            const templateID = 'template_s4n1u6x' // dari EmailJS dashboard

            await emailjs.sendForm(
                serviceID,
                templateID,
                form,
                "5toW2M7YXrPGVu7Hs" // public key
            )

            setSubmitStatus({ 
                type: 'success', 
                message: 'Message sent successfully! I\'ll get back to you soon Thank You.' 
            })
            form.reset()
        } catch (error) {
            console.error('Email sending error:', error)
            setSubmitStatus({ 
                type: 'error', 
                message: 'Failed to send message. Please try again or contact me directly.' 
            })
        } finally {
            setIsSubmitting(false)
            
            // Clear status message after 5 seconds
            setTimeout(() => {
                setSubmitStatus({ type: '', message: '' })
            }, 5000)
        }
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>
                        
                        <div className="space-y-6">
                            <ContactInfoItem 
                                icon={<Mail className="h-6 w-6 text-primary" />}
                                title="Email"
                                content="mfahmia1125@gmail.com"
                                href="mailto:mfahmia1125@gmail.com"
                            />
                            
                            <ContactInfoItem 
                                icon={<Phone className="h-6 w-6 text-primary" />}
                                title="Phone / WhatsApp"
                                content="+62 8579-515-1319"
                                href="https://wa.me/6285795151319"
                            />
                            
                            <ContactInfoItem 
                                icon={<MapIcon className="h-6 w-6 text-primary" />}
                                title="Location"
                                content="Cibiru, Bandung, Indonesia"
                                href="https://maps.app.goo.gl/ffqdJxy8Frp1KhnC6"
                            />
                        </div>

                        {/* Social Media */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">
                                Connect With Me
                            </h4>
                            <div className="flex space-x-4">
                                <SocialLink 
                                    href="https://www.linkedin.com/in/mochammad-fahmi-abdillah-320349373"
                                    icon={<Linkedin className="h-6 w-6 hover:text-primary transition-colors" />}
                                    label="LinkedIn"
                                />
                                <SocialLink 
                                    href="https://www.instagram.com/moch.fahmi.abd"
                                    icon={<Instagram className="h-6 w-6 hover:text-primary transition-colors" />}
                                    label="Instagram"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <FormInput 
                                id="name"
                                name="name"
                                label="Your Name"
                                type="text"
                                placeholder="Your name..."
                                required
                            />
                            
                            <FormInput 
                                id="email"
                                name="email"
                                label="Your Email"
                                type="email"
                                placeholder="your.email@example.com"
                                required
                            />
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to discuss about..."
                                />
                            </div>

                            {/* Status Message */}
                            {submitStatus.message && (
                                <div className={`p-3 rounded-md ${
                                    submitStatus.type === 'success' 
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' 
                                        : 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300'
                                }`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <button 
                                type="submit" 
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    isSubmitting && "opacity-70 cursor-not-allowed"
                                )}
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={16} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Reusable Contact Info Component
const ContactInfoItem = ({ icon, title, content, href }) => {
    return (
        <div className="flex items-start space-x-4">
            <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                {icon}
            </div>
            <div>
                <h4 className="font-medium mb-1">
                    {title}
                </h4>
                <a 
                    href={href} 
                    className="text-muted-foreground hover:text-primary transition-colors break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {content}
                </a>
            </div>
        </div>
    )
}

// Reusable Social Link Component
const SocialLink = ({ href, icon, label }) => {
    return (
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            aria-label={label}
        >
            {icon}
        </a>
    )
}

// Reusable Form Input Component
const FormInput = ({ id, name, label, type, placeholder, required }) => {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium mb-2">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name || id}
                required={required}
                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                placeholder={placeholder}
            />
        </div>
    )
}