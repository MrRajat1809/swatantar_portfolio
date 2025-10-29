'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Award,
    BookOpen,
    Users,
    Briefcase,
    Globe,
    FileText,
    Ship,
    Microscope,
    Mail,
    ExternalLink,
    X,
    Calendar,
    MapPin
} from 'lucide-react';

export default function AchievementsSection() {
    const [selectedAchievement, setSelectedAchievement] = useState(null);

    const categoryIcons = {
        patent: Award,
        reviewer: BookOpen,
        conference: Users,
        fieldwork: Ship
    };

    const achievements = [
        {
            id: 'biogrofe-patent',
            title: 'BIOGROFE Patent - Biotechnology Innovation',
            description: 'Patent published for BIOGROFE - Biotechnology Global Research Opportunities For Engineers, a novel innovation in biotechnology education and research.',
            longDescription: 'Successfully filed and published a patent for BIOGROFE (Biotechnology Global Research Opportunities For Engineers), an innovative platform designed to bridge the gap between biotechnology research and engineering applications. This patent represents a significant contribution to educational technology in the biotechnology sector, providing a framework for global research collaboration and opportunity identification.',
            category: 'patent',
            year: '2024',
            status: 'Published',
            patentNumber: '202411089369',
            featured: true,
            icon: Award,
            color: 'from-yellow-500 to-orange-500',
            metrics: [
                { label: 'Status', value: 'Published' },
                { label: 'Year', value: '2024' },
                { label: 'Application No.', value: '202411089369' }
            ]
        },
        {
            id: 'journal-reviewer',
            title: 'Peer Reviewer - Multiple High-Impact Journals',
            description: 'Active reviewer for prestigious scientific journals including Nature Scientific Reports, Soil Biology and Biochemistry, Biogeosciences, and FEMS Microbial Ecology.',
            longDescription: 'Serving as a peer reviewer for multiple high-impact scientific journals demonstrates recognition of expertise in microbial ecology and biogeochemistry. Regular review activities for Scientific Reports (Nature Research), Soil Biology and Biochemistry, Biogeosciences, and FEMS Microbial Ecology contribute to maintaining scientific rigor and advancing knowledge in environmental microbiology and biogeochemical sciences. This role involves critical evaluation of research manuscripts, providing constructive feedback to authors, and ensuring publication quality.',
            category: 'reviewer',
            year: 'Ongoing',
            status: 'Active',
            featured: true,
            icon: BookOpen,
            color: 'from-blue-500 to-indigo-500',
            journals: [
                'Scientific Reports (Nature Research)',
                'Soil Biology and Biochemistry',
                'Biogeosciences',
                'FEMS Microbial Ecology'
            ],
            metrics: [
                { label: 'Journals', value: '4' },
                { label: 'Status', value: 'Active' },
                { label: 'Field', value: 'Microbial Ecology' }
            ]
        },
        {
            id: 'invited-talk-czech',
            title: 'Invited Talk - Czech Republic',
            description: 'Invited speaker on "Biogeochemical processes in the pristine groundwater ecosystem" at Soil and Water Research Institute, Ceske Budejovice, Czech Republic.',
            longDescription: 'Delivered an invited talk on "Biogeochemical processes in the pristine groundwater ecosystem" at the prestigious Soil and Water Research Institute in Ceske Budejovice, Czech Republic. The presentation covered key findings from doctoral research on microbial nitrogen cycling in pristine carbonate-rock aquifers, highlighting the role of anammox bacteria and chemolithoautotrophic processes in groundwater biogeochemistry. This invitation reflects international recognition of research contributions to understanding subsurface microbial ecology.',
            category: 'conference',
            year: '2018',
            location: 'Czech Republic',
            status: 'Completed',
            featured: true,
            icon: Globe,
            color: 'from-green-500 to-emerald-500',
            metrics: [
                { label: 'Type', value: 'Invited Talk' },
                { label: 'Location', value: 'Czech Republic' },
                { label: 'Topic', value: 'Groundwater Biogeochemistry' }
            ]
        },
        {
            id: 'micom-2017',
            title: 'MiCom 2017 Conference - Organizing Committee',
            description: 'Organizing member of the 6th International Conference on Microbial Communication (MiCom 2017) in Germany.',
            longDescription: 'Served as an organizing member for the 6th International Conference on Microbial Communication (MiCom 2017) held in Germany. This international conference brought together leading researchers in microbial ecology and communication, facilitating knowledge exchange and collaboration. Responsibilities included coordinating scientific sessions, managing logistics, and facilitating interactions between international participants. The conference focused on cutting-edge research in microbial signaling, community interactions, and biogeochemical processes.',
            category: 'conference',
            year: '2017',
            location: 'Germany',
            status: 'Completed',
            featured: false,
            icon: Users,
            color: 'from-purple-500 to-pink-500',
            metrics: [
                { label: 'Role', value: 'Organizing Member' },
                { label: 'Conference', value: 'MiCom 2017' },
                { label: 'Location', value: 'Germany' }
            ]
        },
        {
            id: 'arabian-sea-cruise',
            title: 'Scientific Cruise - Arabian Sea Upwelling Study',
            description: '40-day scientific cruise expedition to study upwelling phenomena in near-shore and offshore waters of the Arabian Sea, west coast of India.',
            longDescription: 'Participated in an extensive 40-day scientific research cruise to investigate upwelling phenomena in the near-shore and offshore waters along the west coast of the Arabian Sea. This intensive field campaign involved onboard sample collection, real-time biogeochemical measurements, and microbial diversity assessments during active upwelling events. The expedition provided crucial insights into sulfur-cycling dynamics, microbial community responses to environmental changes, and biogeochemical processes in oxygen minimum zones. Work included 35SO4²⁻ radioactive isotope techniques, water column sampling at multiple depths, and coordinated multi-institutional research efforts.',
            category: 'fieldwork',
            year: '2011-2013',
            location: 'Arabian Sea, India',
            status: 'Completed',
            featured: true,
            icon: Ship,
            color: 'from-cyan-500 to-blue-500',
            metrics: [
                { label: 'Duration', value: '40 Days' },
                { label: 'Location', value: 'Arabian Sea' },
                { label: 'Type', value: 'Research Vessel' },
                { label: 'Focus', value: 'Upwelling' }
            ]
        }
    ];

    const stats = [
        { icon: Award, label: 'Patent Published', value: '1', color: 'text-yellow-600' },
        { icon: BookOpen, label: 'Journal Reviewer', value: '4 Journals', color: 'text-blue-600' },
        { icon: Globe, label: 'International Talks', value: '1+', color: 'text-green-600' },
        { icon: Ship, label: 'Field Expeditions', value: '40 Days', color: 'text-cyan-600' }
    ];

    return (
        <section className="py-24 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
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
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                            Professional Achievements
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Recognitions, innovations, and contributions to research and scientific community
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center border border-gray-100 dark:border-gray-700"
                        >
                            <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-300">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {achievements.map((achievement, index) => {
                        const Icon = achievement.icon;

                        return (
                            <motion.div
                                key={achievement.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                onClick={() => setSelectedAchievement(achievement)}
                                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-gray-100 dark:border-gray-700 overflow-hidden"
                            >
                                {/* Header with gradient */}
                                <div className={`h-2 bg-gradient-to-r ${achievement.color}`} />

                                <div className="p-6">
                                    {/* Icon and Badge */}
                                    <div className="flex items-start justify-between mb-4">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className={`p-3 bg-gradient-to-r ${achievement.color} rounded-xl shadow-lg`}
                                        >
                                            <Icon size={24} className="text-white" />
                                        </motion.div>
                                        {achievement.featured && (
                                            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded-full text-xs font-medium">
                                                Featured
                                            </span>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {achievement.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                        {achievement.description}
                                    </p>

                                    {/* Metrics */}
                                    {achievement.metrics && (
                                        <div className="grid grid-cols-3 gap-2 mb-4">
                                            {achievement.metrics.map((metric, idx) => (
                                                <div key={idx} className="text-center p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 truncate">
                                                        {metric.value}
                                                    </div>
                                                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                                        {metric.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                            <Calendar size={14} />
                                            <span>{achievement.year}</span>
                                        </div>
                                        <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Achievement Modal */}
                <AnimatePresence>
                    {selectedAchievement && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedAchievement(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                                transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Modal Header with gradient */}
                                <div className={`h-2 bg-gradient-to-r ${selectedAchievement.color}`} />

                                <div className="p-8">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <motion.div
                                                whileHover={{ rotate: 360 }}
                                                transition={{ duration: 0.6 }}
                                                className={`p-3 bg-gradient-to-r ${selectedAchievement.color} rounded-xl shadow-lg`}
                                            >
                                                {React.createElement(selectedAchievement.icon, {
                                                    size: 28,
                                                    className: 'text-white'
                                                })}
                                            </motion.div>
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                                    {selectedAchievement.title}
                                                </h3>
                                                <div className="flex items-center gap-3 flex-wrap">
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                                        {selectedAchievement.year}
                                                    </span>
                                                    {selectedAchievement.location && (
                                                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                                                            <MapPin size={14} />
                                                            {selectedAchievement.location}
                                                        </div>
                                                    )}
                                                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium">
                                                        {selectedAchievement.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.1, rotate: 90 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setSelectedAchievement(null)}
                                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                        >
                                            <X size={24} className="text-gray-600 dark:text-gray-300" />
                                        </motion.button>
                                    </div>

                                    {/* Description */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="mb-6"
                                    >
                                        <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                                            Details
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            {selectedAchievement.longDescription}
                                        </p>
                                    </motion.div>

                                    {/* Special Fields */}
                                    {selectedAchievement.patentNumber && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800"
                                        >
                                            <h5 className="font-semibold mb-2 text-gray-900 dark:text-white">Patent Information</h5>
                                            <p className="text-gray-700 dark:text-gray-300">
                                                <span className="font-medium">Application No.:</span> {selectedAchievement.patentNumber}
                                            </p>
                                        </motion.div>
                                    )}

                                    {selectedAchievement.journals && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="mb-6"
                                        >
                                            <h5 className="font-semibold mb-3 text-gray-900 dark:text-white">Review Journals</h5>
                                            <div className="grid gap-2">
                                                {selectedAchievement.journals.map((journal, idx) => (
                                                    <div key={idx} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                                        <BookOpen size={16} className="text-blue-600 dark:text-blue-400" />
                                                        <span>{journal}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* Metrics */}
                                    {selectedAchievement.metrics && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="grid grid-cols-3 gap-4"
                                        >
                                            {selectedAchievement.metrics.map((metric, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl"
                                                >
                                                    <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                                                        {metric.value}
                                                    </div>
                                                    <div className="text-sm text-gray-600 dark:text-gray-300">
                                                        {metric.label}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-20"
                >
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Research Collaboration
                        </h3>
                        <p className="text-blue-100 mb-6 text-lg">
                            Open to discussing research collaborations, academic opportunities, and exchanges in microbial biogeochemistry, environmental microbiology, and related fields.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="mailto:kumar.swatantar2020@gmail.com"
                                className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
                            >
                                <Mail size={20} />
                                <span>Start a Conversation</span>
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="https://orcid.org/0000-0002-9057-9911"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-white/10"
                            >
                                <ExternalLink size={20} />
                                <span>View Publications</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
