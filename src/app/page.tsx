"use client";
import Script from 'next/script';
import BentoBox from './components/bento-box';
import Footer from './components/footer';
import Header_v1 from './components/header/header_v1';

import ToolsCloud from './components/portfolio-sections/ToolsCloud';
import ProcessSection from './components/portfolio-sections/ProcessSection';
import SelectedWorkB from './components/portfolio-sections/SelectedWorkB';
import BrandShowcaseA from './components/portfolio-sections/BrandShowcaseA';
import LogoShowcase from './components/portfolio-sections/LogoShowcase';
import FinalCTA from './components/portfolio-sections/FinalCTA';
import UIUXShowcaseC from './components/portfolio-sections/UIUXShowcaseC';
import FigmaShowcase from './components/portfolio-sections/FigmaShowcase';
import ImageSequenceSection from './components/portfolio-sections/ImageSequenceSection';
import LogoAnimationsSection from './components/portfolio-sections/LogoAnimationsSection';

const Home = () => {
  return (
    <div className="App" id="home">

      <Header_v1 />
      <BentoBox />

      <LogoShowcase />
      <LogoAnimationsSection />
      <BrandShowcaseA />
      <SelectedWorkB />

      <UIUXShowcaseC />
      <FigmaShowcase />

      <ToolsCloud />
      <ProcessSection />

      <ImageSequenceSection />
      <FinalCTA />

      {/* Calendly popup */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />

      <Footer />

    </div>
  )
}

export default Home;
