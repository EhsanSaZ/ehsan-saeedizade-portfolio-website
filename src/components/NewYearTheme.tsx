import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = [
  'text-amber-500 dark:text-amber-400',
  'text-yellow-600 dark:text-yellow-300',
  'text-purple-600 dark:text-purple-400',
  'text-cyan-600 dark:text-cyan-400',
  'text-pink-600 dark:text-pink-400',
];

const NEW_YEAR_EMOJIS = ['🎆', '🎇', '🥂', '🍾', '✨', '🎉', '🎊'];

// In December (e.g., Dec 30, Dec 31), celebrate the upcoming year; in January and other months, use the current year
export function getNewYearTarget(date: Date = new Date()): number {
  return date.getMonth() === 11 ? date.getFullYear() + 1 : date.getFullYear();
}

interface FallingItem {
  id: number;
  left: number;
  size: number;
  color: string;
  duration: number;
  emoji: string;
  isDigit: boolean;
  rotate: number;
}

export default function NewYearTheme() {
  const [targetYear] = useState(() => getNewYearTarget());
  const [elements, setElements] = useState<FallingItem[]>([]);

  useEffect(() => {
    const yearDigits = String(targetYear).split('');
    let idCounter = 0;
    let digitCursor = 0;

    const interval = setInterval(() => {
      // Weight heavily (~65%) toward cycling the year's digits (e.g. 2, 0, 2, 7) so they are dense and recognizable
      const isDigit = Math.random() < 0.65;
      const emoji = isDigit
        ? yearDigits[digitCursor++ % yearDigits.length]
        : NEW_YEAR_EMOJIS[Math.floor(Math.random() * NEW_YEAR_EMOJIS.length)];

      setElements(prev => [
        ...prev,
        {
          id: idCounter++,
          left: Math.random() * 94 + 2,
          size: isDigit ? Math.random() * 18 + 22 : Math.random() * 18 + 18,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          duration: Math.random() * 3.5 + 3.5, // 3.5 to 7 seconds to fall
          emoji,
          isDigit,
          rotate: isDigit ? Math.random() * 28 - 14 : (Math.random() > 0.5 ? 360 : -360),
        }
      ]);
    }, 70); // Dense spawn roughly every 70ms

    // Stop generating new elements after 6 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 6000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [targetYear]);

  const handleAnimationComplete = (id: number) => {
    setElements(prev => prev.filter(el => el.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[200] overflow-hidden">
      {/* Gold, Purple, and Cyan Midnight Fireworks Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none flex opacity-20 dark:opacity-30 mix-blend-screen">
        <div className="w-1/3 h-full bg-amber-500 blur-[150px] transform -translate-x-1/4"></div>
        <div className="w-1/3 h-full bg-purple-600 blur-[150px]"></div>
        <div className="w-1/3 h-full bg-cyan-500 blur-[150px] transform translate-x-1/4"></div>
      </div>

      {/* Bottom Horizontal Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-purple-500 to-cyan-500 shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>

      <AnimatePresence>
        {elements.map(el => (
          <motion.div
            key={el.id}
            initial={{ y: -50, opacity: 0, rotate: 0 }}
            animate={{ y: '100vh', opacity: 1, rotate: el.rotate }}
            exit={{ opacity: 0 }}
            transition={{ duration: el.duration, ease: 'linear' }}
            onAnimationComplete={() => handleAnimationComplete(el.id)}
            className={`absolute ${el.color} text-[length:var(--size)] ${
              el.isDigit ? 'font-mono font-black drop-shadow-[0_0_8px_currentColor] select-none' : ''
            }`}
            style={{ left: `${el.left}%`, '--size': `${el.size}px` } as React.CSSProperties}
          >
            {el.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black text-white px-6 py-3 rounded-full shadow-lg border border-amber-500/30 backdrop-blur-md z-50 overflow-hidden"
      >
        <motion.span
          animate={{ y: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-xl md:text-2xl inline-block shrink-0"
        >
          🎆
        </motion.span>

        <span className="font-bold text-[10px] sm:text-xs md:text-sm tracking-wider md:tracking-widest flex flex-wrap justify-center gap-x-1 md:gap-x-2 items-center text-center">
          <span className="text-amber-400">HAPPY</span>
          <span className="text-purple-400">NEW YEAR</span>
          <span className="text-cyan-400">{targetYear}</span>
        </span>

        <motion.span
          animate={{ y: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
          className="text-base md:text-lg inline-block font-black text-white shrink-0"
        >
          🥂
        </motion.span>
      </motion.div>
    </div>
  );
}

