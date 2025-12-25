import React from 'react';

const TermsOfServicePage: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-4 py-24">
    <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
    <p className="text-lg text-slate-400 max-w-2xl text-center mb-8">
      Please read these terms and conditions carefully before using WhyNot.
    </p>
    <ul className="list-disc text-left text-slate-300 space-y-2">
      <li>Acceptable use of the platform</li>
      <li>Account responsibilities</li>
      <li>Limitation of liability</li>
    </ul>
  </div>
);

export default TermsOfServicePage;
