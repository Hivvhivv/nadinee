import { motion } from "motion/react";
import {
  ArrowLeft,
  Heart,
  Download,
  Share2,
} from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface PhotoGalleryProps {
  onBackClick: () => void;
}

interface Photo {
  src: string;
  alt: string;
  caption: string;
  hoverText: string;
  tall?: boolean;
}

interface Category {
  id: string;
  title: string;
  emoji: string;
  coverImage: string;
  description: string;
  photos: Photo[];
}

export function PhotoGallery({
  onBackClick,
}: PhotoGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    string | null
  >(null);

  const categories: Category[] = [
    {
      id: "adventures",
      title: "Our Adventures",
      emoji: "🌍",
      coverImage:
        "https://images.unsplash.com/photo-1629401681628-a37c83eb57d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBhZHZlbnR1cmUlMjB0cmF2ZWwlMjBoa2ltaW5n8ZW58MXx8fHwxNzc2MjQ1NzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "All our exciting adventures together",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1581779124574-bc0da275e520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjByb21hbnRpYyUyMHN1bnNldHxlbnwxfHx8fDE3NTU4ODE4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Couple at romantic sunset",
          caption: "Golden Hour Adventures",
          hoverText:
            "Watching the sunset together, creating memories that last forever",
          tall: true,
        },
        {
          src: "https://images.unsplash.com/photo-1653151189412-c190a965ca4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGhlYXJ0JTIwYmFsbG9vbnN8ZW58MXx8fHwxNzU1ODgxODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Romantic heart balloons",
          caption: "Balloon Adventures",
          hoverText:
            "Flying high on love and laughter, with you by my side",
        },
        {
          src: "https://images.unsplash.com/photo-1653688529238-1326ab9eeab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsb3ZlJTIwbmF0dXJlfGVufDF8fHx8MTc1NTg4MTg0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Couple in nature",
          caption: "Nature Explorations",
          hoverText:
            "Discovering the world together, hand in hand through nature's beauty",
          tall: true,
        },
        {
          src: "https://images.unsplash.com/photo-1650538230322-069d33d0fdbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBjaXR5JTIwcm9tYW50aWN8ZW58MXx8fHwxNzU1ODgxODQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "City adventures",
          caption: "City Explorations",
          hoverText:
            "Urban adventures and romantic city nights with my favorite person",
        },
      ],
    },
    {
      id: "dates",
      title: "Romantic Dinners",
      emoji: "🍽️",
      coverImage:
        "https://images.unsplash.com/photo-1713026464108-c9929157ed55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGNhbmRsZXMlMjByZXN0YXVyYW50fGVufDF8fHx8MTc3NjI0NTczN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Candlelight dinners and date nights",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1532302584927-8bd4b6118390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGNhbmRsZXN8ZW58MXx8fHwxNzU1ODgxODQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Romantic dinner with candles",
          caption: "Candlelight Dinners",
          hoverText:
            "Intimate evenings filled with love, laughter, and delicious food",
        },
        {
          src: "https://images.unsplash.com/photo-1564636242997-77953084df48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGRpbm5lciUyMGRhdGV8ZW58MXx8fHwxNzU1ODgxMjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Romantic dinner date",
          caption: "Date Night Magic",
          hoverText:
            "Every date night with you is pure magic and romance",
          tall: true,
        },
        {
          src: "https://images.unsplash.com/photo-1643188626920-f780792e7f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHBpY25pYyUyMHBhcmt8ZW58MXx8fHwxNzU1ODgxODQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Romantic picnic",
          caption: "Perfect Picnics",
          hoverText:
            "Sunny afternoons and perfect picnics in the park with my love",
        },
      ],
    },
    {
      id: "beach",
      title: "Beach Memories",
      emoji: "🏖️",
      coverImage:
        "https://images.unsplash.com/photo-1726251903562-4af66fc61634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBiZWFjaCUyMHN1bnNldCUyMG9jZWFufGVufDF8fHx8MTc3NjI0NTczN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Waves, sand, and beautiful sunsets",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1688421936241-f3f7f02e92cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBob2xkaW5nJTIwaGFuZHMlMjBiZWFjaHxlbnwxfHx8fDE3NTU4ODE4NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Beach walks together",
          caption: "Beach Walks",
          tall: true,
        },
        {
          src: "https://images.unsplash.com/photo-1506014299253-3725319c0f69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBob2xkaW5nJTIwaGFuZHM8ZW58MXx8fHwxNzU1ODgxMjUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Couple holding hands",
          caption: "Hand in Hand",
        },
        {
          src: "https://images.unsplash.com/photo-1658851866325-49fb8b7fbcb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMHN1bnNldHxlbnwxfHx8fDE3NTU4NTQzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Sunset moments",
          caption: "Sunset Magic",
          tall: true,
        },
      ],
    },
    {
      id: "celebrations",
      title: "Celebrations",
      emoji: "🎉",
      coverImage:
        "https://images.unsplash.com/photo-1768167444777-f586bb1a06ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBjZWxlYnJhdGlvbiUyMHBhcnR5JTIwYmFsbG9vbnN8ZW58MXx8fHwxNzc2MjQ1NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Birthdays, anniversaries & special moments",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1619208110262-90c0438c174d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBsYXVnaGluZyUyMGhhcHB5fGVufDF8fHx8MTc1NTg4MTg0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Happy celebration",
          caption: "Joyful Celebrations",
          hoverText:
            "Celebrating life's special moments with endless laughter and joy",
          tall: true,
        },
        {
          src: "https://images.unsplash.com/photo-1592865192090-844259a98ba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBkYW5jaW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzU1ODgxODQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Dancing together",
          caption: "Dance Parties",
          hoverText:
            "Dancing through life together, one song at a time",
        },
        {
          src: "https://images.unsplash.com/photo-1615663058740-1ef358ca72a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMHNoYXBlZCUyMGJhbGxvb25zfGVufDF8fHx8MTc1NTg4MTI1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Celebration balloons",
          caption: "Love in the Air",
          hoverText:
            "Our love floating high like these beautiful balloons",
        },
      ],
    },
    {
      id: "nature",
      title: "Nature Escapes",
      emoji: "🌳",
      coverImage:
        "https://images.unsplash.com/photo-1744160335022-d520b6fd6374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBuYXR1cmUlMjBwYXJrJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzYyNDU3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Peaceful moments in nature",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1514770643069-54183731a981?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB3YXRjaGluZyUyMHN0YXJzfGVufDF8fHx8MTc1NTg4MTg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Stargazing together",
          caption: "Stargazing Nights",
          hoverText:
            "Under the stars, dreaming of our future together",
          tall: true,
        },
        {
          src: "https://images.unsplash.com/photo-1730123481681-82a244d7cfc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGZsb3dlcnMlMjBib3VxdWV0fGVufDF8fHx8MTc1NTg4MTg0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Beautiful flowers",
          caption: "Nature's Beauty",
          hoverText:
            "Like these flowers, our love blooms more beautiful each day",
        },
        {
          src: "https://images.unsplash.com/photo-1619260288316-1dc66c32b718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwbGV0dGVycyUyMGZsb3dlcnN8ZW58MXx8fHwxNzU1ODgxMjUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Flowers and love",
          caption: "Garden Moments",
          hoverText:
            "Peaceful moments surrounded by nature's beauty and your love",
          tall: true,
        },
      ],
    },
    {
      id: "special",
      title: "Special Moments",
      emoji: "💝",
      coverImage:
        "https://images.unsplash.com/photo-1670786056283-c5a3835ccc8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwbGV0dGVycyUyMHJvbWFudGljfGVufDF8fHx8MTc1NTg4MTg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Those unforgettable intimate moments",
      photos: [
        {
          src: "https://images.unsplash.com/photo-1670786056283-c5a3835ccc8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3ZlJTIwbGV0dGVycyUyMHJvbWFudGljfGVufDF8fHx8MTc1NTg4MTg0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
          alt: "Love letters",
          caption: "Sweet Messages",
          hoverText:
            "Every word I write to you comes straight from my heart",
        },
      ],
    },
  ];

  const currentCategory = categories.find(
    (cat) => cat.id === selectedCategory,
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-300 to-rose-400 p-6 sticky top-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Button
            onClick={
              selectedCategory
                ? () => setSelectedCategory(null)
                : onBackClick
            }
            variant="ghost"
            className="text-white hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            {selectedCategory
              ? "Back to Categories"
              : "Back to Celebration"}
          </Button>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-bold text-white text-center"
          >
            {selectedCategory
              ? currentCategory?.title
              : "Our Love Story Gallery"}{" "}
            💕
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

      <div className="p-6 max-w-7xl mx-auto">
        {!selectedCategory ? (
          // Category Selection View
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <p className="text-xl text-pink-700 max-w-3xl mx-auto">
                Choose a category to explore our beautiful
                memories together, Nadine! 💖
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                  onClick={() =>
                    setSelectedCategory(category.id)
                  }
                >
                  <Card className="overflow-hidden border-pink-200 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                    <div className="relative h-80">
                      <ImageWithFallback
                        src={category.coverImage}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/90 via-pink-900/50 to-transparent" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="text-5xl mb-3 text-center group-hover:scale-125 transition-transform duration-300">
                          {category.emoji}
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-2 drop-shadow-lg">
                          {category.title}
                        </h3>
                        <p className="text-sm text-center text-pink-100 drop-shadow-lg">
                          {category.description}
                        </p>
                        <p className="text-xs text-center text-pink-200 mt-3 drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Click to view {category.photos.length}{" "}
                          {category.photos.length === 1
                            ? "photo"
                            : "photos"}{" "}
                          📸
                        </p>
                      </div>

                      {/* Floating Hearts */}
                      <motion.div
                        className="absolute top-4 right-4 text-white/90"
                        whileHover={{ scale: 1.2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                        }}
                      >
                        <Heart
                          size={28}
                          fill="currentColor"
                          className="drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Footer Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mt-16 mb-8"
            >
              <div className="inline-flex items-center space-x-3 text-pink-600 mb-4">
                <Heart size={28} fill="currentColor" />
                <span className="text-2xl font-bold">
                  6 Beautiful Collections for Nadine
                </span>
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
                Each category is filled with love and memories
                💕✨
              </motion.p>
            </motion.div>
          </>
        ) : (
          // Photo Gallery View for Selected Category
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <div className="text-6xl mb-4">
                {currentCategory?.emoji}
              </div>
              <p className="text-xl text-pink-700 max-w-3xl mx-auto">
                {currentCategory?.description}
              </p>
            </motion.div>

            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {currentCategory?.photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="break-inside-avoid group"
                >
                  <Card className="overflow-hidden border-pink-200 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="relative">
                      <ImageWithFallback
                        src={photo.src}
                        alt={photo.alt}
                        className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                          photo.tall ? "h-80" : "h-64"
                        }`}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Heart Icon */}
                      <motion.div
                        className="absolute top-3 right-3 text-white/90"
                        whileHover={{ scale: 1.2 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                        }}
                      >
                        <Heart
                          size={24}
                          fill="currentColor"
                          className="drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </motion.div>

                      {/* Caption and Hover Text */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-lg font-semibold text-center drop-shadow-lg mb-2">
                          {photo.caption}
                        </p>
                        <p className="text-sm text-center text-pink-100 drop-shadow-lg italic">
                          {photo.hoverText}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Category Footer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-16 mb-8"
            >
              <div className="inline-flex items-center space-x-3 text-pink-600 mb-4">
                <Heart size={28} fill="currentColor" />
                <span className="text-2xl font-bold">
                  Made with endless love for Nadine
                </span>
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
          </>
        )}
      </div>
    </div>
  );
}