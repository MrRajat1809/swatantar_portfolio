'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Briefcase,
    MapPin,
    Calendar,
    X,
    Building,
    Award,
    Target,
    FlaskConical,
    GraduationCap
} from 'lucide-react';
import Card, { CardContent } from './ui/Card';

export default function ExperienceSection() {
    const [selectedExperience, setSelectedExperience] = useState(null);
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const wasDragging = useRef(false);

    const experiences = [
        {
            id: 1,
            number: '1️⃣',
            title: 'Project Assistant',
            organization: 'CSIR – National Institute of Oceanography (NIO)',
            type: 'Full-time',
            location: 'Goa, India',
            period: 'Jun 2011 – Jun 2013',
            duration: '2 yrs 1 mo',
            focus: 'Marine Microbial Ecology & Ocean Biogeochemistry',
            description: [
                'Investigated microbial sulfur and carbon cycles in the water column and sediments along the southwest coast of India.',
                'Conducted field sampling, nutrient analysis, and oceanographic measurements during seasonal upwelling events.',
                'Contributed to long-term biological oceanography projects under CSIR-NIO\'s coastal ecosystem programs.'
            ],
            color: 'from-blue-500 to-blue-600',
            icon: FlaskConical
        },
        {
            id: 2,
            number: '2️⃣',
            title: 'Research Scientist',
            organization: 'National Centre for Polar and Ocean Research (NCPOR)',
            type: 'Full-time',
            location: 'Goa, India',
            period: 'Jul 2013 – May 2014',
            duration: '11 mos',
            focus: 'Arctic Microbial Ecology & Polar Biogeochemistry',
            description: [
                'Participated in the Indian Arctic Research and Development Programme.',
                'Conducted Arctic field expeditions, focusing on fjord microbial ecology and biogeochemical flux studies.',
                'Engaged in geo-political workshops and collaborative initiatives shaping India\'s Arctic research framework.'
            ],
            color: 'from-cyan-500 to-cyan-600',
            icon: Target
        },
        {
            id: 3,
            number: '3️⃣',
            title: 'Scientific Assistant',
            organization: 'Friedrich Schiller University Jena',
            type: 'Contract',
            location: 'Jena, Thuringia, Germany',
            period: 'Jun 2017 – Apr 2018',
            duration: '11 mos',
            focus: 'Stable Isotope Tracer Studies & Denitrification Pathways',
            description: [
                'Designed and executed microcosm experiments using stable isotope tracers to explore chemolithoautotrophic, mixotrophic, and heterotrophic denitrification.',
                'Linked microbial metabolic processes to isotopic fractionation patterns under varying redox and nutrient conditions.',
                'Advanced understanding of nitrogen transformation pathways in soil and aquatic microbial systems.'
            ],
            color: 'from-purple-500 to-purple-600',
            icon: GraduationCap
        },
        {
            id: 4,
            number: '4️⃣',
            title: 'Postdoctoral Researcher',
            organization: 'Pacific Northwest National Laboratory (PNNL)',
            type: 'Full-time',
            location: 'Richland, Washington, USA',
            period: 'Sep 2018 – Oct 2020',
            duration: '2 yrs 2 mos',
            focus: 'Aquatic–Terrestrial Biogeochemistry & Microbial Processes',
            description: [
                'Led research on nutrient and carbon cycling at aquatic–terrestrial interfaces.',
                'Employed metagenomics and stable isotope techniques to characterize microbial communities and their environmental functions.',
                'Integrated findings into predictive ecosystem-scale biogeochemical models.'
            ],
            color: 'from-green-500 to-green-600',
            icon: Award
        },
        {
            id: 5,
            number: '5️⃣',
            title: 'Assistant Professor & Academic/Exam Coordinator',
            organization: 'Department of Biotechnology Engineering and Food Technology, Chandigarh University',
            type: 'Full-time',
            location: 'Mohali, Punjab, India',
            period: 'Jan 2022 – Present',
            duration: 'Present',
            focus: 'Teaching, Academic Administration & Research Coordination',
            description: [
                'Delivering undergraduate and postgraduate courses in biotechnology and life sciences.',
                'Coordinating academic planning, examinations, and research mentoring within the department.',
                'Supervising student projects in environmental biotechnology, microbial ecology, and biogeochemical processes.',
                'Facilitating inter-departmental collaborations and ensuring curriculum–research alignment.'
            ],
            color: 'from-orange-500 to-orange-600',
            icon: Building,
            isCurrent: true
        }
    ];

    // Drag to scroll handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        wasDragging.current = false;
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        scrollContainerRef.current.style.cursor = 'grabbing';
        scrollContainerRef.current.style.userSelect = 'none';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling

        // If moved more than 5 pixels, consider it a drag
        if (Math.abs(walk) > 5) {
            wasDragging.current = true;
        }

        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grab';
            scrollContainerRef.current.style.userSelect = 'auto';
        }

        // Reset wasDragging after a brief delay to prevent immediate clicks
        setTimeout(() => {
            wasDragging.current = false;
        }, 100);
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            if (scrollContainerRef.current) {
                scrollContainerRef.current.style.cursor = 'grab';
                scrollContainerRef.current.style.userSelect = 'auto';
            }
        }
    };

    const handleCardClick = (exp) => {
        // Only open the modal if not dragging
        if (!wasDragging.current) {
            setSelectedExperience(exp);
        }
    };

    return (
        <section className="py-24 px-4 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-400/5 dark:bg-purple-600/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-400/5 dark:bg-cyan-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full mb-4">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm font-medium">Career Journey</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">
                            Professional Experience Timeline
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        A journey through research institutions across India, Germany, and USA
                    </p>
                </motion.div>

                {/* Horizontal Scroll Timeline */}
                <div className="relative">
                    {/* Timeline Container */}
                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-auto hide-scrollbar px-12"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch',
                            cursor: 'grab'
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="flex gap-6 pb-8 min-w-max relative">
                            {/* Timeline Line */}
                            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 dark:from-blue-800 dark:via-purple-800 dark:to-cyan-800"></div>

                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    {/* Timeline Dot */}
                                    <div className={`absolute top-20 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br ${exp.color} rounded-full shadow-lg z-10 flex items-center justify-center`}>
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </div>

                                    {/* Experience Card */}
                                    <motion.div
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        onClick={() => handleCardClick(exp)}
                                        className="cursor-pointer mt-32"
                                    >
                                        <Card hover={true} className="w-80 h-full">
                                            <CardContent className="p-6">
                                                {/* Number Badge */}
                                                <div className="text-4xl mb-3">{exp.number}</div>

                                                {/* Icon */}
                                                <div className={`w-14 h-14 bg-gradient-to-br ${exp.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                                                    <exp.icon className="w-7 h-7 text-white" />
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-scientific">
                                                    {exp.title}
                                                </h3>

                                                {/* Organization */}
                                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
                                                    {exp.organization}
                                                </p>

                                                {/* Type Badge */}
                                                <div className="mb-4">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                        exp.isCurrent
                                                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                                                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                                                    }`}>
                                                        {exp.type}
                                                    </span>
                                                </div>

                                                {/* Details */}
                                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="w-4 h-4 flex-shrink-0" />
                                                        <span className="line-clamp-1">{exp.location}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <Calendar className="w-4 h-4 flex-shrink-0" />
                                                        <span>{exp.duration}</span>
                                                    </div>
                                                </div>

                                                {/* Focus Area */}
                                                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                                    <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-1">
                                                        Research Focus:
                                                    </p>
                                                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                                                        {exp.focus}
                                                    </p>
                                                </div>

                                                {/* Click Indicator */}
                                                <div className="mt-4 text-xs text-blue-600 dark:text-blue-400 font-medium text-center">
                                                    Click for details →
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Experience Detail Modal */}
            <AnimatePresence>
                {selectedExperience && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedExperience(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl w-full mx-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-6 sm:p-8">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-6 gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${selectedExperience.color} rounded-xl flex items-center justify-center shadow-lg`}>
                                                <selectedExperience.icon className="w-8 h-8 text-white" />
                                            </div>
                                            <div className="text-5xl">{selectedExperience.number}</div>
                                        </div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                            {selectedExperience.title}
                                        </h3>
                                        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                                            {selectedExperience.organization}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-3 mb-4">
                                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                                selectedExperience.isCurrent
                                                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                                                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                                            }`}>
                                                {selectedExperience.type}
                                            </span>
                                            {selectedExperience.isCurrent && (
                                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                                                    Current Position
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        onClick={() => setSelectedExperience(null)}
                                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex-shrink-0"
                                    >
                                        <X size={24} />
                                    </motion.button>
                                </div>

                                {/* Details */}
                                <div className="space-y-6">
                                    {/* Location and Period */}
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                                            <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                                            <div>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Location</p>
                                                <p className="text-sm font-semibold text-gray-900 dark:text-white">{selectedExperience.location}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                                            <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                                            <div>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">Duration</p>
                                                <p className="text-sm font-semibold text-gray-900 dark:text-white">{selectedExperience.period}</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">({selectedExperience.duration})</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Research Focus */}
                                    <div>
                                        <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                                            <Briefcase className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                            Research Focus
                                        </h4>
                                        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-xl">
                                            {selectedExperience.focus}
                                        </p>
                                    </div>

                                    {/* Key Responsibilities */}
                                    <div>
                                        <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                                            Key Responsibilities & Achievements
                                        </h4>
                                        <ul className="space-y-3">
                                            {selectedExperience.description.map((item, index) => (
                                                <motion.li
                                                    key={index}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div className={`w-2 h-2 bg-gradient-to-br ${selectedExperience.color} rounded-full mt-2 flex-shrink-0`}></div>
                                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                                        {item}
                                                    </p>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .tracking-scientific {
                    letter-spacing: 0.02em;
                }
            `}</style>
        </section>
    );
}
