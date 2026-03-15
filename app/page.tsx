'use client';

import { motion } from 'framer-motion';
import FloatingBall from '@/components/FloatingBall';
import Navbar from '@/components/Navbar';

import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import GithubActivity from '@/components/GithubActivity';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <GithubActivity />
      <Resume />
      <Contact />
      
     <footer className="py-12 px-6 max-w-6xl mx-auto text-center border-t border-card/50 mt-24 flex flex-col items-center">

  <motion.p 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className="text-lg md:text-xl text-text/70 font-medium"
  >
    © 2024 Manikanta Juttu. All rights reserved.
  </motion.p>

  <FloatingBall />

</footer>



    </>
  );
}



