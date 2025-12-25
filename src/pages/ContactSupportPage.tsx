import React from 'react';
import { motion } from 'framer-motion';

const ContactSupportPage: React.FC = () => (
  <div className="min-h-screen bg-black relative overflow-hidden pt-28">
    <div className="relative z-10 max-w-[1800px] mx-auto p-4 md:p-8 flex flex-col items-center justify-center min-h-[80vh]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="w-full max-w-2xl flex flex-col items-center glass-panel p-8 rounded-2xl border border-white/10"
      >
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Contact Support</h1>
        <p className="text-lg text-slate-400 text-center mb-8">
          Need help? Reach out to our support team and we’ll get back to you as soon as possible.
        </p>
        <form className="w-full max-w-md space-y-4">
          <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 placeholder:text-slate-600" required />
          <textarea placeholder="How can we help you?" className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-purple-500/50 placeholder:text-slate-600" rows={5} required />
          <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-rose-500 to-purple-500 text-white font-bold hover:shadow-lg hover:shadow-purple-500/30 transition-all">Send Message</button>
        </form>
      </motion.div>
    </div>
  </div>
);

export default ContactSupportPage;
