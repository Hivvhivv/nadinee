import { useState } from 'react';
import { PasscodeEntry } from './components/PasscodeEntry';
import { LoveQuestion } from './components/LoveQuestion';
import { BirthdayHero } from './components/BirthdayHero';
import { BirthdayWishes } from './components/BirthdayWishes';
import { MemoriesSection } from './components/MemoriesSection';
import { PhotoGallery } from './components/PhotoGallery';
import { FloatingHearts } from './components/FloatingHearts';
import { Confetti } from './components/Confetti';

export default function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasAnsweredLove, setHasAnsweredLove] = useState(false);
  const [showPhotoGallery, setShowPhotoGallery] = useState(false);

  // Show passcode entry first
  if (!isUnlocked) {
    return <PasscodeEntry onCorrectPasscode={() => setIsUnlocked(true)} />;
  }

  // Show love question after passcode is entered
  if (!hasAnsweredLove) {
    return <LoveQuestion onYesClicked={() => setHasAnsweredLove(true)} />;
  }

  // Show photo gallery if requested
  if (showPhotoGallery) {
    return <PhotoGallery onBackClick={() => setShowPhotoGallery(false)} />;
  }

  // Show main birthday content after love question is answered
  return (
    <div className="min-h-screen bg-pink-50 relative overflow-x-hidden">
      {/* Animated Background Elements */}
      <FloatingHearts />
      <Confetti />
      
      {/* Main Content */}
      <BirthdayHero />
      <BirthdayWishes />
      <MemoriesSection onImageClick={() => setShowPhotoGallery(true)} />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-300 to-rose-400 py-8 text-center">
        <p className="text-white text-lg font-medium">
          Happy 21st Birthday, Nadine! 🎉🥂💕
        </p>
        <p className="text-pink-100 mt-2">
          Cheers to your first year of legal adulthood and all the adventures ahead!
        </p>
      </footer>
    </div>
  );
}