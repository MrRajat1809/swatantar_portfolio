/**
 * UI Component System - Example Usage
 * This file demonstrates how to use the UI components together
 * Copy and adapt these patterns for your sections
 */

import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  GlassCard,
  Button,
  ButtonGroup,
  Tag,
  TagGroup,
  StatusBadge,
} from './index';

/**
 * Example 1: Research Project Card
 * Perfect for showcasing research projects or publications
 */
export function ResearchProjectCard() {
  return (
    <Card hover={true} accentColor="#00AEEF" accentCorner={true}>
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <CardTitle>Protein Folding Prediction using Deep Learning</CardTitle>
          <StatusBadge status="active">Active</StatusBadge>
        </div>
        <CardDescription>
          Investigating novel approaches to predict 3D protein structures using
          transformer-based neural networks and molecular dynamics simulations.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <TagGroup>
          <Tag category="research">Machine Learning</Tag>
          <Tag category="research">Computational Biology</Tag>
          <Tag category="development">Python</Tag>
          <Tag category="analytical">Data Analysis</Tag>
        </TagGroup>

        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-gray">Published</span>
            <span className="text-navy font-medium">Nature Biotechnology</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-gray">Impact Factor</span>
            <span className="text-navy font-medium">8.5</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <ButtonGroup>
          <Button variant="primary" href="#">Read Paper</Button>
          <Button variant="secondary" href="#">View Code</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

/**
 * Example 2: Skills Grid
 * Display technical skills organized by category
 */
export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Research Skills */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-navy mb-4 tracking-scientific">
          Research & Analysis
        </h3>
        <TagGroup>
          <Tag category="research">Machine Learning</Tag>
          <Tag category="research">Deep Learning</Tag>
          <Tag category="analytical">Statistics</Tag>
          <Tag category="analytical">Data Mining</Tag>
          <Tag category="research">Bioinformatics</Tag>
        </TagGroup>
      </GlassCard>

      {/* Development Skills */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-navy mb-4 tracking-scientific">
          Development
        </h3>
        <TagGroup>
          <Tag category="development">Python</Tag>
          <Tag category="development">React</Tag>
          <Tag category="development">TensorFlow</Tag>
          <Tag category="development">PyTorch</Tag>
          <Tag category="development">Node.js</Tag>
        </TagGroup>
      </GlassCard>

      {/* Tools & Methods */}
      <GlassCard className="p-6">
        <h3 className="text-lg font-semibold text-navy mb-4 tracking-scientific">
          Tools & Methods
        </h3>
        <TagGroup>
          <Tag category="analytical">Statistical Modeling</Tag>
          <Tag category="development">Git</Tag>
          <Tag category="analytical">Data Visualization</Tag>
          <Tag category="development">Docker</Tag>
          <Tag category="research">Research Design</Tag>
        </TagGroup>
      </GlassCard>
    </div>
  );
}

/**
 * Example 3: Project Grid
 * Three-column grid of project cards
 */
export function ProjectsGrid() {
  const projects = [
    {
      title: 'AlphaFold Implementation',
      description: 'Custom implementation of protein structure prediction',
      tags: ['Machine Learning', 'Bioinformatics', 'Python'],
      status: 'active',
      color: '#00AEEF',
    },
    {
      title: 'RNA Sequence Analysis Pipeline',
      description: 'Automated pipeline for RNA-seq data processing',
      tags: ['Bioinformatics', 'Data Analysis', 'R'],
      status: 'pending',
      color: '#007CB8',
    },
    {
      title: 'Molecular Dynamics Simulator',
      description: 'GPU-accelerated molecular dynamics simulation framework',
      tags: ['CUDA', 'C++', 'Scientific Computing'],
      status: 'inactive',
      color: '#9BE2EB',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card key={index} hover={true} accentColor={project.color}>
          <CardHeader>
            <div className="flex items-start justify-between mb-2">
              <CardTitle>{project.title}</CardTitle>
              <StatusBadge status={project.status}>
                {project.status}
              </StatusBadge>
            </div>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>

          <CardContent>
            <TagGroup>
              {project.tags.map((tag, i) => (
                <Tag key={i} category="development">{tag}</Tag>
              ))}
            </TagGroup>
          </CardContent>

          <CardFooter>
            <Button variant="secondary" className="w-full">
              View Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

/**
 * Example 4: Hero Section with Glass Card
 * Landing section with call-to-action
 */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Optional: Background cubes component here */}

      <GlassCard className="max-w-4xl mx-auto p-8 md:p-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-navy mb-4 tracking-scientific">
          Research at the Frontier of Biology & AI
        </h1>

        <p className="text-lg text-slate-gray mb-6 max-w-2xl mx-auto tracking-wide leading-relaxed">
          Exploring computational approaches to solve complex biological problems
          through machine learning, data analysis, and innovative research methodologies.
        </p>

        <TagGroup className="justify-center mb-8">
          <Tag category="research">Computational Biology</Tag>
          <Tag category="research">Machine Learning</Tag>
          <Tag category="analytical">Data Science</Tag>
        </TagGroup>

        <ButtonGroup className="justify-center">
          <Button variant="primary" href="#research">
            View Research
          </Button>
          <Button variant="secondary" href="#contact">
            Get in Touch
          </Button>
        </ButtonGroup>
      </GlassCard>
    </section>
  );
}

/**
 * Example 5: Achievement Card with Stats
 * Showcase achievements with metrics
 */
export function AchievementCard() {
  return (
    <Card hover={true} accentColor="#00AEEF" accentCorner={true}>
      <CardHeader>
        <CardTitle>Best Paper Award</CardTitle>
        <CardDescription>
          International Conference on Machine Learning (ICML 2024)
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#00AEEF] mb-1">120+</div>
            <div className="text-xs text-slate-gray tracking-scientific">Citations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#00AEEF] mb-1">15</div>
            <div className="text-xs text-slate-gray tracking-scientific">Collaborators</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#00AEEF] mb-1">8.5</div>
            <div className="text-xs text-slate-gray tracking-scientific">Impact Factor</div>
          </div>
        </div>

        <TagGroup>
          <Tag category="research">Deep Learning</Tag>
          <Tag category="analytical">Protein Folding</Tag>
        </TagGroup>
      </CardContent>

      <CardFooter>
        <Button variant="primary" className="w-full">
          Read Publication
        </Button>
      </CardFooter>
    </Card>
  );
}

/**
 * Example 6: Contact Section with Glass Card
 */
export function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <GlassCard className="p-8">
          <h2 className="text-3xl font-bold text-navy mb-4 tracking-scientific">
            Let&apos;s Collaborate
          </h2>
          <p className="text-slate-gray mb-6 tracking-wide leading-relaxed">
            Interested in discussing research opportunities, collaborations, or
            potential projects? I&apos;d love to hear from you.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <span className="text-deep-blue font-medium">Email:</span>
              <span className="text-slate-gray">your.email@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <span className="text-deep-blue font-medium">Location:</span>
              <span className="text-slate-gray">San Francisco, CA</span>
            </div>
          </div>

          <ButtonGroup>
            <Button variant="primary" href="mailto:your.email@example.com">
              Send Email
            </Button>
            <Button variant="secondary" href="https://linkedin.com">
              LinkedIn
            </Button>
            <Button variant="secondary" href="https://github.com">
              GitHub
            </Button>
          </ButtonGroup>
        </GlassCard>
      </div>
    </section>
  );
}

/**
 * Usage Tips:
 *
 * 1. Import components from '@/components/ui'
 * 2. Combine components to create complex layouts
 * 3. Use accentColor prop to differentiate card types
 * 4. Apply category tags to organize content semantically
 * 5. Leverage GlassCard for overlay content
 * 6. Use ButtonGroup to maintain consistent spacing
 */
