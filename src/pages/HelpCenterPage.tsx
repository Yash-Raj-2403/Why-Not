import React from 'react';
import { motion } from 'framer-motion';

const HelpCenterPage: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-2xl flex flex-col items-center"
    >
      <h1 className="text-4xl font-bold mb-4">Help Center</h1>
      <p className="text-lg text-slate-400 text-center mb-8">
        Find answers to common questions, troubleshooting tips, and guides for using WhyNot.
      </p>
      <ul className="list-disc text-left text-slate-300 space-y-2">
        <li>How to create and manage your profile</li>
        <li>Understanding application statuses</li>
        <li>Contacting support for unresolved issues</li>
      </ul>
    </motion.div>
  </div>
);

export default HelpCenterPage;
