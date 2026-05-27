'use client';

import { motion } from 'framer-motion';

export function BirthdayCakeSVG() {
  const candleVariants = {
    flicker: {
      y: [0, -2, 0],
      opacity: [1, 0.7, 1],
    },
  };

  return (
    <div className="flex justify-center mb-8">
      <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-lg">
        {/* Cake plate */}
        <ellipse cx="100" cy="160" rx="70" ry="15" fill="#E6D5E8" opacity="0.3" />

        {/* Bottom cake layer */}
        <rect x="40" y="120" width="120" height="40" fill="#F4A4A0" rx="4" />

        {/* Middle cake layer */}
        <rect x="50" y="80" width="100" height="40" fill="#FFB6C1" rx="4" />

        {/* Top cake layer */}
        <rect x="60" y="40" width="80" height="40" fill="#F4A4A0" rx="4" />

        {/* Frosting squiggles */}
        <path
          d="M 45 125 Q 50 115 60 120 Q 70 125 80 120 Q 90 115 100 120 Q 110 125 120 120 Q 130 115 140 120 Q 150 125 155 125"
          stroke="#FFB6C1"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M 55 85 Q 60 75 70 80 Q 80 85 90 80 Q 100 75 110 80 Q 120 85 130 80 Q 140 75 145 80"
          stroke="#E6D5E8"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        {/* Candles */}
        {[30, 70, 100, 130, 160].map((x, i) => (
          <motion.g
            key={i}
            animate="flicker"
            variants={candleVariants}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          >
            {/* Candle wick */}
            <line x1={x} y1="35" x2={x} y2="25" stroke="#333" strokeWidth="1" />

            {/* Flame */}
            <motion.ellipse
              cx={x}
              cy="22"
              rx="4"
              ry="6"
              fill="#FF6B35"
              animate={{ scale: [1, 1.1, 0.95] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />

            {/* Flame glow */}
            <circle
              cx={x}
              cy="22"
              r="6"
              fill="#FF6B35"
              opacity="0.2"
              animate={{ r: [6, 8, 6] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />

            {/* Candle stick */}
            <rect x={x - 2} y="35" width="4" height="25" fill="#FDD835" rx="2" />
          </motion.g>
        ))}

        {/* Cake decoration - hearts */}
        <text x="100" y="100" fontSize="24" textAnchor="middle" fill="#E6D5E8">
          ♥
        </text>
      </svg>
    </div>
  );
}
