'use client';

import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center items-center gap-8 px-6 max-w-6xl mx-auto">
      <motion.div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-grotesk text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-6 leading-tight"
        >
          Manikanta Juttu
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-text/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Full Stack Developer | Blockchain Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center items-center max-w-3xl mx-auto"
        >
          <a href="#projects" className="btn-primary px-8 py-4 text-lg">
            View Projects
          </a>
          <a
            href="https://github.com/manikanta9090"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2 px-8 py-4 text-lg"
          >
            <FiGithub />
            GitHub
          </a>
          <a
            href="/fullstack-resume.pdf"
            target="_blank"
            className="btn-secondary flex items-center gap-2 px-8 py-4 text-lg"
          >
            Full Stack Resume
          </a>
          <a
            href="/blockchain-resume.pdf"
            target="_blank"
            className="btn-secondary flex items-center gap-2 px-8 py-4 text-lg"
          >
            Blockchain Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
