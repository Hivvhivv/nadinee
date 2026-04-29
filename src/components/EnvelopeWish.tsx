import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Send } from 'lucide-react';
import { Button } from './ui/button';

export function EnvelopeWish() {
  const [isOpen, setIsOpen] = useState(false);
  const [wish, setWish] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleSubmit = () => {
    if (wish.trim()) {
      setIsClosing(true);
      setTimeout(() => {
        setIsSubmitted(true);
        setIsOpen(false);
        setIsClosing(false);
        // Reset after animation
        setTimeout(() => {
          setIsSubmitted(false);
          setWish('');
        }, 3000);
      }, 1500);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-pink-200 to-rose-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
            Send Your Birthday Wish
          </h2>
          <p className="text-xl text-pink-700">
            Click the envelope to write your special message for Nadine! 💌
          </p>
        </motion.div>

        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            {!isOpen && !isSubmitted && (
              <motion.div
                key="closed-envelope"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <motion.div
                  whileHover={{ scale: 1.1, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {/* Envelope */}
                  <svg width="300" height="200" viewBox="0 0 300 200" className="drop-shadow-2xl">
                    {/* Envelope body */}
                    <rect x="20" y="50" width="260" height="140" fill="#fecdd3" stroke="#f43f5e" strokeWidth="3" rx="5" />

                    {/* Envelope flap closed */}
                    <motion.path
                      d="M 20 50 L 150 130 L 280 50"
                      fill="#fda4af"
                      stroke="#f43f5e"
                      strokeWidth="3"
                      strokeLinejoin="round"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Heart seal */}
                    <motion.g
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <circle cx="150" cy="80" r="25" fill="#fff" opacity="0.9" />
                      <text x="150" y="90" fontSize="30" textAnchor="middle" fill="#f43f5e">💕</text>
                    </motion.g>
                  </svg>

                  {/* Floating hearts */}
                  <motion.div
                    className="absolute -top-8 left-1/2 -translate-x-1/2"
                    animate={{ y: [-10, -20, -10], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart size={24} fill="#f43f5e" className="text-rose-500" />
                  </motion.div>
                </motion.div>

                <p className="text-center mt-6 text-pink-600 font-medium text-lg">
                  Click to open the envelope! ✨
                </p>
              </motion.div>
            )}

            {isOpen && !isSubmitted && (
              <motion.div
                key="open-envelope"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: isClosing ? 0.8 : 1, opacity: isClosing ? 0 : 1, rotate: isClosing ? -360 : 0 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-2xl"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-pink-300 relative overflow-hidden">
                  {/* Decorative corner hearts */}
                  <div className="absolute top-4 right-4 text-pink-200">
                    <Heart size={40} fill="currentColor" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-rose-200">
                    <Heart size={40} fill="currentColor" />
                  </div>

                  <div className="relative z-10">
                    <motion.div
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-center mb-6"
                    >
                      <div className="text-6xl mb-3">💌</div>
                      <h3 className="text-3xl font-bold text-pink-600 mb-2">
                        Write Your Wish for Nadine
                      </h3>
                      <p className="text-pink-700">Share your heartfelt birthday message</p>
                    </motion.div>

                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <textarea
                        value={wish}
                        onChange={(e) => setWish(e.target.value)}
                        placeholder="Dear Nadine, on your 21st birthday..."
                        className="w-full h-48 p-4 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-500 resize-none text-pink-800 placeholder-pink-300 bg-pink-50/50"
                        style={{ fontFamily: 'cursive' }}
                      />

                      <div className="flex gap-4 mt-6">
                        <Button
                          onClick={handleSubmit}
                          disabled={!wish.trim()}
                          className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white py-6 text-lg font-semibold rounded-lg shadow-lg disabled:opacity-50"
                        >
                          <Send size={20} className="mr-2" />
                          Send Wish
                        </Button>
                        <Button
                          onClick={() => setIsOpen(false)}
                          variant="outline"
                          className="px-8 py-6 border-2 border-pink-300 text-pink-600 hover:bg-pink-50"
                        >
                          Cancel
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {isSubmitted && (
              <motion.div
                key="submitted"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="text-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  {/* Closed envelope with stamp */}
                  <svg width="300" height="200" viewBox="0 0 300 200" className="drop-shadow-2xl mx-auto">
                    <rect x="20" y="50" width="260" height="140" fill="#fecdd3" stroke="#f43f5e" strokeWidth="3" rx="5" />
                    <path d="M 20 50 L 150 130 L 280 50" fill="#fda4af" stroke="#f43f5e" strokeWidth="3" strokeLinejoin="round" />
                    <circle cx="150" cy="80" r="25" fill="#fff" opacity="0.9" />
                    <text x="150" y="90" fontSize="30" textAnchor="middle" fill="#f43f5e">✓</text>
                  </svg>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <h3 className="text-3xl font-bold text-pink-600 mb-2">
                    Wish Sent! 💕
                  </h3>
                  <p className="text-xl text-pink-700">
                    Your beautiful message has been sealed with love
                  </p>
                  <div className="flex justify-center gap-2 mt-4">
                    <Heart size={24} fill="#ec4899" className="text-pink-500 animate-pulse" />
                    <Heart size={24} fill="#f43f5e" className="text-rose-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <Heart size={24} fill="#ec4899" className="text-pink-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
