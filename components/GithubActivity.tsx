'use client';

import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';

export default function GithubActivity() {
  return (
    <section id="github" className="py-14 max-w-5xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          GitHub Activity
        </h2>
        <p className="text-xl text-text/80 max-w-2xl mx-auto">
          My contribution graph on GitHub
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <GitHubCalendar
          username="manikanta9090"
          blockSize={12}
          blockMargin={4}
          fontSize={14}
          colorScheme="dark"
        />

      </motion.div>
    </section>
  );
}

