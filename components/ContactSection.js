'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    ExternalLink,
    Send,
    CheckCircle,
    AlertCircle,
    MessageCircle,
    User,
    FileText,
    Copy,
    Download
} from 'lucide-react';
import { GlassCard } from './ui/Card';
import Button from './ui/Button';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        interest: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');
    const [copiedField, setCopiedField] = useState(null);

    const contactMethods = [
        {
            id: 'email',
            label: 'Email',
            value: 'kumar.swatantar2020@gmail.com',
            icon: Mail,
            color: 'from-blue-500 to-blue-600',
            href: 'mailto:kumar.swatantar2020@gmail.com',
            description: 'For research inquiries and collaboration',
            copyable: true
        },
        {
            id: 'phone',
            label: 'Phone',
            value: '+91 7807631254',
            icon: Phone,
            color: 'from-green-500 to-green-600',
            href: 'tel:+917807631254',
            description: 'Available during business hours (IST)',
            copyable: true
        },
        {
            id: 'linkedin',
            label: 'LinkedIn',
            value: 'dr-swatantar-kumar',
            icon: Linkedin,
            color: 'from-blue-600 to-blue-700',
            href: 'https://www.linkedin.com/in/dr-swatantar-kumar-0864251aa',
            description: 'Professional networking and updates'
        },
        {
            id: 'orcid',
            label: 'ORCID',
            value: '0000-0002-9057-9911',
            icon: ExternalLink,
            color: 'from-green-700 to-green-800',
            href: 'https://orcid.org/0000-0002-9057-9911',
            description: 'Research publications and profile'
        }
    ];

    const interests = [
        'Research Collaboration',
        'Graduate Student Supervision',
        'Joint Publications',
        'Grant Proposals & Funding',
        'Conference Invitations',
        'Academic Consulting',
        'Other'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission (replace with actual implementation)
        try {
            // In a real implementation, you would send the data to your backend
            // const response = await fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });

            // For demo purposes, just simulate a delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
                interest: ''
            });
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            // Reset status after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
    };

    const copyToClipboard = async (text, field) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedField(field);
            setTimeout(() => setCopiedField(null), 2000);
        } catch (error) {
            console.error('Failed to copy:', error);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="py-24 px-4 relative">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">
                            Contact
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Open to discussing research opportunities, collaborations, and academic exchanges in microbial biogeochemistry and environmental microbiology
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                                Get In Touch
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                Available for research collaborations, graduate student supervision, joint publications,
                                and academic consultations in microbial biogeochemistry, environmental microbiology, and
                                nitrogen cycling. Open to international partnerships and interdisciplinary projects.
                            </p>
                        </motion.div>

                        {/* Contact Methods */}
                        <div className="space-y-4">
                            {contactMethods.map((method) => (
                                <motion.div
                                    key={method.id}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, x: 8 }}
                                    className="group"
                                >
                                    <GlassCard className="p-4 sm:p-6 hover-lift">
                                        <div className="flex items-center justify-between gap-3 sm:gap-4">
                                            <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                                                <motion.div
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                    className={`p-2 sm:p-3 bg-gradient-to-r ${method.color} rounded-xl flex-shrink-0`}
                                                >
                                                    <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                                </motion.div>
                                                <div className="min-w-0 flex-1">
                                                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors break-words">
                                                        {method.label}
                                                    </h4>
                                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-medium break-all">
                                                        {method.value}
                                                    </p>
                                                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 break-words">
                                                        {method.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                {method.copyable && (
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => copyToClipboard(method.value, method.id)}
                                                        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                                        title="Copy to clipboard"
                                                    >
                                                        <AnimatePresence mode="wait">
                                                            {copiedField === method.id ? (
                                                                <motion.div
                                                                    key="check"
                                                                    initial={{ scale: 0, rotate: -90 }}
                                                                    animate={{ scale: 1, rotate: 0 }}
                                                                    exit={{ scale: 0, rotate: 90 }}
                                                                >
                                                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                                                </motion.div>
                                                            ) : (
                                                                <motion.div
                                                                    key="copy"
                                                                    initial={{ scale: 0 }}
                                                                    animate={{ scale: 1 }}
                                                                    exit={{ scale: 0 }}
                                                                >
                                                                    <Copy className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </motion.button>
                                                )}
                                                <motion.a
                                                    whileHover={{ scale: 1.1 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    href={method.href}
                                                    target={method.id === 'email' || method.id === 'phone' ? '_self' : '_blank'}
                                                    rel={method.id === 'email' || method.id === 'phone' ? undefined : 'noopener noreferrer'}
                                                    className="p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                                                    title={`Open ${method.label}`}
                                                >
                                                    <ExternalLink className="w-5 h-5" />
                                                </motion.a>
                                            </div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </div>

                        {/* Quick Actions */}
                        <motion.div variants={itemVariants} className="pt-8">
                            <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Quick Actions
                            </h4>
                            <div className="flex flex-wrap gap-4">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        variant="primary"
                                        href="/swatantar_portfolio/resume.pdf"
                                        className="flex items-center gap-2"
                                    >
                                        <Download size={20} />
                                        <span>Download CV</span>
                                    </Button>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        variant="secondary"
                                        href="#research"
                                        className="flex items-center gap-2"
                                    >
                                        <FileText size={20} />
                                        <span>View Research</span>
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <GlassCard className="p-8">
                        <motion.div variants={itemVariants}>
                            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                                Send a Message
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                Please use the form below for inquiries. All messages are typically responded to within 24-48 business hours.
                            </p>
                        </motion.div>

                        <motion.form
                            variants={containerVariants}
                            onSubmit={handleSubmit}
                            className="space-y-6"
                        >
                            <div className="grid md:grid-cols-2 gap-6">
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        <User className="inline w-4 h-4 mr-1" />
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                                        placeholder="Your full name"
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        <Mail className="inline w-4 h-4 mr-1" />
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </motion.div>
                            </div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    <MessageCircle className="inline w-4 h-4 mr-1" />
                                    Interest Area
                                </label>
                                <select
                                    id="interest"
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                                >
                                    <option value="">Select an area of interest</option>
                                    {interests.map((interest) => (
                                        <option key={interest} value={interest}>
                                            {interest}
                                        </option>
                                    ))}
                                </select>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    <FileText className="inline w-4 h-4 mr-1" />
                                    Subject *
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all"
                                    placeholder="Brief description of your inquiry"
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    <MessageCircle className="inline w-4 h-4 mr-1" />
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-all resize-none"
                                    placeholder="Tell me more about your inquiry, research interests, or collaboration ideas..."
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                                    className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-medium transition-all ${isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                                        } text-white`}
                                >
                                    <AnimatePresence mode="wait">
                                        {isSubmitting ? (
                                            <motion.div
                                                key="loading"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex items-center gap-3"
                                            >
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                />
                                                <span>Sending...</span>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="send"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex items-center gap-3"
                                            >
                                                <Send size={20} />
                                                <span>Send Message</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </motion.div>

                            {/* Status Messages */}
                            <AnimatePresence>
                                {submitStatus !== 'idle' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className={`p-4 rounded-lg flex items-center gap-3 ${submitStatus === 'success'
                                                ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                                                : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
                                            }`}
                                    >
                                        {submitStatus === 'success' ? (
                                            <>
                                                <CheckCircle size={20} />
                                                <span>Message sent successfully. I will respond within 24-48 hours.</span>
                                            </>
                                        ) : (
                                            <>
                                                <AlertCircle size={20} />
                                                <span>There was an error sending your message. Please try again or contact me directly.</span>
                                            </>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.form>

                        {/* Additional Info */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600"
                        >
                            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-600 dark:text-gray-300">
                                <div>
                                    <h5 className="font-semibold mb-2 text-gray-900 dark:text-white">Response Time</h5>
                                    <p>I typically respond within 24-48 hours during business days.</p>
                                </div>
                                <div>
                                    <h5 className="font-semibold mb-2 text-gray-900 dark:text-white">Location</h5>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} />
                                        <span>Himachal Pradesh, India (IST)</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}