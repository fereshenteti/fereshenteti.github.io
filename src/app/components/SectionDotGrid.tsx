'use client';

import DotGrid from '@/app/animations/DotGrid/DotGrid';
import { useTheme } from '@/app/context/ThemeContext';

// Always-dark sections (their backgrounds are always #111 or similar regardless of theme)
interface Props {
  forceDark?: boolean;
}

export default function SectionDotGrid({ forceDark = false }: Props) {
  const { theme } = useTheme();
  const isDark = forceDark || theme === 'dark';
  const baseColor = isDark ? '#3a3a3a' : '#c8c8c8';

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
    }}>
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
