'use client';

import { motion } from 'framer-motion';
import { skills, type SkillCategory } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-14 max-w-5xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-grotesk text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          Skills
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Technologies I&apos;m proficient in across full stack and blockchain development
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skillCategory: SkillCategory, index) => (
          <motion.div
            key={skillCategory.category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="space-y-6"
          >
            <h3 className="font-grotesk text-2xl font-bold text-text">
              {skillCategory.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillCategory.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, backgroundColor: '#2563EB' }}
                  className="text-xs px-2 py-1 rounded-md bg-white/10 text-gray-300 font-medium transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

