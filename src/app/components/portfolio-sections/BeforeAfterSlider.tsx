'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { animate, useInView } from 'framer-motion';
import { Satoshi } from '../../../fonts/fonts';

interface Props {
  before: string;
  after: string;
}

const BeforeAfterSlider = ({ before, after }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(80);
  const isDragging = useRef(false);
  const animControls = useRef<any>(null);
  const isInView = useInView(containerRef, { once: false, margin: '-10%' });

  useEffect(() => {
    if (isInView) {
      if (isDragging.current) return;
      animControls.current?.stop();
      setPos(80);
      animControls.current = animate(80, 50, {
        duration: 1.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        onUpdate: (v) => {
          if (!isDragging.current) setPos(v);
        },
      });
    } else {
      animControls.current?.stop();
      if (!isDragging.current) setPos(80);
    }
    return () => animControls.current?.stop();
  }, [isInView]);

  const updatePos = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    setPos(Math.min(Math.max(((clientX - left) / width) * 100, 0), 100));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    animControls.current?.stop();
    isDragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updatePos(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePos(e.clientX);
  };

  const onPointerUp = () => { isDragging.current = false; };

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* After — base layer */}
      <img src={after} alt="After" className="ba-img" draggable={false} />

      {/* Before — clipped */}
      <div className="ba-before-wrap" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt="Before" className="ba-img" draggable={false} />
        <span className={`ba-label ba-label-before ${Satoshi.className}`}>Before</span>
      </div>

      {/* Handle */}
      <div className="ba-handle" style={{ left: `${pos}%` }}>
        <div className="ba-line" />
        <div className="ba-knob">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M8 5L3 11L8 17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 5L19 11L14 17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <span className={`ba-label ba-label-after ${Satoshi.className}`}>After</span>
    </div>
  );
};

export default BeforeAfterSlider;
