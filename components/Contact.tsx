'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 md:mb-24"
      >
        <h2 className="font-grotesk text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          Get In Touch
        </h2>
        <p className="text-lg md:text-xl text-text/80 max-w-2xl mx-auto">
          Say hello or discuss collaboration opportunities
        </p>
      </motion.div>

      {/* Contact Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
      >
        {/* GitHub */}
        <motion.a
          href="https://github.com/manikanta9090"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -10, scale: 1.05 }}
          className="card p-10 md:p-12 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 flex flex-col items-center gap-4 group rounded-2xl max-w-md mx-auto"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-2xl">
            <FiGithub className="text-xl md:text-2xl text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-text group-hover:text-primary transition-colors duration-300">
            GitHub
          </h3>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/juttu-manikanta-767462311/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -10, scale: 1.05 }}
          className="card p-10 md:p-12 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 flex flex-col items-center gap-4 group rounded-2xl max-w-md mx-auto"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-2xl">
            <FiLinkedin className="text-xl md:text-2xl text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-text group-hover:text-primary transition-colors duration-300">
            LinkedIn
          </h3>
        </motion.a>

        {/* Email */}
        <motion.a
          href="mailto:juttumanikanta52@gmail.com"
          whileHover={{ y: -10, scale: 1.05 }}
          className="card p-10 md:p-12 hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 flex flex-col items-center gap-4 group rounded-2xl max-w-md mx-auto"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-2xl">
            <FiMail className="text-xl md:text-2xl text-white" />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-text group-hover:text-primary transition-colors duration-300">
            Email
          </h3>
        </motion.a>
      </motion.div>
    </section>
  );
}
