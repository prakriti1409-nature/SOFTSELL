'use client';

import { FilePlus, DollarSign, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  { icon: FilePlus, title: 'Upload License', desc: 'Submit your unused license details.' },
  { icon: DollarSign, title: 'Get Valuation', desc: 'Receive a fair market price quote.' },
  { icon: CheckCircle, title: 'Get Paid', desc: 'Get instant payment upon approval.' },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.05 }} 
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-xs"
          >
            <step.icon size={40} className="mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
