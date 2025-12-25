import React from 'react';
import { motion } from 'framer-motion';

const HelpCenterPage: React.FC = () => (
  <div className="min-h-screen bg-black relative overflow-hidden pt-28">
    <div className="relative z-10 max-w-[1800px] mx-auto p-4 md:p-8 flex flex-col items-center justify-center min-h-[80vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-2xl flex flex-col items-center glass-panel p-8 rounded-2xl border border-white/10"
      >
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Help Center</h1>
        <p className="text-lg text-slate-400 text-center mb-8">
          Find answers to common questions, troubleshooting tips, and guides for using WhyNot.
        </p>
        <ul className="list-disc text-left text-slate-300 space-y-2 pl-5">
          <li>How to create and manage your profile</li>
          <li>Understanding application statuses</li>
          <li>Contacting support for unresolved issues</li>
        </ul>
      </motion.div>
    </div>
  </div>
);

export default HelpCenterPage;
