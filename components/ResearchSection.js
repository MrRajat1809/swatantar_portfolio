'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    BookOpen,
    ExternalLink,
    Calendar,
    Users,
    TrendingUp,
    Microscope,
    Brain,
    Database,
    Award,
    FileText,
    ChevronRight,
    Quote,
    X,
    Network
} from 'lucide-react';

export default function ResearchSection() {
    const [selectedPublication, setSelectedPublication] = useState(null);

    const researchAreas = [
        {
            id: 'nitrogen-cycle',
            title: 'Microbial Nitrogen Cycling in Groundwater',
            description: 'Investigation of key microbial players and processes driving nitrogen loss in pristine carbonate-rock aquifers, with emphasis on chemolithoautotrophic anammox and denitrification processes. Work includes stable isotope tracing and molecular characterization of microbial communities.',
            icon: Microscope,
            color: 'from-blue-500 to-blue-600',
            publications: 3,
            keywords: ['Anammox', 'Denitrification', 'Groundwater', '15N Isotope Tracing', 'Chemolithoautotrophy']
        },
        {
            id: 'rhizosphere-biogeochemistry',
            title: 'Rhizosphere Chemistry & Priming Effects',
            description: 'Spatial-temporal investigation of microbial and root activity interactions modifying rhizosphere chemistry, including phosphorus availability and photosynthate carbon dynamics. Studies on stoichiometric regulation of priming effects in hyporheic zones.',
            icon: Network,
            color: 'from-purple-500 to-purple-600',
            publications: 4,
            keywords: ['Rhizosphere', 'Priming Effects', 'Phosphatase Activity', '13C Labeling', 'FTICR-MS']
        },
        {
            id: 'environmental-microbiology',
            title: 'Environmental Microbiology & Biogeochemistry',
            description: 'Biogeochemistry of pyrogenic and non-pyrogenic terrestrial organic matter in freshwater sediments, sulfur cycling in oxygen minimum zones, and microbial interactions in groundwater ecosystems. Work on lead toxicity mitigation in plants and global river metabolomics.',
            icon: Database,
            color: 'from-green-500 to-green-600',
            publications: 7,
            keywords: ['Pyrogenic OM', 'Sulfur Cycling', 'Metabolomics', 'Microbial Interactions', 'Plant Stress']
        }
    ];

    const publications = [
        // Key Publications - Published
        {
            id: 'anammox-2017',
            title: 'Nitrogen loss from pristine carbonate-rock aquifers of the Hainich Critical Zone Exploratory (Germany) is primarily driven by chemolithoautotrophic anammox processes',
            authors: ['Kumar S.', 'Herrmann M.', 'Thamdrup B.', 'Schwab V.F.', 'Geesink P.', 'Trumbore S.', 'Totsche K-U.', 'Küsel K.'],
            journal: 'Frontiers in Microbiology',
            year: '2017',
            status: 'published',
            doi: '10.3389/fmicb.2017.01951',
            abstract: 'This study investigated nitrogen loss mechanisms in pristine carbonate-rock aquifers of the Hainich Critical Zone Exploratory in Germany. Using stable isotope techniques (15N) and molecular analysis, we demonstrated that chemolithoautotrophic anammox processes are the primary drivers of nitrogen loss in these oligotrophic groundwater systems. DNA and RNA sequencing revealed diverse anammox bacterial communities, and functional gene analysis through qPCR confirmed their active role in the nitrogen cycle.',
            impact: 'High',
            technologies: ['15N Isotope Tracing', 'DNA/RNA Sequencing', 'qPCR', 'IRMS-GC', 'Anammox Enrichment'],
            type: 'published',
            metrics: [
                { label: 'Citations', value: '50+' },
                { label: 'Impact Factor', value: '4.2' },
                { label: 'Study Duration', value: '3 Years' },
                { label: 'Aquifer Depth', value: '50m+' }
            ]
        },
        {
            id: 'denitrification-2018',
            title: 'Thiosulfate- and hydrogen-driven autotrophic denitrification by a microbial consortium enriched from groundwater of an oligotrophic limestone aquifer',
            authors: ['Kumar S.', 'Herrmann M.', 'Düver A.', 'Hilke I.', 'Frosch T.', 'Totsche K-U.', 'Küsel K.'],
            journal: 'FEMS Microbiology Ecology',
            year: '2018',
            status: 'published',
            doi: '10.1093/femsec/fiy141',
            abstract: 'We successfully enriched and characterized a microbial consortium capable of autotrophic denitrification using thiosulfate and hydrogen as electron donors from oligotrophic limestone aquifer groundwater. Using Raman gas spectroscopy and functional assays, we elucidated the activity and electron donor preferences of denitrifying bacterial strains.',
            impact: 'High',
            technologies: ['Enrichment Cultures', 'Raman Spectroscopy', 'Functional Assays', 'Anaerobic Techniques'],
            type: 'published',
            metrics: [
                { label: 'Citations', value: '35+' },
                { label: 'Novel Consortium', value: 'Yes' },
                { label: 'Enrichment Time', value: '12 Months' },
                { label: 'Journal Rank', value: 'Q1' }
            ]
        },
        {
            id: 'forest-disturbances-2019',
            title: 'Multiple, compounding disturbances in a forest ecosystem: Fire increase susceptibility of soil edaphic properties, Bacterial Community structure, and function to change with extreme precipitation event',
            authors: ['Knelman J.E.', 'Schmidt S.K.', 'Garayburu-Caruso V.A.', 'Kumar S.', 'Graham E.B.'],
            journal: 'Soil Systems',
            year: '2019',
            status: 'published',
            doi: '10.3390/soilsystems3020040',
            abstract: 'This study examined how multiple environmental disturbances affect forest soil ecosystems. We investigated how fire increases the susceptibility of soil properties, bacterial community structure, and ecosystem function to subsequent changes from extreme precipitation events.',
            impact: 'High',
            technologies: ['Soil Microbiology', 'Community Analysis', 'Ecosystem Function', 'Disturbance Ecology'],
            type: 'published',
            metrics: [
                { label: 'Disturbance Types', value: '2' },
                { label: 'Study Sites', value: 'Multiple' },
                { label: 'Ecosystem Impact', value: 'High' },
                { label: 'Citations', value: '25+' }
            ]
        },
        {
            id: 'groundwater-bacteria-2018',
            title: 'Growth promotion and Inhibition induced by interactions of groundwater bacteria',
            authors: ['Geesink P.', 'Tyc O.', 'Küsel K.', 'Taubert M.', 'van de Velde C.', 'Kumar S.', 'Garbeva P.'],
            journal: 'FEMS Microbiology Ecology',
            year: '2018',
            status: 'published',
            doi: '10.1093/femsec/fiy164',
            abstract: 'This research investigated the complex interactions between groundwater bacteria, revealing both growth promotion and inhibition mechanisms. The study provides insights into microbial community dynamics in oligotrophic groundwater ecosystems.',
            impact: 'Medium',
            technologies: ['Co-culture Studies', 'Growth Assays', 'Microbial Interactions', 'Groundwater Microbiology'],
            type: 'published',
            metrics: [
                { label: 'Bacterial Strains', value: '15+' },
                { label: 'Interaction Types', value: 'Multiple' },
                { label: 'Journal Impact', value: '4.0' },
                { label: 'Citations', value: '20+' }
            ]
        },
        {
            id: 'sulfur-upwelling-2019',
            title: 'Spatio-temporal variations in sulfur-oxidizing and sulfate-reducing bacterial activities during upwelling, off south-west coast of India',
            authors: ['SamKamaleson A.', 'Gonsalves M.J.B.D.', 'Kumar S.', 'Lokabharathi P.A.'],
            journal: 'Oceanologia',
            year: '2019',
            status: 'published',
            doi: '10.1016/j.oceano.2019.03.00',
            abstract: 'This study examined spatio-temporal variations in sulfur-oxidizing and sulfate-reducing bacterial activities during upwelling events off the south-west coast of India. The research provides insights into microbial sulfur cycling dynamics in coastal marine environments.',
            impact: 'Medium',
            technologies: ['35SO4 Radiotracer', 'Marine Microbiology', 'Biogeochemistry', 'Sulfur Cycling'],
            type: 'published',
            metrics: [
                { label: 'Study Duration', value: '40 Days' },
                { label: 'Sampling Sites', value: 'Multiple' },
                { label: 'Marine Environment', value: 'Arabian Sea' },
                { label: 'Research Vessel', value: 'Yes' }
            ]
        },
        {
            id: 'river-metabolomes-2020',
            title: 'Using community science to reveal the global chemogeography of river metabolomes',
            authors: ['Garayburu-Caruso V.', 'Danczak R.E.', 'Stegen J.', 'Renteria L.', 'McCall M.', 'Goldman A.E.', 'Chu R.K.', 'Toyoda J.', 'Resch T.C.', 'Joshua T.M.', 'Wells J.', 'Fansler S.', 'Kumar S.', 'Graham E.'],
            journal: 'Metabolites',
            year: '2020',
            status: 'published',
            doi: '10.3390/metabo10120518',
            abstract: 'This collaborative community science project revealed the global chemogeography of river metabolomes. Using ultrahigh-resolution metabolomics, we characterized organic matter composition across diverse river systems worldwide.',
            impact: 'High',
            technologies: ['FTICR-MS', 'Metabolomics', 'Community Science', 'Global Sampling', 'Data Analysis'],
            type: 'published',
            metrics: [
                { label: 'River Systems', value: 'Global' },
                { label: 'Metabolites', value: '1000+' },
                { label: 'Collaboration', value: 'Multi-Institutional' },
                { label: 'Citations', value: '30+' }
            ]
        },
        {
            id: 'colloid-carbon-2020',
            title: 'Dispersible colloid facilitated release of organic carbon from two contrasting riparian sediments',
            authors: ['Alan Rod K.', 'Patel K.F.', 'Kumar S.', 'Cantando E.', 'Leng W.', 'Kukkadapu R.K.', 'Qafoku O.', 'Bowden M.', 'Kaplan D.I.', 'Kemner K.M.'],
            journal: 'Frontiers in Water',
            year: '2020',
            status: 'published',
            doi: '10.3389/frwa.2020.560707',
            abstract: 'This study investigated how dispersible colloids facilitate the release of organic carbon from riparian sediments. Using advanced analytical techniques, we characterized the mechanisms of carbon release in two contrasting sediment types.',
            impact: 'Medium',
            technologies: ['Colloid Analysis', 'Carbon Characterization', 'Sediment Geochemistry', 'Spectroscopy'],
            type: 'published',
            metrics: [
                { label: 'Sediment Types', value: '2' },
                { label: 'Carbon Release', value: 'Quantified' },
                { label: 'Riparian Systems', value: 'Yes' },
                { label: 'Citations', value: '15+' }
            ]
        },
        {
            id: 'raman-spectroscopy-2021',
            title: 'Activity and electron donor preference of two denitrifying bacterial strains identified by Raman Gas Spectroscopy',
            authors: ['Blohm A.', 'Kumar S.', 'Knebl A.', 'Herrmann M.', 'Kusel K.', 'Popp J.', 'Frosch T.'],
            journal: 'Analytical and Bioanalytical Chemistry',
            year: '2021',
            status: 'published',
            doi: '10.1007/s00216-021-03541-y',
            abstract: 'This research utilized Raman gas spectroscopy to identify and characterize the activity and electron donor preferences of two denitrifying bacterial strains. The study demonstrates the power of Raman spectroscopy for real-time monitoring of microbial activity.',
            impact: 'Medium',
            technologies: ['Raman Spectroscopy', 'Gas Analysis', 'Denitrification', 'Bacterial Characterization'],
            type: 'published',
            metrics: [
                { label: 'Bacterial Strains', value: '2' },
                { label: 'Real-time Analysis', value: 'Yes' },
                { label: 'Novel Method', value: 'Yes' },
                { label: 'Citations', value: '10+' }
            ]
        },
        {
            id: 'pb-toxicity-2023',
            title: 'Assessing the mitigation of Pb toxicity by the synergistic application of Oxalic acid and salicylic acid on maize plants for a duration of 15, 30 and 45 days',
            authors: ['Gupta M.', 'Kumar S.', 'Mishra R.K.', 'Srivastava V.', 'Dwivedi V.'],
            journal: 'African Journal of Biological Sciences',
            year: '2023',
            status: 'published',
            doi: '10.33472/AFJBS.6.9.2024.3987-4003',
            abstract: 'This study assessed the synergistic effects of oxalic acid and salicylic acid in mitigating lead toxicity in maize plants over different time periods. The research provides insights into plant stress responses and potential remediation strategies.',
            impact: 'Medium',
            technologies: ['Plant Physiology', 'Heavy Metal Stress', 'Biochemical Assays', 'Time-series Analysis'],
            type: 'published',
            metrics: [
                { label: 'Study Duration', value: '45 Days' },
                { label: 'Treatment Types', value: '2' },
                { label: 'Time Points', value: '3' },
                { label: 'Plant Species', value: 'Maize' }
            ]
        },
        {
            id: 'pb-toxicity-mechanisms-2024',
            title: 'Lead toxicity in plants: mechanistic insights into toxicity, physiological responses of plants and mitigation strategies',
            authors: ['Gupta M.', 'Dwivedi V.', 'Kumar S.', 'Patel A.', 'Niazi P.', 'Yadav V.K.'],
            journal: 'Plant Signaling & Behavior',
            year: '2024',
            status: 'published',
            doi: '10.1080/15592324.2024.2365576',
            abstract: 'This comprehensive review examines the mechanistic insights into lead toxicity in plants, including physiological responses and potential mitigation strategies. The work provides a detailed overview of current understanding and future directions in plant stress research.',
            impact: 'High',
            technologies: ['Plant Physiology', 'Toxicity Mechanisms', 'Stress Response', 'Review Article'],
            type: 'published',
            metrics: [
                { label: 'Review Type', value: 'Comprehensive' },
                { label: 'Topics Covered', value: 'Multiple' },
                { label: 'Citations', value: '5+' },
                { label: 'Year', value: '2024' }
            ]
        },
        {
            id: 'amino-acids-pb-2024',
            title: 'Selective synergistic effects of oxalic acid and salicylic acid in enhancing amino acid levels and alleviating lead stress in Zea mays L.',
            authors: ['Gupta M.', 'Kumar S.', 'Dwivedi V.', 'Gupta D.G.', 'Ali D.', 'Alarifi S.', 'Yadav V.K.'],
            journal: 'Plant Signaling & Behavior',
            year: '2024',
            status: 'published',
            doi: '10.1080/15592324.2024.2400451',
            abstract: 'This research investigated the selective synergistic effects of oxalic acid and salicylic acid on amino acid levels and lead stress alleviation in maize. The study provides mechanistic insights into how these compounds enhance plant stress tolerance.',
            impact: 'Medium',
            technologies: ['Amino Acid Analysis', 'Plant Biochemistry', 'Stress Mitigation', 'Zea mays'],
            type: 'published',
            metrics: [
                { label: 'Amino Acids', value: 'Multiple' },
                { label: 'Synergistic Effect', value: 'Yes' },
                { label: 'Plant Type', value: 'Maize' },
                { label: 'Year', value: '2024' }
            ]
        },

        // Publications in Preparation/Submission
        {
            id: 'phosphatase-activity',
            title: 'Elucidating distribution of microbial- and root-derived phosphatase activities in the rhizosphere depending upon availability of organic/inorganic form of P and allocation of C as root exudates',
            authors: ['Kumar S.', 'Cleary D.M.', 'Lin V.', 'Huggett N.L.', 'McGrady M.', 'Moran J.'],
            journal: 'In Preparation',
            year: '2024',
            status: 'in-preparation',
            doi: '',
            abstract: 'Investigated spatial-temporal resolution of microbial and root activity in modifying rhizosphere chemistry, specifically examining orthophosphate availability and fresh photosynthate carbon allocation. Employed root-blotting techniques for non-destructive analysis of phosphatase activity distribution, UV-spectrophotometry for porewater analysis, and 13CO2 stable isotope incubations to quantify organic matter rhizodeposition in response to different phosphorus resources.',
            impact: 'High',
            technologies: ['Root Blotting', 'UV-Spectrophotometry', '13CO2 Labeling', 'IRMS', 'Phosphatase Assays'],
            type: 'in-preparation',
            metrics: [
                { label: 'P Forms', value: 'Organic/Inorganic' },
                { label: 'Analysis Type', value: 'Non-destructive' },
                { label: 'Isotope', value: '13CO2' },
                { label: 'Scale', value: 'Micrometre-Millimetre' }
            ]
        },
        {
            id: 'priming-effects',
            title: 'Investigating stoichiometric regulation of priming effects in the hyporheic zone',
            authors: ['Kumar S.', 'Garayburu-Caruso V.', 'Renteria L.', 'Wells J.R.', 'Danczak R.E.', 'Chu R.K.', 'Tolic N.', 'Hoyt D.W.', 'Kim Y.M.', 'Burnet M.C.', 'Wietsma T.W.', 'Mcfarland D.P.', 'Scheibe T.D.', 'Stegen J.', 'Graham E.'],
            journal: 'In Preparation',
            year: '2024',
            status: 'in-preparation',
            doi: '',
            abstract: 'This study investigates the stoichiometric regulation of priming effects in hyporheic zone sediments using ultrahigh-resolution metabolomics (FTICR-MS and NMR). We employed optodes for non-invasive quantification of aerobic respiration in batch reactors and analyzed sediment extracts to understand how microbial activity responds to organic matter inputs.',
            impact: 'High',
            technologies: ['FTICR-MS', 'NMR', 'Optodes', 'Metabolomics', 'Biogeochemical Analysis'],
            type: 'in-preparation',
            metrics: [
                { label: 'Sediment Samples', value: '100+' },
                { label: 'Metabolites Analyzed', value: '1000+' },
                { label: 'Study Sites', value: 'Multi-State' },
                { label: 'Collaboration', value: 'PNNL' }
            ]
        },
        {
            id: 'pyrogenic-organic-matter',
            title: 'Response of organic matter mineralization and microbial activity in typical freshwater aquatic sediments following the addition of leaf derived pyrogenic and non-pyrogenic organic matter',
            authors: ['Kumar S.', 'Garayburu-Caruso V.', 'Myers-Pigg A.', 'Sengupta A.', 'Kaufman M.H.', 'Renteria L.', 'Joshua T.M.', 'Danczak R.E.', 'Chu R.K.', 'Hoyt D.W.', 'Kim Y.M.', 'Burnet M.C.', 'Scheibe T.D.', 'Stegen J.', 'Graham E.'],
            journal: 'In Preparation',
            year: '2024',
            status: 'in-preparation',
            doi: '',
            abstract: 'This research examines the biogeochemistry of pyrogenic and non-pyrogenic terrestrial organic matter input on freshwater river sediments across the United States. Using advanced metabolomics and respiration measurements, we characterized how different types of organic matter affect microbial activity and mineralization processes.',
            impact: 'High',
            technologies: ['FTICR-MS', 'NMR', 'Optodes', 'Pyrogenic OM', 'Sediment Analysis'],
            type: 'in-preparation',
            metrics: [
                { label: 'OM Types', value: '2' },
                { label: 'Sites', value: 'US-wide' },
                { label: 'Sediments', value: 'Freshwater' },
                { label: 'Analysis', value: 'Multi-omics' }
            ]
        },
        {
            id: 'sulfate-reducing-upwelling',
            title: 'Total suspended matter drives sulfate-reducing activity in the near shore and offshore waters during upwelling in the Arabian Sea',
            authors: ['SamKamaleson A.', 'Fernandes C.E.G.', 'Gonsalves M.J.B.D.', 'Kumar S.', 'Lokabharathi P.A.'],
            journal: 'In Preparation',
            year: '2024',
            status: 'in-preparation',
            doi: '',
            abstract: 'This study investigates the relationship between total suspended matter and sulfate-reducing activity during upwelling events in the Arabian Sea. The research examines spatial variations between nearshore and offshore environments.',
            impact: 'Medium',
            technologies: ['35SO4 Radiotracer', 'Marine Biogeochemistry', 'Upwelling Analysis', 'Sulfate Reduction'],
            type: 'in-preparation',
            metrics: [
                { label: 'Study Area', value: 'Arabian Sea' },
                { label: 'Environments', value: 'Nearshore/Offshore' },
                { label: 'Process', value: 'Upwelling' },
                { label: 'Duration', value: '40 Days' }
            ]
        }
    ];

    const researchMetrics = [
        { label: 'Total Publications', value: '15', icon: BookOpen, color: 'text-blue-600' },
        { label: 'Published Papers', value: '11', icon: Award, color: 'text-green-600' },
        { label: 'In Preparation', value: '4', icon: FileText, color: 'text-purple-600' },
        { label: 'H-Index', value: '8', icon: TrendingUp, color: 'text-orange-600' }
    ];

    const getStatusConfig = (status) => {
        const configs = {
            'published': {
                label: 'Published',
                color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
            },
            'in-preparation': {
                label: 'In Preparation',
                color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300'
            },
            'submitted': {
                label: 'Under Review',
                color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
            }
        };
        return configs[status] || configs.published;
    };

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 dark:bg-blue-600/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full mb-4">
                        <Brain className="w-4 h-4" />
                        <span className="text-sm font-medium">Research Portfolio</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Scientific Contributions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
                        Exploring microbial biogeochemistry, nitrogen cycling, and ecosystem responses to environmental change
                    </p>
                </motion.div>

                {/* Research Areas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid md:grid-cols-3 gap-6 mb-16"
                >
                    {researchAreas.map((area, index) => (
                        <motion.div
                            key={area.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className={`w-12 h-12 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                                <area.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                {area.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                                {area.description}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {area.publications} Publications
                                </span>
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                            </div>
                            <div className="flex flex-wrap gap-1 mt-3">
                                {area.keywords.slice(0, 3).map((keyword) => (
                                    <span
                                        key={keyword}
                                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                                    >
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Publications List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-16"
                >
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                            Publications
                        </h3>
                        <div className="flex gap-2">
                            {['All', 'Published', 'In Preparation'].map((filter) => (
                                <button
                                    key={filter}
                                    className="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700"
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        {publications.map((pub, index) => (
                            <motion.div
                                key={pub.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ x: 10, scale: 1.01 }}
                                onClick={() => setSelectedPublication(pub)}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusConfig(pub.status).color}`}>
                                                {getStatusConfig(pub.status).label}
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {pub.year}
                                            </span>
                                            {pub.impact === 'High' && (
                                                <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded text-xs font-medium">
                                                    High Impact
                                                </span>
                                            )}
                                        </div>
                                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {pub.title}
                                        </h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                            {pub.authors.slice(0, 3).join(', ')}
                                            {pub.authors.length > 3 && ` +${pub.authors.length - 3} more`}
                                        </p>
                                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                            {pub.journal}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end gap-2">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                        </motion.button>
                                        {pub.doi && (
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                                DOI
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Research Metrics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {researchMetrics.map((metric) => (
                        <motion.div
                            key={metric.label}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center border border-gray-100 dark:border-gray-700"
                        >
                            <metric.icon className={`w-8 h-8 ${metric.color} mx-auto mb-3`} />
                            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                {metric.value}
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 text-sm">
                                {metric.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Publication Modal */}
                <AnimatePresence>
                    {selectedPublication && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedPublication(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                                transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                                className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                                {selectedPublication.title}
                                            </h3>
                                            <div className="flex items-center gap-4 mb-4 flex-wrap">
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusConfig(selectedPublication.status).color}`}>
                                                    {getStatusConfig(selectedPublication.status).label}
                                                </span>
                                                <span className="text-gray-600 dark:text-gray-300">
                                                    {selectedPublication.year} • {selectedPublication.journal}
                                                </span>
                                            </div>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.1, rotate: 90 }}
                                            onClick={() => setSelectedPublication(null)}
                                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                                        >
                                            <X size={24} />
                                        </motion.button>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Authors</h4>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {selectedPublication.authors.join(', ')}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Abstract</h4>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {selectedPublication.abstract}
                                            </p>
                                        </div>

                                        {selectedPublication.metrics && (
                                            <div>
                                                <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">Key Metrics</h4>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                    {selectedPublication.metrics.map((metric, idx) => (
                                                        <div key={idx} className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl">
                                                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                                                                {metric.value}
                                                            </div>
                                                            <div className="text-sm text-gray-600 dark:text-gray-300">
                                                                {metric.label}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <div>
                                            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Technologies Used</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedPublication.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-lg"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {selectedPublication.doi && (
                                            <motion.a
                                                whileHover={{ scale: 1.05 }}
                                                href={`https://doi.org/${selectedPublication.doi}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                                            >
                                                <ExternalLink size={20} />
                                                <span>View Publication</span>
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}