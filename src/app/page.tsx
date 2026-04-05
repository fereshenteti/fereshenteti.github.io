"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from "react";
import Script from 'next/script';
import BentoBox from './components/bento-box';
// import DetailedCategories from './components/detailed-categories';
import Footer from './components/footer';
import Header_v1 from './components/header/header_v1';
// import HeroSection from './components/hero-section';

// New Portfolio Narrative Sections
import ToolsCloud from './components/portfolio-sections/ToolsCloud';
import ProcessSection from './components/portfolio-sections/ProcessSection';
import SelectedWork from './components/portfolio-sections/SelectedWork';
import SelectedWorkA from './components/portfolio-sections/SelectedWorkA';
import SelectedWorkB from './components/portfolio-sections/SelectedWorkB';
import BrandShowcaseA from './components/portfolio-sections/BrandShowcaseA';
import BrandShowcaseB from './components/portfolio-sections/BrandShowcaseB';
import BrandShowcaseC from './components/portfolio-sections/BrandShowcaseC';
import LogoShowcase from './components/portfolio-sections/LogoShowcase';
// import FrontendProjects from './components/portfolio-sections/FrontendProjects';
import TestimonialsSection from './components/portfolio-sections/Testimonials';
import FinalCTA from './components/portfolio-sections/FinalCTA';
import UIUXSection from './components/portfolio-sections/UIUXSection';
import UIUXShowcaseA from './components/portfolio-sections/UIUXShowcaseA';
import UIUXShowcaseB from './components/portfolio-sections/UIUXShowcaseB';
import UIUXShowcaseC from './components/portfolio-sections/UIUXShowcaseC';
import UIUXShowcaseD from './components/portfolio-sections/UIUXShowcaseD';
import FigmaShowcase from './components/portfolio-sections/FigmaShowcase';
import IllustrationsSection from './components/portfolio-sections/IllustrationsSection';
import DetailedCategories from './components/detailed-categories';

gsap.registerPlugin(useGSAP);

const Home = () => {

  const imageSequenceContainerRef = useRef(null);

  return (
    <div className="App" id="home">

      <Header_v1 />

      <BentoBox />

      {/* Narrative Portfolio Expansion sequence starts here */}
      <LogoShowcase />
      <BrandShowcaseA />
      {/* <BrandShowcaseB />
      <BrandShowcaseC /> */}
      {/* <SelectedWork /> */}
      {/* <SelectedWorkA /> */}
      <SelectedWorkB />

      {/* UI/UX Before & After — compare all 4 variants */}
      {/* <UIUXShowcaseA /> */}
      {/* <UIUXShowcaseB /> */}
      <UIUXShowcaseC />
      {/* <UIUXShowcaseD /> */}
      <FigmaShowcase />

      <ToolsCloud />
      {/* <UIUXSection /> */}
      {/* <FrontendProjects /> */}
      {/* <IllustrationsSection /> */}
      <ProcessSection />
      {/* <TestimonialsSection /> */}
      <FinalCTA />

      {/* <HeroSection/> */}

      {/* <div className="my-img-bg">
        <img className='bg-me' src="assets/backgrounds/me-black.png" />
      </div> */}

      {/* <div id="v0" ref={imageSequenceContainerRef}>
        <canvas id='images'></canvas>
      </div> */}

      {/* <MyCategories /> */}

      {/* <StatsSection /> */}

      {/* <DetailedCategories /> */}

      {/* Calendly inline widget */}
      {/* <div className="calendly-inline-widget" data-url="https://calendly.com/fereshenteti/30min" style={{ minWidth: '320px', height: '700px' }} />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" /> */}

      {/* Calendly popup */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      <Footer />

    </div>
  )
}

export default Home;