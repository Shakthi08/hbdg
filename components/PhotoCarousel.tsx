'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PHOTOS = [
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-fJJDovYOe6ix1gaPk9c5SE4CzFdxw0.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-EMZDkJfasoKOHznwF8COc48ZwlVEdf.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-BoXw2khPlxUCYhzhKsQ7QVZhGffeLe.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-ZMFB8xSPfKGIqtCPWrXH6rZQ8ENP3I.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-Pce0ArQXdNnw3LJFCgsYq9mXxYA6vu.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-8yATXWQ5la70lTclHo0X2KSzkGCxp9.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-wILTamEYjRXscFfFhmz5hphdlCHCDa.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-1XkKtdvlxSwEsDlUKDnsBVskJJvGuQ.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-F6HxOVktNpe20cER6nOPkovoSDjLF1.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/10-CXcXntYwRqzytQXuHjtqP67QJ2hsEb.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11-GVyiDhuBFP85RJxWdVYfdyn1ZrNcq5.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-EBzwZQre7FZLHaSlitEhiKFzGruwo4.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-4qRy9p0k2mhargeSQAZZqyxJX5FK1a.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14-vSVhnAeWjoMtLxQ3Se6BBp1zuKTHhf.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-nDx8eNf2epzRIRlQSiuHVPC856u5U2.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16-pwGUqHzqBV3QwNO3pdYEE9u2D60V8c.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-eMP7xcye6ln2WAZUifiPIGjcgIj86l.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/18-zFaWujBKCb4D01zwmOP2ZJdWnXcfFH.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-zqfs1HJ0pdvWO7g2jNWzREn61Ss80I.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20-4jT6VFOOs9pJyqlnMYKSV5YJvj61eH.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-5P97LAbhQmT6d1pfNk2NDyo6IgfkiL.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-MMD37Tk9SfIZib0xUgMF4fWJ8uO5cA.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-DZnPS73OtLpaPJKVSoMGbrNRTXt7n1.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24-msUBDczpgfTxxb4zFzpAikRyaHXada.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25-6f85L9earG6D8XCTk7oJKMpz3Vwy3Z.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/26-8coykhihPDB5DoYUaNqYjXbNx08Yfh.jpg',
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27-HzcILMQVcrS2oLQxlRFClp48rDFp5I.jpg',
];

export function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % PHOTOS.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + PHOTOS.length) % PHOTOS.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12">
      {/* Main Carousel */}
      <div className="w-full max-w-4xl mx-auto px-4">
        <div
          ref={containerRef}
          className="relative w-full aspect-[3/4] md:aspect-[4/5] lg:aspect-auto lg:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 via-violet-100 to-purple-100 shadow-2xl"
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.img
              key={current}
              src={PHOTOS[current]}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              alt={`Memory ${current + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6 px-2">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all hover:scale-110 active:scale-95"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="text-center">
            <p className="text-sm font-semibold text-foreground">
              {current + 1} / {PHOTOS.length}
            </p>
          </div>

          <button
            onClick={next}
            className="p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all hover:scale-110 active:scale-95"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Indicator Dots */}
      <div className="flex gap-2 flex-wrap justify-center max-w-4xl">
        {PHOTOS.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? 'bg-primary w-8' : 'bg-muted hover:bg-muted-foreground'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Tips Text */}
      <p className="text-xs md:text-sm text-muted-foreground text-center mt-4">
        jus swipe thru pics or use arrows :&#41;
      </p>
    </div>
  );
}
