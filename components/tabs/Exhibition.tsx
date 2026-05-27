'use client';

import { motion } from 'framer-motion';
import { PhotoCarousel } from '../PhotoCarousel';

export function Exhibition() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      {/* Main Photo Album */}
      <div>
        <h2 className="text-3xl font-bold mb-2 text-center text-primary">Lets go thru your lifeee</h2>
        {/* <p className="text-center text-muted-foreground mb-8">A visual timeline of beautiful memories</p> */}
        <PhotoCarousel />
      </div>
    </motion.div>
  );
}
