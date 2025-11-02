'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const basePath = process.env.NODE_ENV === 'production' ? '/swatantar_portfolio' : '';

/**
 * BACKGROUND CUBES COMPONENT
 *
 * Implements a clean, minimalistic scrollable background with 11 pre-rendered
 * transparent cube clusters strategically positioned across sections.
 *
 * Inspired by Isomorphic Labs - soft scientific aesthetic with:
 * - Powder blue base (#D8EAF7)
 * - Subtle gradients (lighter top, deeper bottom)
 * - 3D gradient cubes (turquoise and cyan hues)
 * - Strategic placement across Hero, About, Research, Achievements, and Contact sections
 */

const cubePositions = [
    // HERO / INTRODUCTION SECTION (0-800px approx)
    {
        id: 'bg1',
        src: `${basePath}/images/bg1.png`,
        className: 'top-[100px] left-[5%] w-[180px] md:w-[280px] opacity-50',
        rotation: 0,
        description: 'Hero top-left, slightly faded'
    },
    {
        id: 'bg2',
        src: `${basePath}/images/bg2.png`,
        className: 'top-[250px] right-[8%] w-[140px] md:w-[220px] opacity-60',
        rotation: 5,
        description: 'Hero top-right, asymmetric positioning'
    },

    // ABOUT SECTION (800-1600px approx)
    {
        id: 'bg3',
        src: `${basePath}/images/bg3.png`,
        className: 'top-[1000px] left-[3%] w-[160px] md:w-[240px] opacity-45',
        rotation: -3,
        description: 'About mid-left edge accent'
    },
    {
        id: 'bg4',
        src: `${basePath}/images/bg4.png`,
        className: 'top-[900px] right-[5%] w-[150px] md:w-[230px] opacity-50',
        rotation: 7,
        description: 'About mid-right, offset upward'
    },

    // RESEARCH SECTION (1600-2400px approx)
    {
        id: 'bg5',
        src: `${basePath}/images/bg5.png`,
        className: 'top-[2000px] right-[4%] w-[170px] md:w-[260px] opacity-55',
        rotation: 8,
        description: 'Research lower-right with rotation'
    },
    {
        id: 'bg6',
        src: `${basePath}/images/bg6.png`,
        className: 'top-[2200px] left-[6%] w-[155px] md:w-[245px] opacity-50',
        rotation: -5,
        description: 'Research bottom-left with rotation'
    },
    {
        id: 'bg7',
        src: `${basePath}/images/bg7.png`,
        className: 'top-[2100px] right-[35%] w-[145px] md:w-[235px] opacity-48',
        rotation: 10,
        description: 'Research center-right with rotation'
    },

    // ACHIEVEMENTS SECTION (2400-3200px approx)
    {
        id: 'bg8',
        src: `${basePath}/images/bg8.png`,
        className: 'top-[2800px] left-[15%] w-[160px] md:w-[250px] opacity-52',
        rotation: -7,
        description: 'Achievements section left accent'
    },
    {
        id: 'bg9',
        src: `${basePath}/images/bg9.png`,
        className: 'top-[2700px] right-[20%] w-[150px] md:w-[240px] opacity-48',
        rotation: 6,
        description: 'Achievements section right accent'
    },

    // CONTACT SECTION (3200px+ approx)
    {
        id: 'bg10',
        src: `${basePath}/images/bg10.png`,
        className: 'top-[3500px] left-[10%] w-[165px] md:w-[255px] opacity-50',
        rotation: 4,
        description: 'Contact section bottom-left'
    },
    {
        id: 'bg11',
        src: `${basePath}/images/bg11.png`,
        className: 'top-[3700px] right-[12%] w-[155px] md:w-[245px] opacity-46',
        rotation: -6,
        description: 'Contact section bottom-right'
    }
];

export default function BackgroundCubes() {
    return (
        <>
            {/* Fixed background container with powder blue gradient */}
            <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#E8F4FC] via-[#D8EAF7] to-[#C8E0F2]" />

            {/* Cube clusters container - absolute positioning within page flow, scrolls with content */}
            <div className="absolute top-0 left-0 w-full -z-5 pointer-events-none" style={{ height: '4000px' }}>
                {cubePositions.map((cube, index) => (
                    <motion.div
                        key={cube.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: cube.rotation
                        }}
                        transition={{
                            duration: 1.2,
                            delay: index * 0.15,
                            ease: [0.6, 0.05, 0.01, 0.9]
                        }}
                        className={`absolute ${cube.className} transition-all duration-700`}
                        style={{
                            transform: `rotate(${cube.rotation}deg)`,
                            filter: 'brightness(1.1) saturate(0.9)'
                        }}
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                                rotate: [cube.rotation, cube.rotation + 2, cube.rotation]
                            }}
                            transition={{
                                duration: 8 + index * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.2
                            }}
                        >
                            <Image
                                src={cube.src}
                                alt={cube.description}
                                width={300}
                                height={300}
                                className="w-full h-auto object-contain"
                                loading="lazy"
                                quality={90}
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </>
    );
}
