import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

const COLORS = ['text-red-500', 'text-white', 'text-blue-500'];

export default function JulyFourthTheme() {
  const [stars, setStars] = useState<{ id: number; left: number; size: number; color: string; duration: number }[]>([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const today = new Date();
    // Month is 0-indexed, so 6 is July.
    if (today.getMonth() === 6 && today.getDate() === 4) {
      setIsActive(true);
    }
  }, []);

  useEffect(() => {
    if (!isActive) return;

    let idCounter = 0;
    const interval = setInterval(() => {
      setStars(prev => [
        ...prev,
        {
          id: idCounter++,
          left: Math.random() * 100,
          size: Math.random() * 16 + 8, // 8px to 24px
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          duration: Math.random() * 3 + 3, // 3 to 6 seconds to fall
        }
      ]);
    }, 150); // Generates a star roughly every 150ms

    // Stop generating new stars after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isActive]);

  const handleAnimationComplete = (id: number) => {
    setStars(prev => prev.filter(star => star.id !== id));
  };

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[200] overflow-hidden">
      {/* Red, White, and Blue Glow Overlay */}
      <div className="absolute inset-0 pointer-events-none flex opacity-20 dark:opacity-30 mix-blend-screen">
        <div className="w-1/3 h-full bg-red-600 blur-[150px] transform -translate-x-1/4"></div>
        <div className="w-1/3 h-full bg-white blur-[150px]"></div>
        <div className="w-1/3 h-full bg-blue-600 blur-[150px] transform translate-x-1/4"></div>
      </div>
      
      {/* Bottom Horizontal Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-white to-blue-600 shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>

      <AnimatePresence>
        {stars.map(star => (
          <motion.div
            key={star.id}
            initial={{ y: -50, opacity: 1, rotate: 0 }}
            animate={{ y: '100vh', opacity: 1, rotate: 360 }}
            exit={{ opacity: 0 }}
            transition={{ duration: star.duration, ease: 'linear' }}
            onAnimationComplete={() => handleAnimationComplete(star.id)}
            className={`absolute ${star.color}`}
            style={{ left: `${star.left}%` }}
          >
            <Star size={star.size} fill="currentColor" />
          </motion.div>
        ))}
      </AnimatePresence>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black text-white px-6 py-2.5 rounded-full border border-zinc-800 shadow-xl"
      >
        <motion.span 
          animate={{ y: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-2xl inline-block"
        >
          🎆
        </motion.span>

        <span className="font-bold text-sm tracking-widest flex gap-2 items-center">
          <span className="text-red-500">AMERICA</span> 
          <span>250TH</span> 
          <span className="text-blue-500">ANNIVERSARY</span> 
          <span className="text-zinc-400 font-normal">(1776 - 2026)</span>
        </span>

        <motion.span 
          animate={{ y: [-3, 3, -3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
          className="text-lg inline-block font-black text-white"
        >
          US
        </motion.span>
      </motion.div>
    </div>
  );
}
