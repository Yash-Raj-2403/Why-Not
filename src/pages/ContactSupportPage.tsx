import React from 'react';
import { motion } from 'framer-motion';

const ContactSupportPage: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-2xl flex flex-col items-center"
    >
      <h1 className="text-4xl font-bold mb-4">Contact Support</h1>
      <p className="text-lg text-slate-400 text-center mb-8">
        Need help? Reach out to our support team and we’ll get back to you as soon as possible.
      </p>
      <form className="w-full max-w-md space-y-4">
        <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none" required />
        <textarea placeholder="How can we help you?" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none" rows={5} required />
        <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 text-white font-bold">Send Message</button>
      </form>
    </motion.div>
  </div>
);

export default ContactSupportPage;
