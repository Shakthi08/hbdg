'use client';

import { motion } from 'framer-motion';

interface VinylRecordProps {
  isPlaying: boolean;
}

export function VinylRecord({ isPlaying }: VinylRecordProps) {
  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      className="drop-shadow-lg"
      animate={{ rotate: isPlaying ? 360 : 0 }}
      transition={{
        duration: isPlaying ? 4 : 0.6,
        repeat: isPlaying ? Infinity : 0,
        ease: 'linear',
      }}
    >
      {/* Outer vinyl ring */}
      <circle cx="60" cy="60" r="55" fill="none" stroke="#2C2C2C" strokeWidth="2" />

      {/* Vinyl grooves */}
      <circle
        cx="60"
        cy="60"
        r="50"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <circle
        cx="60"
        cy="60"
        r="45"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <circle
        cx="60"
        cy="60"
        r="40"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="0.5"
        opacity="0.3"
      />
      <circle
        cx="60"
        cy="60"
        r="35"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="0.5"
        opacity="0.3"
      />

      {/* Black vinyl body */}
      <circle cx="60" cy="60" r="55" fill="#1A1A1A" />

      {/* Center label */}
      <circle cx="60" cy="60" r="18" fill={isPlaying ? '#FFB6C1' : '#F4A4A0'} />

      {/* Inner circle details */}
      <circle cx="60" cy="60" r="15" fill="none" stroke="#FBF7F2" strokeWidth="1" />

      {/* Center spindle */}
      <circle cx="60" cy="60" r="4" fill="#2C2C2C" />
    </motion.svg>
  );
}
