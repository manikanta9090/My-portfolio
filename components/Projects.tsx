'use client';

import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { projects } from '@/data/projects';
import Link from 'next/link';

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-24"
      >
        <h2 className="font-grotesk text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          Projects
        </h2>
        <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto">
          Handpicked projects showcasing full stack and blockchain expertise
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 [&:nth-child(4)]:col-span-1 [&:nth-child(4)]:md:col-span-2 [&:nth-child(4)]:lg:col-span-1 [&:nth-child(4)]:mx-auto lg:[&:nth-child(4)]:col-start-2">
        {projects.map((project, index) => (
          <motion.a
            key={project.name}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="card overflow-hidden group"
          >
            <div className="p-8 h-full">
              <h3 className="font-grotesk text-2xl md:text-3xl font-bold text-text mb-4 group-hover:text-primary transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-text/80 mb-6 leading-relaxed text-lg">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-card/50 px-4 py-2 rounded-full text-sm md:text-base font-medium border border-card/50">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-primary group-hover:text-secondary transition-colors duration-300 font-semibold text-lg">
                <FiGithub />
                {project.github.split('/').pop()}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
