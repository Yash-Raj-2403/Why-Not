import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyPage: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center px-4 pt-28 pb-12">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-2xl flex flex-col items-center"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-lg text-slate-400 text-center mb-8">
        Your privacy is important to us. This page explains how we collect, use, and protect your data on WhyNot.
      </p>
      <ul className="list-disc text-left text-slate-300 space-y-2">
        <li>What information we collect</li>
        <li>How your data is used</li>
        <li>Your rights and choices</li>
      </ul>
    </motion.div>
  </div>
);

export default PrivacyPolicyPage;
