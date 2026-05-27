'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const LETTER_CONTENT = `Dear Geetika, many more happy returns of the day!!! or in my style, Wishing u many more candles to blow! 🙄🙂

I just want to say how grateful asf im to have u in my life. You are not just a friend but a sister, and a source of endless joy, fun, support, motivation blablabla...

Idk how in the world we became so close, but trust, m so lucky to have it happened! U r like my daily diary, anything i do, the first one to know it is u, and i love that!! 

We can talk about anything and everything, and i cherish every moment we spend together. From our crazy fights to our deeeeep chats, every memory with u is a treasure. 

U r not just a friend but a sister, and i am so grateful for how we are!!! Tbh, i often feel how me or my life wud have been if i had never met u and realise that in so many ways you have made it bettter...  

I just want to say thankyousmmmmm ❤️ for being so aamaazzing, for always being there for me, and for making my life so much brighttter.

Finally let me say that i love u sooo muchhhh and wish u allllll the happiness in the world on ur bdayy and always!!!

Btw try to get a bf 🫠😵‍💫

Me ♥`;

const paragraphs = LETTER_CONTENT.split('\n\n');

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

export function Letter() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full"
    >
      <Card className="h-full bg-gradient-to-b from-violet-50 to-purple-50 p-8 md:p-12 shadow-lg">
        <motion.div
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center"
            variants={paragraphVariants}
          >
            HBDDDDDDDDDD
          </motion.h2>

          <div className="prose prose-sm max-w-none text-foreground leading-relaxed space-y-6">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={paragraphVariants}
                className="text-base md:text-lg text-foreground/90 text-justify md:text-left whitespace-pre-wrap"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            variants={paragraphVariants}
            className="mt-8 pt-8 border-t-2 border-primary/20 text-center"
          >
            <p className="text-sm text-muted-foreground italic">
              Read with love on your special day
            </p>
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  );
}
