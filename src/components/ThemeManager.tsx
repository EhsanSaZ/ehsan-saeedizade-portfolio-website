import { Suspense, lazy } from 'react';

// Lazy load themes so their code isn't bundled into the initial load
const JulyFourthTheme = lazy(() => import('./JulyFourthTheme'));

interface ThemeManagerProps {
  activeTheme: string;
  themeKey: number;
}

export default function ThemeManager({ activeTheme, themeKey }: ThemeManagerProps) {
  if (activeTheme === 'normal') return null;

  return (
    <Suspense fallback={null}>
      {activeTheme === 'july4th' && <JulyFourthTheme key={`july4th-${themeKey}`} />}
      {/* Future themes can be added here */}
    </Suspense>
  );
}
