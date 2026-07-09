import { Suspense, lazy } from 'react';

// Lazy load themes so their code isn't bundled into the initial load
const JulyFourthTheme = lazy(() => import('./JulyFourthTheme'));
const HalloweenTheme = lazy(() => import('./HalloweenTheme'));
const StPatricksTheme = lazy(() => import('./StPatricksTheme'));

interface ThemeManagerProps {
  activeTheme: string;
  themeKey: number;
}

export default function ThemeManager({ activeTheme, themeKey }: ThemeManagerProps) {
  if (activeTheme === 'normal') return null;

  return (
    <Suspense fallback={null}>
      {activeTheme === 'july4th' && <JulyFourthTheme key={`july4th-${themeKey}`} />}
      {activeTheme === 'halloween' && <HalloweenTheme key={`halloween-${themeKey}`} />}
      {activeTheme === 'stpatricks' && <StPatricksTheme key={`stpatricks-${themeKey}`} />}
      {/* Future themes can be added here */}
    </Suspense>
  );
}
