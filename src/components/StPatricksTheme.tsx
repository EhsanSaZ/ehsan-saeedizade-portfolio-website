import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const COLORS = ['text-green-500', 'text-emerald-500', 'text-yellow-400', 'text-lime-400'];
const ST_PATRICKS_EMOJIS = ['🍀', '☘️', '🤞', '💚', '🎩', '🍺'];

export default function StPatricksTheme() {
  const [elements, setElements] = useState<{ id: number; left: number; size: number; color: string; duration: number; emoji: string }[]>([]);

  useEffect(() => {
    let idCounter = 0;
    const interval = setInterval(() => {
      setElements(prev => [
        ...prev,
        {
          id: idCounter++,
          left: Math.random() * 100,
          size: Math.random() * 20 + 16, // 16px to 36px
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          duration: Math.random() * 4 + 4, // 4 to 8 seconds to fall
          emoji: ST_PATRICKS_EMOJIS[Math.floor(Math.random() * ST_PATRICKS_EMOJIS.length)]
        }
      ]);
    }, 200); // Generates an element roughly every 200ms

    // Stop generating new elements after 5 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const handleAnimationComplete = (id: number) => {
    setElements(prev => prev.filter(el => el.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[200] overflow-hidden">
      {/* Green and Gold Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none flex opacity-10 dark:opacity-5 mix-blend-screen">
        <div className="w-1/3 h-full bg-green-600 blur-[150px] transform -translate-x-1/4"></div>
        <div className="w-1/3 h-full bg-yellow-500 blur-[150px]"></div>
        <div className="w-1/3 h-full bg-emerald-600 blur-[150px] transform translate-x-1/4"></div>
      </div>

      {/* Bottom Horizontal Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-yellow-500 to-emerald-600 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>

      <AnimatePresence>
        {elements.map(el => (
          <motion.div
            key={el.id}
            initial={{ y: -50, opacity: 0, rotate: 0 }}
            animate={{ y: '100vh', opacity: 1, rotate: Math.random() > 0.5 ? 360 : -360 }}
            exit={{ opacity: 0 }}
            transition={{ duration: el.duration, ease: 'linear' }}
            onAnimationComplete={() => handleAnimationComplete(el.id)}
            className={`absolute ${el.color} text-[length:var(--size)]`}
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
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black text-white px-6 py-3 rounded-full shadow-lg border border-green-500/30 backdrop-blur-md z-50 overflow-hidden"
      >
        <motion.span
          animate={{ y: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-xl md:text-2xl inline-block shrink-0"
        >
          🍀
        </motion.span>

        <span className="font-bold text-[10px] sm:text-xs md:text-sm tracking-wider md:tracking-widest flex flex-wrap justify-center gap-x-1 md:gap-x-2 items-center text-center">
          <span className="text-green-500">HAPPY</span>
          <span className="text-yellow-400">ST. PATRICK'S DAY</span>
        </span>

        <motion.span
          animate={{ y: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
          className="text-base md:text-lg inline-block font-black text-white shrink-0"
        >
          ☘️
        </motion.span>
      </motion.div>
    </div>
  );
}
