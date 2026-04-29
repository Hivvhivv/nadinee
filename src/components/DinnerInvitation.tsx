import { motion } from 'motion/react';
import { X, Heart, Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DinnerInvitationProps {
  onClose: () => void;
}

export function DinnerInvitation({ onClose }: DinnerInvitationProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", duration: 0.6 }}
        onClick={(e) => e.stopPropagation()}
        className="my-8"
      >
        <Card className="max-w-3xl w-full bg-gradient-to-br from-pink-50 via-white to-rose-50 border-pink-300 shadow-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 text-pink-300 opacity-20">
            <Sparkles size={100} />
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
          <div className="relative z-10">
            {/* Header */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-8"
            >
              <div className="text-6xl mb-4">🍽️✨</div>
              <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">
                You're Invited!
              </h2>
              <p className="text-xl text-pink-700 italic">
                A Special Birthday Dinner for Nadine
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full mt-4" />
            </motion.div>

            {/* Invitation Details */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6 mb-8"
            >
              <div className="bg-white/60 rounded-lg p-6 border-2 border-pink-200">
                <p className="text-center text-lg text-pink-800 mb-6 leading-relaxed">
                  Join me for an unforgettable evening as we celebrate your 21st birthday in style!
                  I've planned a romantic dinner date just for us, filled with love, laughter, and delicious food.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Calendar className="text-pink-500 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-pink-700">Date</p>
                      <p className="text-pink-600">[Your Special Date]</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="text-pink-500 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-pink-700">Time</p>
                      <p className="text-pink-600">7:00 PM - A night to remember</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="text-pink-500 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-pink-700">Location</p>
                      <p className="text-pink-600">[Your Favorite Restaurant]</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Dress Code Section */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-pink-600 mb-4 text-center flex items-center justify-center gap-2">
                <Sparkles size={24} />
                Dress Code Guide
                <Sparkles size={24} />
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* For Her */}
                <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg p-4 border-2 border-pink-300">
                  <h4 className="text-xl font-bold text-pink-700 mb-3 text-center">
                    For You, My Love 👗
                  </h4>
                  <div className="aspect-square rounded-lg overflow-hidden mb-4 border-2 border-pink-200">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZHJlc3MlMjBwaW5rJTIwZm9ybWFsfGVufDB8fHx8MTcwOTczMTIwMHww&ixlib=rb-4.1.0&q=80&w=400"
                      alt="Elegant dress suggestion"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-pink-700 text-center">
                    Elegant & Romantic
                    <br />
                    <span className="text-sm italic">Dress to impress, my beautiful birthday girl!</span>
                  </p>
                </div>

                {/* For Him */}
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg p-4 border-2 border-blue-300">
                  <h4 className="text-xl font-bold text-blue-700 mb-3 text-center">
                    For Me 🤵
                  </h4>
                  <div className="aspect-square rounded-lg overflow-hidden mb-4 border-2 border-blue-200">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzdWl0JTIwZm9ybWFsJTIwZWxlZ2FudHxlbnwwfHx8fDE3MDk3MzEyMDB8MA&ixlib=rb-4.1.0&q=80&w=400"
                      alt="Formal suit suggestion"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-blue-700 text-center">
                    Smart & Sophisticated
                    <br />
                    <span className="text-sm italic">I'll be looking my best for you!</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Footer Message */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="mt-8 text-center"
            >
              <div className="bg-gradient-to-r from-pink-200 via-rose-200 to-pink-200 rounded-lg p-6 border-2 border-pink-300">
                <p className="text-pink-800 text-lg mb-2">
                  Can't wait to celebrate with you! 💕
                </p>
                <div className="flex justify-center gap-2">
                  <Heart size={20} fill="#ec4899" className="text-pink-500 animate-pulse" />
                  <Heart size={20} fill="#f43f5e" className="text-rose-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <Heart size={20} fill="#ec4899" className="text-pink-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
