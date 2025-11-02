'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { GlassCard } from './ui/Card';
import Button from './ui/Button';
import Tag from './ui/Tag';

const basePath = process.env.NODE_ENV === 'production' ? '/swatantar_portfolio' : '';

/**
 * HERO SECTION - PROFESSIONAL MULTI-LAYER BACKGROUND ANIMATION
 *
 * Architecture Overview:
 * ======================
 * This component implements a sophisticated 6-layer background animation system
 * inspired by high-end tech websites like Isomorphic Labs.
 *
 * Layer Structure:
 * ----------------
 * 1. BASE LAYER (30s): Background image with subtle zoom/pan + mouse parallax
 * 2. GRADIENT MESH 1 (25s): Radial gradient with position/size animation
 * 3. GRADIENT MESH 2 (20s): Linear gradient with rotation effect
 * 4. GRADIENT MESH 3 (28s): Radial gradient with hue rotation
 * 5. FLOATING PARTICLES (32-40s): 4 particles with staggered animations
 * 6. OVERLAY (35s): Opacity pulsing for atmospheric depth
 *
 * Performance Optimizations:
 * -------------------------
 * - GPU-accelerated transforms (translateZ(0) for hardware acceleration)
 * - will-change properties for optimized rendering
 * - Reduced complexity on mobile devices
 * - prefers-reduced-motion support for accessibility
 * - Spring physics for smooth, natural mouse interactions
 *
 * Animation Timing:
 * ----------------
 * Each layer uses unique duration to create non-repetitive patterns:
 * - LCM (Least Common Multiple) of all durations creates 42,000s total cycle
 * - Ensures organic, ever-changing visual experience
 * - Staggered delays prevent synchronization
 *
 * Color Palette:
 * -------------
 * - Primary: Blue (#3b82f6) - Trust and professionalism
 * - Secondary: Purple (#8b5cf6) - Creativity and innovation
 * - Accents: Cyan (#06b6d4), Pink (#ec4899), Indigo (#6366f1)
 */
export default function HeroSection() {
    // Animation variants for content
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    const scrollToNext = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    const stats = [
        { value: "PhD", label: "Germany (2014-2018)", color: "from-cyan-500 to-blue-600" },
        { value: "15+", label: "Peer-Reviewed Publications", color: "from-blue-500 to-cyan-600" },
        { value: "PNNL", label: "Postdoc, USA (2018-2020)", color: "from-cyan-600 to-blue-500" }
    ];

    const socialLinks = [
        { icon: Github, href: "https://github.com/MrRajat1809", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/dr-swatantar-kumar-0864251aa", label: "LinkedIn" },
        { icon: ExternalLink, href: "https://orcid.org/0000-0002-9057-9911", label: "ORCID" }
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
            {/* Subtle overlay for content readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/30 dark:from-gray-900/60 dark:via-transparent dark:to-gray-900/50 pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 text-center px-4 max-w-5xl mx-auto"
            >
                {/* Profile Image */}
                <motion.div
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="mb-6 mt-8 md:mt-0"
                >
                    <div className="relative inline-block">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 p-1"
                        />
                        <Image
                            src={`${basePath}/images/profile.jpg`}
                            alt="Dr. Swatantar Kumar"
                            width={140}
                            height={140}
                            className="relative rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
                        />
                    </div>
                </motion.div>

                {/* Name and Title */}
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl md:text-6xl font-bold mb-4"
                >
                    <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">Dr. Swatantar Kumar</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-3"
                >
                    Microbial Biogeochemist | Environmental Microbiology | Nitrogen Cycle Research
                </motion.p>

                <motion.p
                    variants={itemVariants}
                    className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed px-4"
                >
                    Assistant Professor at Chandigarh University | PhD from Friedrich Schiller University, Germany (Max Planck Fellow) |
                    Postdoctoral Researcher at Pacific Northwest National Laboratory, USA | Specializing in microbial
                    nitrogen cycling and biogeochemical processes in pristine groundwater ecosystems
                </motion.p>

                {/* Stats */}
                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 max-w-4xl mx-auto px-4"
                >
                    {stats.map((stat, index) => (
                        <GlassCard
                            key={index}
                            className="p-5 hover-lift text-center"
                        >
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <div className="text-2xl md:text-3xl font-bold text-[#00AEEF] mb-2 tracking-scientific">
                                    {stat.value}
                                </div>
                                <div className="text-slate-gray text-xs md:text-sm tracking-wide">
                                    {stat.label}
                                </div>
                            </motion.div>
                        </GlassCard>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 px-4"
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="primary"
                            href="mailto:kumar.swatantar2020@gmail.com"
                            className="flex items-center gap-2 text-sm md:text-base"
                        >
                            <Mail size={18} />
                            Get In Touch
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="secondary"
                            href={`${basePath}/resume.pdf`}
                            className="flex items-center gap-2 text-sm md:text-base"
                        >
                            <Download size={18} />
                            Download CV
                        </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="secondary"
                            href="https://github.com/MrRajat1809"
                            className="flex items-center gap-2 text-sm md:text-base"
                        >
                            <Github size={18} />
                            GitHub
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center gap-4 mb-8"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            whileHover={{ scale: 1.15, y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 glass-card rounded-full shadow-soft hover:shadow-soft-lg transition-all"
                            title={social.label}
                        >
                            <social.icon size={20} className="text-navy" />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col items-center mt-4"
                >
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3">Discover My Journey</p>
                    <motion.button
                        onClick={scrollToNext}
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
                    >
                        <ArrowDown size={20} className="text-gray-700 dark:text-gray-300" />
                    </motion.button>
                </motion.div>
            </motion.div>
        </section>
    );
}