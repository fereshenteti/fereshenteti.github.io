"use client";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from "react";
import BentoBox from './components/bento-box';
import DetailedCategories from './components/detailed-categories';
import Footer from './components/footer';
import Header_v1 from './components/header/header_v1';
import HeroSection from './components/hero-section';

// New Portfolio Narrative Sections
import ToolsCloud from './components/portfolio-sections/ToolsCloud';
import ProcessSection from './components/portfolio-sections/ProcessSection';
import SelectedWork from './components/portfolio-sections/SelectedWork';
import LogoShowcase from './components/portfolio-sections/LogoShowcase';
import FrontendProjects from './components/portfolio-sections/FrontendProjects';
import TestimonialsSection from './components/portfolio-sections/Testimonials';
import FinalCTA from './components/portfolio-sections/FinalCTA';

gsap.registerPlugin(useGSAP);

const Home = () => {

  const imageSequenceContainerRef = useRef(null);

  return (
    <div className="App" id="home">

      <Header_v1 />

      <BentoBox />

      {/* Narrative Portfolio Expansion sequence starts here */}
      <LogoShowcase />
      <SelectedWork />
      <FrontendProjects />
      <ToolsCloud />
      <ProcessSection />
      <TestimonialsSection />
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

      <Footer />

    </div>
  )
}

export default Home;