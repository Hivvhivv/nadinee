import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try to autoplay
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Autoplay prevented. User interaction required.');
        setIsPlaying(false);
      }
    };

    playAudio();

    // Handle play/pause events
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = !audio.muted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch (error) {
        console.log('Play failed:', error);
      }
    }
  };

  return (
    <>
      {/* Hidden audio element - using a romantic royalty-free music URL */}
      <audio
        ref={audioRef}
        loop
        // Using a romantic piano instrumental (placeholder - you can replace with your own)
        src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3"
      />

      {/* Floating music control button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="flex flex-col gap-2">
          {/* Mute/Unmute button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className="bg-gradient-to-r from-pink-400 to-rose-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            title={isMuted ? "Unmute music" : "Mute music"}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </motion.button>

          {/* Play/Pause button (optional - shows when autoplay fails) */}
          {!isPlaying && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlayPause}
              className="bg-gradient-to-r from-pink-400 to-rose-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              title="Play music"
            >
              ▶️
            </motion.button>
          )}
        </div>

        {/* Now Playing indicator */}
        {isPlaying && !isMuted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -top-12 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="text-pink-500"
              >
                ♪
              </motion.div>
              <span className="text-sm text-pink-700 font-medium">Now Playing</span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
