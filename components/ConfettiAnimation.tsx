'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiAnimationProps {
  trigger?: boolean;
  onComplete?: () => void;
}

export function ConfettiAnimation({ trigger = true, onComplete }: ConfettiAnimationProps) {
  useEffect(() => {
    if (!trigger) return;

    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        onComplete?.();
        return;
      }

      confetti({
        particleCount: 50,
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
        colors: ['#F4A4A0', '#FFB6C1', '#E6D5E8', '#C3D6CA', '#FBF7F2'],
      });
    }, 250);

    return () => clearInterval(interval);
  }, [trigger, onComplete]);

  return null;
}
