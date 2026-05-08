'use client';

import SectionDotGrid from '../SectionDotGrid';
import { motion, type Variants } from 'framer-motion';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import { MyCustomButton } from '../common-ui/custom-button';

const contentVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const FinalCTA = () => {
  return (
    <section className="final-cta-section" style={{ position: 'relative' }}>
      <SectionDotGrid />
      <div className="portfolio-container">
        <motion.div
          className="cta-content"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span variants={itemVariants} className={`section-eyebrow ${Satoshi.className}`}>
            Let's Work Together
          </motion.span>

          <motion.h2 variants={itemVariants} className={`cta-title ${ClashDisplay.className}`}>
            Have a project in mind? Let's make it happen
          </motion.h2>

          <motion.p variants={itemVariants} className={`cta-subtitle ${Satoshi.className}`}>
            I take on a small number of freelance projects alongside my full-time work — startups, agencies, and brands who need sharp design, clean code, or both. If that sounds like your project, let's talk.
          </motion.p>

          <motion.div variants={itemVariants} className="cta-actions">
            <MyCustomButton btnIcon="assets/icons/calendar.svg" btnText="Let's schedule a call" className="primary-cta" onClick={() => window.open('https://calendly.com/fereshenteti/30min', '_blank')} />
            <MyCustomButton btnIcon="assets/icons/external-link.svg" btnText="View Resume" className="secondary-cta" onClick={() => window.open('/assets/my-cv/Fares Hentati Resume 2026 EN.pdf', '_blank')} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
