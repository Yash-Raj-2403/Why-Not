import React from 'react';

const PrivacyPolicyPage: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
    <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
    <p className="text-lg text-slate-400 max-w-2xl text-center mb-8">
      Your privacy is important to us. This page explains how we collect, use, and protect your data on WhyNot.
    </p>
    <ul className="list-disc text-left text-slate-300 space-y-2">
      <li>What information we collect</li>
      <li>How your data is used</li>
      <li>Your rights and choices</li>
    </ul>
  </div>
);

export default PrivacyPolicyPage;
