'use client';

import { useEffect, useRef } from 'react';

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set audio to loop and play
    audio.loop = true;
    audio.volume = 0.3; // Mild volume (30%)
    
    // Try to autoplay (may be blocked by browser)
    const playAudio = () => {
      audio.play().catch(() => {
        // Autoplay prevented, will start on user interaction
      });
    };

    // Attempt to play on mount
    playAudio();

    // Also try to play on first user interaction
    const handleUserInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="https://assets.mixkit.co/active_storage/sfx/2720/2720-preview.mp3"
      loop
      preload="auto"
      style={{ display: 'none' }}
    />
  );
}
