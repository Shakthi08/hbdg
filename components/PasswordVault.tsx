'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { ConfettiAnimation } from './ConfettiAnimation';

const CORRECT_PASSWORD = 'shakthiissweet';

const ERROR_MESSAGES = [
  "Uh oh nope!. Try again, Geeta!",
  "Bruh no! Wrong password. One more shot?",
  "Think harder gurl... or just ask me :/",
];

interface PasswordVaultProps {
  onUnlock: () => void;
}

export function PasswordVault({ onUnlock }: PasswordVaultProps) {
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.toLowerCase() === CORRECT_PASSWORD) {
      setShowConfetti(true);
      return;
    }

    setIsShaking(true);
    setAttempts(attempts + 1);
    setErrorMessage(ERROR_MESSAGES[Math.min(attempts, ERROR_MESSAGES.length - 1)]);
    setPassword('');

    setTimeout(() => setIsShaking(false), 500);
  };

  const handleConfettiComplete = () => {
    setShowConfetti(false);
    setTimeout(onUnlock, 200);
  };

  return (
    <>
      <ConfettiAnimation trigger={showConfetti} onComplete={handleConfettiComplete} />
      <div className="min-h-screen bg-gradient-to-br from-background via-card to-background flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="w-full max-w-md p-8 shadow-lg">
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-primary mb-2">
                  Enter Passsssword
                </h1>
                <p className="text-muted-foreground">
                  Password required to unlock the celebration hehe
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <Input
                    type="password"
                    placeholder="Enter password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 text-center text-lg tracking-widest"
                    disabled={showConfetti}
                  />
                </motion.div>

                {errorMessage && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-red-600 text-center"
                  >
                    {errorMessage}
                  </motion.p>
                )}

                <Button
                  type="submit"
                  className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                  disabled={showConfetti}
                >
                  OPENNNNNNNNNN
                </Button>
              </form>

              <div className="text-center text-xs text-muted-foreground">
                {attempts > 0 && `Attempts: ${attempts}`}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </>
  );
}
