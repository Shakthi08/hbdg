'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PasswordVault } from './PasswordVault';
import { Dashboard } from './Dashboard';
import { BirthdayBanner } from './BirthdayBanner';
import { BackgroundMusic } from './BackgroundMusic';

export function BirthdayApp() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [bannerComplete, setBannerComplete] = useState(false);

  return (
    <>
      <BackgroundMusic />
      <AnimatePresence mode="wait">
      {!isUnlocked ? (
        <motion.div
          key="password"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PasswordVault onUnlock={() => setIsUnlocked(true)} />
        </motion.div>
      ) : !bannerComplete ? (
        <motion.div
          key="banner"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BirthdayBanner onComplete={() => setBannerComplete(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Dashboard />
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

