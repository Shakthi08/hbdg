'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

interface BirthdayBannerProps {
  onComplete: () => void;
}

export function BirthdayBanner({ onComplete }: BirthdayBannerProps) {
  const [clicks, setClicks] = useState(0);
  const REQUIRED_CLICKS = 5;

  const handleButtonClick = () => {
    const newClicks = clicks + 1;
    setClicks(newClicks);
    
    toast.success('thank me moreee', {
      duration: 2000,
      position: 'top-center',
      style: {
        background: 'oklch(0.65 0.19 280)',
        color: 'white',
        fontSize: '16px',
        fontWeight: 'bold',
      },
    });

    if (newClicks >= REQUIRED_CLICKS) {
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  };

  return (
    <>
      <Toaster />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            className="relative flex flex-col items-center justify-center gap-8 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 px-6 py-12 shadow-2xl md:px-16 md:py-16"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-accent/20 blur-3xl" />

            {/* Main banner text */}
            <motion.div
              className="relative text-center"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <h1 className="mb-2 text-balance text-4xl font-black tracking-tighter md:text-6xl">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  HAPPY BIRTHDAYYYY
                </span>
              </h1>
              <h2 className="text-balance text-3xl font-black tracking-tighter md:text-5xl">
                <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                  GEETIKAAA
                </span>
              </h2>
            </motion.div>

            {/* Click counter */}
            <div className="relative flex items-center gap-3">
              <span className="text-lg font-semibold text-foreground/70">
                Clicks: {clicks}/{REQUIRED_CLICKS}
              </span>
              <div className="flex gap-1">
                {Array.from({ length: REQUIRED_CLICKS }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`h-3 w-3 rounded-full ${
                      i < clicks ? 'bg-primary' : 'bg-border'
                    }`}
                    animate={i < clicks ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>

            {/* Thank you button */}
            <motion.button
              onClick={handleButtonClick}
              className="relative z-10 rounded-full bg-gradient-to-r from-primary via-accent to-secondary px-8 py-3 font-black text-white shadow-lg transition-all duration-300 hover:shadow-2xl md:px-12 md:py-4 md:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={
                clicks < REQUIRED_CLICKS
                  ? {
                      boxShadow: [
                        '0 0 20px rgba(101, 84, 192, 0.5)',
                        '0 0 40px rgba(101, 84, 192, 0.8)',
                        '0 0 20px rgba(101, 84, 192, 0.5)',
                      ],
                    }
                  : {}
              }
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              THANKYOUUUUU
            </motion.button>

            {/* Progress text */}
            {clicks < REQUIRED_CLICKS && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative z-10 text-center text-sm font-medium text-foreground/60"
              >
                Press the button {REQUIRED_CLICKS - clicks} more {REQUIRED_CLICKS - clicks === 1 ? 'time' : 'times'}!
              </motion.p>
            )}

            {clicks >= REQUIRED_CLICKS && (
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 text-center text-lg font-bold text-primary"
              >
                Woohoo! You&apos;re all set! 🎉
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
