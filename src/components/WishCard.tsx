import { motion } from 'motion/react';
import { X, Heart } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

interface WishCardProps {
  onClose: () => void;
}

export function WishCard({ onClose }: WishCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", duration: 0.6 }}
        onClick={(e) => e.stopPropagation()}
      >
        <Card className="max-w-2xl w-full bg-gradient-to-br from-pink-50 via-white to-rose-50 border-pink-300 shadow-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative hearts */}
          <div className="absolute top-4 right-4 text-pink-300 opacity-20">
            <Heart size={100} fill="currentColor" />
          </div>
          <div className="absolute bottom-4 left-4 text-rose-300 opacity-20">
            <Heart size={80} fill="currentColor" />
          </div>

          {/* Close button */}
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 z-10 text-pink-600 hover:text-pink-800 hover:bg-pink-100"
          >
            <X size={24} />
          </Button>

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <div className="text-6xl mb-4">💝</div>
              <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">
                My Heartfelt Wishes for You
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full" />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-left max-h-96 overflow-y-auto pr-2"
            >
              <p className="text-lg text-pink-800 leading-relaxed">
                Dearest Nadine,
              </p>

              <p className="text-base text-pink-700 leading-relaxed">
                On this special day, as you turn 21, I want you to know just how incredibly blessed I feel to have you in my life. You've brought so much joy, laughter, and love into my world, and I can't imagine a single day without you.
              </p>

              <p className="text-base text-pink-700 leading-relaxed">
                I wish for you a year filled with endless happiness, exciting adventures, and dreams that come true. May every sunrise bring you hope, every sunset bring you peace, and every moment in between be filled with the kind of love and magic that you bring into my life every single day.
              </p>

              <p className="text-base text-pink-700 leading-relaxed">
                You deserve the world and so much more. I promise to be by your side through every laugh, every tear, every triumph, and every challenge. Together, we'll create memories that will last a lifetime and build a future that's even more beautiful than we can imagine.
              </p>

              <p className="text-base text-pink-700 leading-relaxed">
                Happy 21st Birthday, my love! Here's to celebrating you today and every day. You are my sunshine, my inspiration, and my forever love. I love you more than words could ever express.
              </p>

              <p className="text-lg text-pink-800 leading-relaxed mt-8">
                With all my love,
                <br />
                Forever yours 💕
              </p>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="mt-8 flex justify-center gap-2"
            >
              <Heart size={20} fill="#ec4899" className="text-pink-500 animate-pulse" />
              <Heart size={20} fill="#f43f5e" className="text-rose-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
              <Heart size={20} fill="#ec4899" className="text-pink-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
