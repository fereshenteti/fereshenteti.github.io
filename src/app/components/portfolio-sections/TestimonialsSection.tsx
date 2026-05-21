'use client';

import { ClashDisplay, Satoshi, Handwritten } from '../../../fonts/fonts';
import ArrowHandwritten from '../../assets/arrow-handwritten.svg';
import { motion } from 'framer-motion';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'kindwo-widget': React.HTMLAttributes<HTMLElement> & {
        username?: string;
        'widget-key'?: string;
        'show-title'?: string;
        'show-summary'?: string;
        'show-controls'?: string;
        language?: string;
      };
    }
  }
}

const EMBED_SRC = process.env.NEXT_PUBLIC_KINDWO_EMBED_URL ?? 'https://kindwo.com/embed.js';
const WIDGET_KEY = '4afdb2765b59170e745e5eda3ccbc2b93192b4c5020e916851e3c2f03aea6b9e';

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-submit-cta-wrapper">
          <p className={`testimonials-submit-cta-text ${Handwritten.className}`}>
            These testimonials were gathered via Kindwo, an app that I have created to collect clients testimonials 🚀 
            <br/>
            Worked with me and have something to say?{' '}
            <a
              href="https://kindwo.com/submit/fares"
              target="_blank"
              rel="noopener noreferrer"
              className="testimonials-submit-cta-link"
            >
              Give me your feedback here 🙌
            </a>
          </p>
          <div className="testimonials-submit-cta-arrow-wrapper">
            <ArrowHandwritten className="testimonials-submit-cta-arrow" aria-hidden="true" />
          </div>
        </div>

        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className={`section-eyebrow ${Satoshi.className}`}>Here's what people say about working with me.</span>
        </motion.div>
      </div>

      <kindwo-widget username="fares" widget-key={WIDGET_KEY} />
      <script src={EMBED_SRC} async />

    </section>
  );
}
