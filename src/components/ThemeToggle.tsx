import { motion } from 'motion/react';
import { Cloud, Star, Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  toggle: () => void;
}

export default function ThemeToggle({ isDarkMode, toggle }: ThemeToggleProps) {
  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={isDarkMode}
      className="relative w-[61px] h-8 shrink-0 flex items-center justify-center overflow-hidden rounded-full shadow-inner dark:shadow-black/60 border border-black/5 dark:border-white/10 transition-all duration-700 hover:scale-105 active:scale-95"
      style={{
        backgroundColor: isDarkMode ? '#0f172a' : '#38bdf8'
      }}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <span className="sr-only">Switch to {isDarkMode ? 'light' : 'dark'} mode</span>
      {/* Sky Elements - Day */}
      <motion.div 
        initial={false}
        animate={{ opacity: isDarkMode ? 0 : 1, y: isDarkMode ? 15 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 pointer-events-none"
      >
        <Cloud size={14} className="absolute top-1 left-1 text-white/90 fill-white/90" />
        <Cloud size={10} className="absolute bottom-1 right-1.5 text-white/70 fill-white/70" />
        <Cloud size={20} className="absolute top-[-6px] right-3 text-white/30 fill-white/30" />
      </motion.div>

      {/* Sky Elements - Night */}
      <motion.div 
        initial={false}
        animate={{ opacity: isDarkMode ? 1 : 0, y: isDarkMode ? 0 : -15 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 pointer-events-none"
      >
        <Star size={8} className="absolute top-1 left-2 text-yellow-100/90 fill-yellow-100" />
        <Star size={5} className="absolute top-3 right-3 text-yellow-100/60 fill-yellow-100" />
        <Star size={10} className="absolute bottom-1 left-6 text-yellow-100/40 fill-yellow-100" />
      </motion.div>

      {/* Rotating Orbit */}
      <motion.div
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 45, damping: 13 }}
        className="absolute pointer-events-none"
        style={{
          width: '60px',
          height: '60px',
          top: '16px',
          left: '50%',
          marginLeft: '-30px'
        }}
      >
        {/* Sun */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div initial={false} animate={{ rotate: isDarkMode ? -180 : 0 }} transition={{ duration: 0.8 }}>
            <Sun size={18} className="text-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.8)] fill-yellow-300" />
          </motion.div>
        </div>
        
        {/* Moon */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <motion.div initial={false} animate={{ rotate: isDarkMode ? -180 : 0 }} transition={{ duration: 0.8 }}>
            <Moon size={18} className="text-slate-100 drop-shadow-[0_0_8px_rgba(226,232,240,0.8)] fill-slate-100" />
          </motion.div>
        </div>
      </motion.div>
    </button>
  );
}
