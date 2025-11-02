'use client';

import { motion } from 'framer-motion';
import {
    Brain,
    Code,
    GraduationCap,
    Target,
    Award,
    BookOpen,
    Download,
    ExternalLink,
    Network
} from 'lucide-react';
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from './ui/Card';
import Button from './ui/Button';
import Tag, { TagGroup } from './ui/Tag';

export default function AboutSection() {
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

    const skills = [
        {
            category: "Analytical Techniques",
            icon: Code,
            items: ["IRMS-GC", "FTICR-MS", "NMR", "UV-Spectrophotometry", "qPCR/RT-qPCR", "Radioactive Isotope Techniques"],
            color: "from-blue-500 to-blue-600"
        },
        {
            category: "Microbiology & Biogeochemistry",
            icon: Brain,
            items: ["Anammox Research", "Denitrification", "Sulfate Reduction", "Chemolithoautotrophy", "Enrichment Cultures", "Functional Assays"],
            color: "from-purple-500 to-purple-600"
        },
        {
            category: "Molecular Biology",
            icon: BookOpen,
            items: ["DNA/RNA Sequencing", "Microbial Diversity Analysis", "15N Stable Isotope Tracing", "Metabolomics", "Optodes-Based Analysis", "Spatial-Temporal Resolution"],
            color: "from-green-500 to-green-600"
        },
        {
            category: "Data Analysis & Research",
            icon: Network,
            items: ["Biogeochemical Modeling", "Hyporheic Zone Studies", "Rhizosphere Chemistry", "Priming Effects", "Pyrogenic Organic Matter", "Stoichiometric Regulation"],
            color: "from-orange-500 to-orange-600"
        }
    ];

    const achievements = [
        {
            title: "PhD (Dr. rer. nat.)",
            description: "Max Planck Graduate Research Fellow",
            icon: Award,
            color: "text-yellow-600"
        },
        {
            title: "10+ Publications",
            description: "Peer-Reviewed Research Articles",
            icon: BookOpen,
            color: "text-green-600"
        },
        {
            title: "International Experience",
            description: "Germany (PhD) & USA (Postdoc)",
            icon: Target,
            color: "text-blue-600"
        }
    ];

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
                            About Me
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Exploring microbial nitrogen cycling and biogeochemical processes in pristine ecosystems
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Story */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                Research Background
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Currently serving as Assistant Professor at Chandigarh University with extensive international research
                                experience in microbial biogeochemistry. Completed PhD at Friedrich Schiller University, Germany (2014-2018)
                                as a Max Planck Graduate Research Fellow, focusing on microbial nitrogen cycle processes in pristine
                                carbonate-rock aquifers. Doctoral research demonstrated that chemolithoautotrophic anammox processes
                                are the primary drivers of nitrogen loss in oligotrophic groundwater systems—a significant contribution
                                to understanding subsurface microbial ecology.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Postdoctoral research at Pacific Northwest National Laboratory, USA (2018-2020) investigated
                                microbial-root interactions in rhizosphere chemistry, priming effects in hyporheic zones, and
                                biogeochemistry of pyrogenic organic matter in freshwater ecosystems. Research employs advanced
                                analytical techniques including stable isotope tracing (<sup>13</sup>C, <sup>15</sup>N), ultrahigh-resolution
                                metabolomics (FTICR-MS, NMR), and next-generation sequencing to elucidate microbial processes across
                                spatial scales from micrometers to ecosystems.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h4 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                                Research Focus & Interests
                            </h4>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Research interests center on understanding key microbial players and biogeochemical processes in nitrogen
                                cycling, with particular emphasis on anammox bacteria and denitrifiers in pristine ecosystems. Currently
                                exploring rhizosphere biogeochemistry, stoichiometric regulation of priming effects, and interfaces between
                                microbial activity and biogeochemical transformations. Active research includes biotechnology applications
                                of microbial processes, innovation in environmental microbiology education, and mentorship of graduate students
                                in biotechnology and environmental sciences.
                            </p>
                        </motion.div>

                        {/* Achievements */}
                        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                            {achievements.map((achievement, index) => (
                                <Card key={index} hover={true} className="text-center">
                                    <CardContent className="py-6 px-3">
                                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                                            <achievement.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${achievement.color} mx-auto mb-2`} />
                                        </motion.div>
                                        <h5 className="text-sm sm:text-base font-bold text-navy mb-1 tracking-scientific break-words">
                                            {achievement.title}
                                        </h5>
                                        <p className="text-xs sm:text-sm text-slate-gray break-words">
                                            {achievement.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Skills & Education */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Education */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                                Education
                            </h3>
                            <div className="space-y-4">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl"
                                        >
                                            <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                        </motion.div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                                Doctor of Philosophy (Dr. rer. nat.)
                                            </h4>
                                            <p className="text-blue-600 dark:text-blue-400 font-medium">
                                                Friedrich Schiller University, Jena, Germany
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-gray-600 dark:text-gray-300">
                                            <span className="font-semibold">Research Focus:</span> Microbial Nitrogen Cycle in Subsurface Ecosystems
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            <span className="font-semibold">Fellowship:</span> Max Planck Graduate Research Fellow (IMPRS-gBGC)
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            <span className="font-semibold">Period:</span> 2014 – 2018
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <motion.div
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                            className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl"
                                        >
                                            <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                                        </motion.div>
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                                                Master of Technology (Biotechnology)
                                            </h4>
                                            <p className="text-purple-600 dark:text-purple-400 font-medium">
                                                M.M. University, Ambala, India
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-gray-600 dark:text-gray-300">
                                            <span className="font-semibold">Research Focus:</span> Sulfate-Reducing Bacteria in Deep-Sea Sediments
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            <span className="font-semibold">Academic Performance:</span> CGPA 9.36/10 (First Division with Distinction)
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            <span className="font-semibold">Period:</span> 2009 – 2011
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Skills */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-3xl font-bold mb-6 text-navy tracking-scientific">
                                Technical Skills
                            </h3>
                            <div className="space-y-4">
                                {skills.map((skillGroup, index) => (
                                    <Card key={index} hover={true} accentColor="#00AEEF">
                                        <CardContent className="p-4 sm:p-6">
                                            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                                                <motion.div
                                                    whileHover={{ rotate: 360 }}
                                                    transition={{ duration: 0.6 }}
                                                    className={`p-2 bg-gradient-to-r ${skillGroup.color} rounded-lg flex-shrink-0`}
                                                >
                                                    <skillGroup.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                                </motion.div>
                                                <h4 className="text-base sm:text-lg font-semibold text-navy tracking-scientific break-words">
                                                    {skillGroup.category}
                                                </h4>
                                            </div>
                                            <TagGroup>
                                                {skillGroup.items.map((skill, skillIndex) => (
                                                    <motion.div
                                                        key={skill}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: skillIndex * 0.05 }}
                                                    >
                                                        <Tag category="analytical">
                                                            {skill}
                                                        </Tag>
                                                    </motion.div>
                                                ))}
                                            </TagGroup>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div variants={itemVariants} className="pt-6">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    variant="primary"
                                    href="/swatantar_portfolio/resume.pdf"
                                    className="inline-flex items-center gap-3"
                                >
                                    <Download size={20} />
                                    <span>Download Full CV</span>
                                    <ExternalLink size={16} />
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}