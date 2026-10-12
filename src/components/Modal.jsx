import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-ink/40 backdrop-blur-sm"
          />
          <div className="pointer-events-none fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6">
            <motion.div
              role="dialog"
              aria-modal="true"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl border border-line bg-cream shadow-2xl sm:rounded-3xl"
            >
              <button
                onClick={onClose}
                className="sticky left-full top-4 z-10 mr-4 mt-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream transition-colors duration-300 hover:bg-accent"
                aria-label="Close"
              >
                <FaTimes size={14} />
              </button>
              <div className="-mt-14 p-6 md:p-10">{children}</div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
