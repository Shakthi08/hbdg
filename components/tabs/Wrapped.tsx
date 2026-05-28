'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';
import { VinylRecord } from '../VinylRecord';

const STATS = [
  {
    number: '4,500+',
    label: 'Hours spent chatting with you',
  },
  {
    number: '730+',
    label: 'Days of non stop communication',
  },
  {
    number: '5,00,000+',
    label: 'Messages exchanged',
  },
  {
    number: '101%',
    label: 'Rating as best friend',
  },
  {
    number: '∞',
    label: 'Love and support forever',
  },
  {
    number: '∞',
    label: 'Love and support forever',
  },
  
];

const PLAYLISTS = [
  { id: 1, name: 'Your fav', artists: 'shakthib' },
];

export function Wrapped() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      {/* Spotify Wrapped Style Stats */}
      <div className="bg-gradient-to-br from-accent via-primary to-secondary rounded-2xl p-8 md:p-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-12">
            Friendship Wrapped
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Audio Player Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* <Card className="p-8 bg-gradient-to-br from-card to-muted">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
            <div className="flex-shrink-0">
              <motion.div
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{
                  duration: 4,
                  repeat: isPlaying ? Infinity : 0,
                  ease: 'linear',
                }}
              >
                <VinylRecord isPlaying={isPlaying} />
              </motion.div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-primary mb-2">Your fav</h3>
              <p className="text-muted-foreground mb-6">shakthibg</p>

              <div className="flex gap-4 justify-center md:justify-start">
                <Button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isPlaying ? (
                    <>
                      <Pause size={20} /> Pause
                    </>
                  ) : (
                    <>
                      <Play size={20} /> Play
                    </>
                  )}
                </Button>
              </div>

              {isPlaying && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-primary mt-4 italic"
                >
                  🎵 Now playing...
                </motion.p>
              )}
            </div>
          </div>
        </Card> */}
      </motion.div>

      {/* Additional Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid md:grid-cols-1 gap-6"
      >
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-violet-50">
          <h4 className="font-semibold text-primary mb-3">Top Moments</h4>
          <ul className="space-y-2 text-sm text-foreground">
            <li>✓ Lateee night convos</li>
            <li>✓ Endless supporting</li>
            <li>✓ 24/7 motivation</li>
            <li>✓ Unforgettable memories</li>
            <li>✓ Cute little fights</li>
          </ul>
        </Card>

        {/* <Card className="p-6 bg-gradient-to-br from-violet-50 to-purple-50">
          <h4 className="font-semibold text-primary mb-3">Top Phrases</h4>
          <ul className="space-y-2 text-sm text-foreground">
            <li>&quot;What did u deoe?&quot;</li>
            <li>&quot;No you&apos;re right, but...&quot;</li>
            <li>&quot;OMG wait, but also...&quot;</li>
            <li>&quot;You&apos;re literally the best&quot;</li>
          </ul>
        </Card> */}
      </motion.div>
    </motion.div>
  );
}
