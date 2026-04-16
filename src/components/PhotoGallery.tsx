import { motion } from 'motion/react';
import { ArrowLeft, Heart, Download, Share2 } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PhotoGalleryProps {
  onBackClick: () => void;
}

export function PhotoGallery({ onBackClick }: PhotoGalleryProps) {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1581779124574-bc0da275e520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjByb21hbnRpYyUyMHN1bnNldHxlbnwxfHx8fDE3NTU4ODE4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Couple at romantic sunset",
      caption: "Golden Hour Love",
      tall: true
    },
    {
      src: "https://images.unsplash.com/photo-1688421936241-f3f7f02e92cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBob2xkaW5nJTIwaGFuZHMlMjBiZWFjaHxlbnwxfHx8fDE3NTU4ODE4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Couple holding hands at beach",
      caption: "Beach Walks Together"
    },
    {
      src: "https://images.unsplash.com/photo-1532302584927-8bd4b6118390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGNhbmRsZXN8ZW58MXx8fHwxNzU1ODgxODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Romantic dinner with candles",
      caption: "Candlelight Dinners"
    },
    {
      src: "https://images.unsplash.com/photo-1653688529238-1326ab9eeab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsb3ZlJTIwbmF0dXJlfGVufDF8fHx8MTc1NTg4MTg0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Couple in love in nature",
      caption: "Nature's Romance",
      tall: true
    },
    {
      src: "https://images.unsplash.com/photo-1643188626920-f780792e7f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHBpY25pYyUyMHBhcmt8ZW58MXx8fHwxNzU1ODgxODQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Romantic picnic in park",
      caption: "Perfect Picnics"
    },
    {
      src: "https://images.unsplash.com/photo-1592865192090-844259a98ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBkYW5jaW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzU1ODgxODQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Couple dancing together",
      caption: "Dancing Hearts"
    },
    {
      src: "https://images.unsplash.com/photo-1730123481681-82a244d7cfc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGZsb3dlcnMlMjBib3VxdWV0fGVufDF8fHx8MTc1NTg4MTg0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Romantic flowers bouquet",
      caption: "Flower Surprises"
    },
    {
      src: "https://images.unsplash.com/photo-1619208110262-90c0438c174d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsYXVnaGluZyUyMGhhcHB5fGVufDF8fHx8MTc1NTg4MTg0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Couple laughing and happy",
      caption: "Laughter & Joy",
      tall: true
    },
    {
      src: "https://images.unsplash.com/photo-1653151189412-c190a965ca4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGhlYXJ0JTIwYmFsbG9vbnN8ZW58MXx8fHwxNzU1ODgxODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Romantic heart balloons",
      caption: "Love Balloons"
    },
    {
      src: "https://images.unsplash.com/photo-1650538230322-069d33d0fdbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBjaXR5JTIwcm9tYW50aWN8ZW58MXx8fHwxNzU1ODgxODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Couple in romantic city setting",
      caption: "City Adventures"
    },
    {
      src: "https://images.unsplash.com/photo-1670786056283-c5a3835ccc8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwbGV0dGVycyUyMHJvbWFudGljfGVufDF8fHx8MTc1NTg4MTg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Love letters and romantic notes",
      caption: "Sweet Messages"
    },
    {
      src: "https://images.unsplash.com/photo-1514770643069-54183731a981?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB3YXRjaGluZyUyMHN0YXJzfGVufDF8fHx8MTc1NTg4MTg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Couple watching stars",
      caption: "Stargazing Nights",
      tall: true
    },
    // Adding the original photos from MemoriesSection
    {
      src: "https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3NTU4NTQzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Romantic couple at sunset",
      caption: "Our Beautiful Moments"
    },
    {
      src: "https://images.unsplash.com/photo-1506014299253-3725319c0f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBob2xkaW5nJTIwaGFuZHN8ZW58MXx8fHwxNzU1ODgxMjUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Couple holding hands",
      caption: "Together Forever"
    },
    {
      src: "https://images.unsplash.com/photo-1564636242997-77953084df48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGRhdGV8ZW58MXx8fHwxNzU1ODgxMjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Romantic dinner date",
      caption: "Date Night Magic"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-300 to-rose-400 p-6 sticky top-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            onClick={onBackClick}
            variant="ghost"
            className="text-white hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Celebration
          </Button>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold text-white text-center"
          >
            Our Love Story Gallery 💕
          </motion.h1>
          
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <Share2 size={18} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
            >
              <Download size={18} />
            </Button>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="p-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <p className="text-xl text-pink-700 max-w-3xl mx-auto">
            Every photo captures a precious moment of our journey together. 
            These memories are the building blocks of our beautiful love story, Nadine. 💖
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="break-inside-avoid group"
            >
              <Card className="overflow-hidden border-pink-200 shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative">
                  <ImageWithFallback 
                    src={photo.src}
                    alt={photo.alt}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      photo.tall ? 'h-80' : 'h-64'
                    }`}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Heart Icon */}
                  <motion.div
                    className="absolute top-3 right-3 text-white/90"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Heart 
                      size={24} 
                      fill="currentColor" 
                      className="drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    />
                  </motion.div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-lg font-semibold text-center drop-shadow-lg">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 mb-8"
        >
          <div className="inline-flex items-center space-x-3 text-pink-600 mb-4">
            <Heart size={28} fill="currentColor" />
            <span className="text-2xl font-bold">Made with endless love for Nadine</span>
            <Heart size={28} fill="currentColor" />
          </div>
          <motion.p
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-pink-500 text-xl italic"
          >
            Each picture holds a thousand words of love 💕✨
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}