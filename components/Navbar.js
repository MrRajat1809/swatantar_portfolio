'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, onSectionChange }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'research', label: 'Research' },
        { id: 'projects', label: 'Achievements' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        onSectionChange(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Account for navbar height
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };


    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent cursor-pointer"
                        onClick={() => scrollToSection('home')}
                    >
                        Dr. Swatantar Kumar
                    </motion.button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.button
                                key={item.id}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection(item.id)}
                                className={`relative px-3 py-2 rounded-lg transition-colors ${activeSection === item.id
                                        ? 'text-cyan-600 dark:text-cyan-400 font-medium'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                                    }`}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg -z-10"
                                        initial={false}
                                        transition={{ type: 'spring', bounce: 0.25, duration: 0.6 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
                    >
                        <div className="px-4 py-4 space-y-2">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${activeSection === item.id
                                            ? 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 font-medium'
                                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                                        }`}
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}