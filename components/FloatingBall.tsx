'use client'

import { motion } from "framer-motion";

export default function FloatingBall() {
  return (
    <motion.div
     animate={{ y: [0, -18, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-sm mx-auto mt-4 shadow-lg shadow-purple-500/40"
    />
  );
}