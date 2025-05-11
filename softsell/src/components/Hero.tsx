'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen  text-center p-4">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4"
      >
        Turn Unused Software Into Cash
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-6 text-lg text-gray-700"
      >
        SoftSell helps businesses resell surplus software licenses quickly and securely.
      </motion.p>
      <motion.a 
        href="#"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.4, duration: 0.6 }}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
      >
        Sell My Licenses
      </motion.a>
    </section>
  );
}
