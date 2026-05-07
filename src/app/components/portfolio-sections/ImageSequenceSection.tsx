'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { motion, useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import { ClashDisplay } from '../../../fonts/fonts';

const FRAME_COUNT = 111;
const FRAME_PATH = (n: number) =>
  `assets/my_image_sequence/${String(n).padStart(5, '0')}.png`;

const ImageSequenceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const textOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.7, 0.9], [40, 0]);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Fit canvas to window
    const { width, height } = canvas;
    const scale = Math.max(width / img.naturalWidth, height / img.naturalHeight);
    const sw = img.naturalWidth * scale;
    const sh = img.naturalHeight * scale;
    const sx = (width - sw) / 2;
    const sy = (height - sh) / 2;

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, sx, sy, sw, sh);
  }, []);

  // Preload all frames only when the section enters the viewport
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const imgs: HTMLImageElement[] = [];
        for (let i = 1; i <= FRAME_COUNT; i++) {
          const img = new Image();
          img.src = FRAME_PATH(i);
          imgs.push(img);
        }
        imagesRef.current = imgs;
        imgs[0].onload = () => drawFrame(0);
      },
      { rootMargin: '200px' }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [drawFrame]);

  // Resize canvas to fill viewport
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(frameRef.current);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [drawFrame]);

  // Drive frames from scroll
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const index = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.round(v * (FRAME_COUNT - 1)))
    );
    if (index === frameRef.current) return;
    frameRef.current = index;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => drawFrame(index));
  });

  return (
    <section className="image-seq-section" ref={sectionRef}>
      <div className="image-seq-sticky">
        <div className="image-seq-bg" />
        <canvas ref={canvasRef} className="image-seq-canvas" />
        <motion.div
          className={`image-seq-text ${ClashDisplay.className}`}
          style={{ opacity: textOpacity, y: textY }}
        >
          <span>Let's</span> <span>get</span> <span>creative!</span>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageSequenceSection;
