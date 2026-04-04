'use client';

import DotGrid from '@/app/animations/DotGrid/DotGrid';
import { useTheme } from '@/app/context/ThemeContext';

export default function DotGridBackground() {
  const { theme } = useTheme();

  // Use a mid-gray that's visible on both light and dark backgrounds
  const baseColor = theme === 'dark' ? '#3a3a3a' : '#c8c8c8';

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
      <DotGrid
        dotSize={4}
        gap={22}
        baseColor={baseColor}
        activeColor="#FF791B"
        proximity={120}
        shockRadius={220}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </div>
  );
}
