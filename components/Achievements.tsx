'use client';

import { motion } from 'framer-motion';
import { BsStarFill } from 'react-icons/bs';
import { achievements } from '@/data/achievements';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-24"
      >
        <h2 className="font-grotesk text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          Achievements
        </h2>
        <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto">
          Hackathons, workshops, and recognition in blockchain & web3
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="card max-w-xl mx-auto p-10 text-center group"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
              className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300"
            >
              <BsStarFill className="text-3xl text-white drop-shadow-lg" />
            </motion.div>
            <p className="text-lg md:text-xl font-semibold text-text group-hover:text-primary transition-colors duration-300">
              {achievement}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
