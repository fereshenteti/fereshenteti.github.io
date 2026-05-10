"use client";
import BentoBox from './components/bento-box';
import Footer from './components/footer';
import Header_v1 from './components/header/header_v1';

import ToolsCloud from './components/portfolio-sections/ToolsCloud';
import ProcessSection from './components/portfolio-sections/ProcessSection';
import SelectedWorkB from './components/portfolio-sections/SelectedWorkB';
import UXProjectsShowcase from './components/portfolio-sections/UXProjectsShowcase';
import BrandShowcaseA from './components/portfolio-sections/BrandShowcaseA';
import LogoShowcase from './components/portfolio-sections/LogoShowcase';
import FinalCTA from './components/portfolio-sections/FinalCTA';
import UIUXShowcaseC from './components/portfolio-sections/UIUXShowcaseC';
import FigmaShowcase from './components/portfolio-sections/FigmaShowcase';
import ImageSequenceSection from './components/portfolio-sections/ImageSequenceSection';
import LogoAnimationsSection from './components/portfolio-sections/LogoAnimationsSection';
import TestimonialsSection from './components/portfolio-sections/TestimonialsSection';
import AboutSection from './components/portfolio-sections/AboutSection';

const Home = () => {
  return (
    <div className="App" id="home">

      <Header_v1 />
      <BentoBox />
      <AboutSection />

      <LogoShowcase />
      <LogoAnimationsSection />
      <BrandShowcaseA />
      <SelectedWorkB />
      <UXProjectsShowcase />

      <UIUXShowcaseC />
      <FigmaShowcase />

      <ToolsCloud />
      <ProcessSection />

      <ImageSequenceSection />
      <TestimonialsSection />
      <FinalCTA />

      <Footer />

    </div>
  )
}

export default Home;
