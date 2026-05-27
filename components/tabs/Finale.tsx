'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BirthdayCakeSVG } from '../BirthdayCakeSVG';

const COMPLIMENTS = [
  "Thank you for being such a supportive motivating friend!!!",
  "Thank you for always being there for me when i neeeded!!!",
  "Thank you for listening to my gay ahh love stories and giving me advice!!! 🙄",
  "Thank you for being my friend!!! 🫠❤️",
  "Thank you for being the best friend ever!!! 🥹❤️",
  "Thank you for critically evaluating me and giving me honest advices!!!",
  "Thank you for motivating me to be a better MAN (gentle)!!!", 
  "Get into gym, build smth :))"
];

export function Finale() {
  const [compliment, setCompliment] = useState<string | null>(null);
  const [clickCount, setClickCount] = useState(0);

  const handleHypeClick = () => {
    const randomCompliment = COMPLIMENTS[Math.floor(Math.random() * COMPLIMENTS.length)];
    setCompliment(randomCompliment);
    setClickCount(clickCount + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full flex items-center justify-center"
    >
      <Card className="w-full max-w-2xl p-8 md:p-12 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Grand finale
          </h2>

          <p className="text-lg text-foreground/80">
            Get some complimentsss geetu ONLY TODAYYY!
          </p>

          <BirthdayCakeSVG />

          <motion.button
            onClick={handleHypeClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-block mb-8"
          >
            <Button
              size="lg"
              className="px-12 py-6 text-xl font-bold bg-gradient-to-r from-primary via-accent to-secondary hover:shadow-lg hover:scale-105 transition-all text-white"
            >
              MAKE ME HAPPY!!!
            </Button>
          </motion.button>

          <AnimatePresence mode="wait">
            {compliment && (
              <motion.div
                key={compliment}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30,
                }}
                className="mb-8"
              >
                <Card className="p-6 bg-gradient-to-br from-pink-100 to-rose-50 border-2 border-primary">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl md:text-3xl font-bold text-primary"
                  >
                    {compliment}
                  </motion.p>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {clickCount > 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-muted-foreground"
            >
              You've received {clickCount} compliment{clickCount !== 1 ? 's' : ''}. Continue! 🎉
            </motion.p>
          )}

          <div className="pt-8 border-t border-border">
            <p className="text-lg font-semibold text-primary mb-4">
              Happy Birthdayyyy! 🎂✨
            </p>
            <p className="text-foreground/75">
              Wishing you many more candles to blow :&#41;&#41;&#41;&#41;
            </p>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
}
