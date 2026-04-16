import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface MemoriesSectionProps {
  onImageClick: () => void;
}

export function MemoriesSection({ onImageClick }: MemoriesSectionProps) {
  const memories = [
    {
      src: "\\Users\\Admin\\Downloads\\nadine\\photo\\rku sw.webp",
      alt: "Romantic couple at sunset",
      caption: "Our Beautiful Moments"
    },
    {
      src: "https://drive.google.com/file/d/1qIy04MeIVbiPfMtTlwSGFuv3wglVKGc3/view?usp=sharing",
      alt: "21st birthday celebration cake",
      caption: "Celebrating 21! 🎂"
    },
    {
      src: "",
      alt: "Couple holding hands",
      caption: "Together Forever"
    },
    {
      src: "https://images.unsplash.com/photo-1619260288316-1dc66c32b718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwbGV0dGVycyUyMGZsb3dlcnN8ZW58MXx8fHwxNzU1ODgxMjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Love letters and flowers",
      caption: "Words of Love"
    },
    {
      src: "https://images.unsplash.com/photo-1564636242997-77953084df48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGRhdGV8ZW58MXx8fHwxNzU1ODgxMjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Romantic dinner date",
      caption: "Date Night Magic"
    },
    {
      src: "https://images.unsplash.com/photo-1615663058740-1ef358ca72a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMHNoYXBlZCUyMGJhbGxvb25zfGVufDF8fHx8MTc1NTg4MTI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Heart shaped balloons",
      caption: "Love in the Air"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-rose-100 to-pink-200">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
            Beautiful Memories
          </h2>
          <p className="text-xl text-pink-700 max-w-2xl mx-auto">
            Every moment with you becomes a treasured memory. Here's to creating many more together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <Card 
                className="aspect-square border-pink-300 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white cursor-pointer"
                onClick={onImageClick}
              >
                <div className="relative h-full">
                  <ImageWithFallback 
                    src={memory.src}
                    alt={memory.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-lg font-semibold text-center drop-shadow-lg">
                      {memory.caption}
                    </p>
                    <p className="text-sm text-center text-pink-200 mt-1 drop-shadow-lg">
                      Click to see more photos! 📸
                    </p>
                  </div>

                  {/* Heart Icon */}
                  <motion.div
                    className="absolute top-3 right-3 text-white/80"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Heart 
                      size={24} 
                      fill="currentColor" 
                      className="drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 text-pink-600">
            <Heart size={24} fill="currentColor" />
            <span className="text-xl font-medium">Made with love for Nadine</span>
            <Heart size={24} fill="currentColor" />
          </div>
          <motion.p
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-pink-500 mt-4 text-lg italic"
          >
            Every picture tells our love story 💕 Click any photo to explore our gallery!
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}