'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ClashDisplay } from '../../../fonts/fonts';

const ImageSequenceSection = () => {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const videoRef    = useRef<HTMLVideoElement>(null);
  const targetRef   = useRef(0);   // scroll progress we want to reach
  const currentRef  = useRef(0);   // where we currently are (lerped)
  const rafRef      = useRef<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const textOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const textY       = useTransform(scrollYProgress, [0.7, 0.9], [40, 0]);

  // Keep target in sync with scroll (no RAF here — just store the value)
  useEffect(() => {
    return scrollYProgress.on('change', (v) => { targetRef.current = v; });
  }, [scrollYProgress]);

  // Start the lerp loop only once the video has enough data to seek
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let started = false;

    const startLoop = () => {
      if (started) return;
      started = true;

      const loop = () => {
        if (video.duration) {
          const diff = targetRef.current - currentRef.current;
          if (Math.abs(diff) > 0.001) {
            currentRef.current += diff * 0.12;
            const time = currentRef.current * video.duration;
            if (typeof (video as any).fastSeek === 'function') {
              (video as any).fastSeek(time);
            } else {
              video.currentTime = time;
            }
          }
        }
        rafRef.current = requestAnimationFrame(loop);
      };

      rafRef.current = requestAnimationFrame(loop);
    };

    // Metadata may have already loaded before this effect ran
    if (video.readyState >= 1) {
      startLoop();
    } else {
      video.addEventListener('loadedmetadata', startLoop);
    }

    return () => {
      video.removeEventListener('loadedmetadata', startLoop);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="image-seq-section" ref={sectionRef}>
      <div className="image-seq-sticky">
        <video
          ref={videoRef}
          className="image-seq-video"
          src="assets/my_creative/my_creative_seekable.mp4"
          preload="auto"
          muted
          playsInline
          disablePictureInPicture
        />
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
