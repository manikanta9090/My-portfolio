'use client';

import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section id="resume" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-24"
      >
        <h2 className="font-grotesk text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          Resumes
        </h2>
        <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto">
          Download my detailed resumes for full stack and blockchain roles
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center items-center"
      >
        <a
          href="/fullstack-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-base px-5 py-2.5 font-medium"
        >
          Full Stack Resume
        </a>

        <a
          href="/blockchain-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-base px-5 py-2.5 font-medium"
        >
          Blockchain Resume
        </a>
      </motion.div>
    </section>
  );
}