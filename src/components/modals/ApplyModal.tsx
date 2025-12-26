import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle } from 'lucide-react';
import { api } from '../../services/api';
import { useAuth } from '../../contexts/AuthContext';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  opportunity: any;
}

const ApplyModal: React.FC<ApplyModalProps> = ({ isOpen, onClose, opportunity }) => {
  const { user } = useAuth();
  const [coverLetter, setCoverLetter] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const firstInputRef = useRef<HTMLTextAreaElement>(null);

  // Focus management: trap focus inside modal
  useEffect(() => {
    if (isOpen) {
      // Focus the first input when modal opens
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 100);
      
      // Prevent scrolling on body when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Handle ESC key to close modal
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !opportunity) return;

    setIsSubmitting(true);
    try {
      await api.applyToOpportunity(opportunity.id, user.id, coverLetter);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setCoverLetter('');
      }, 2000);
    } catch (error) {
      console.error('Error applying:', error);
      alert('Failed to apply. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="apply-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-slate-900 border border-slate-800 rounded-xl w-full max-w-lg overflow-hidden shadow-2xl"
            role="document"
          >
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
              <h2 id="apply-modal-title" className="text-xl font-bold text-white">
                Apply for {opportunity?.title}
              </h2>
              <button 
                ref={closeButtonRef}
                onClick={onClose} 
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

          {isSuccess ? (
            <div className="p-12 flex flex-col items-center text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4"
              >
                <CheckCircle className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Application Sent!</h3>
              <p className="text-slate-400">Good luck! You can track your status in the dashboard.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label htmlFor="cover-letter" className="block text-sm font-medium text-slate-300 mb-2">
                  Cover Letter (Optional)
                </label>
                <textarea
                  id="cover-letter"
                  ref={firstInputRef}
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  placeholder="Why are you a good fit for this role?"
                  className="w-full h-32 bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-none"
                  aria-label="Cover letter"
                />
              </div>

              <div className="bg-slate-800/50 p-4 rounded-lg">
                <h4 className="text-sm font-medium text-slate-300 mb-2">Your Profile Snapshot</h4>
                <div className="text-sm text-slate-400">
                  <p>Name: {user?.name}</p>
                  <p>CGPA: {user?.cgpa}</p>
                  <p>Skills: {user?.skills?.map((s: any) => s.name).join(', ')}</p>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-slate-300 hover:text-white transition-colors"
                  aria-label="Cancel application"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label={isSubmitting ? 'Submitting application' : 'Submit application'}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Submit Application <Send className="w-4 h-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
};

export default ApplyModal;
