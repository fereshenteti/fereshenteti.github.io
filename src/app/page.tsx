"use client";
import { useGSAP } from '@gsap/react';
import { Player } from '@lottiefiles/react-lottie-player';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import MyCategories from "./components/categories";
import ContactMe from "./components/contact-me";
import Social from "./components/social";
import BentoBox from './components/bento-box';
import DetailedCategories from './components/detailed-categories';
import Footer from './components/footer';
import StatsSection from './components/stats-section';
import Header_v1 from './components/header/header_v1';

gsap.registerPlugin(useGSAP);

const Home = () => {

  const [selectedMenuItem, setSelectedMenuItem] = useState([false, false, false]);
  const imageSequenceContainerRef = useRef(null);
  const islandRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [])

  useEffect(() => {
    const boxes: any[] = gsap.utils.toArray('.boxRef');

    boxes.forEach((box, i) => {
      const anim = gsap.fromTo(box, { autoAlpha: 0, y: 50 }, { duration: 0.5, delay: i / 10, autoAlpha: 1, y: 0 });
      ScrollTrigger.create({
        trigger: box,
        animation: anim,
        toggleActions: 'play none none none',
        once: true,
      });
    });
  }, []);

  const selectMenuItem = (menuItemIndex: number) => {
    let selected = selectedMenuItem;
    if (!selectedMenuItem[menuItemIndex]) {
      selected.forEach((menuItem, index) => {
        if (menuItem === true) selected[index] = false
      })
      selected[menuItemIndex] = true;

      let dynamicIsland = document.getElementById('dynamic-island');

      if (menuItemIndex === 1) {
        if (dynamicIsland) {
          dynamicIsland.classList.add('show-contactUs');
          dynamicIsland.classList.remove('show-social');
        }
      }
      else if (menuItemIndex === 2) {
        if (dynamicIsland) {
          dynamicIsland.classList.add('show-social');
          dynamicIsland.classList.remove('show-contactUs');
        }
      }
      else {
        if (dynamicIsland) {
          dynamicIsland.classList.remove('show-social');
          dynamicIsland.classList.remove('show-contactUs');
        }
      }

    }
    else {
      selected[menuItemIndex] = false;
      if (menuItemIndex === 1) {
        let dynamicIsland = document.getElementById('dynamic-island');
        if (dynamicIsland) dynamicIsland.classList.remove('show-contactUs');
      }
      if (menuItemIndex === 2) {
        let dynamicIsland = document.getElementById('dynamic-island');
        if (dynamicIsland) dynamicIsland.classList.remove('show-social');
      }
    }
    setSelectedMenuItem([...selected]);
  }

  return (
    <div className="App" id="home">

      <Header_v1 />

      {/* <Header /> */}

      <BentoBox />

      <div className='intro'>

        <section className="container">
          <div className="section-content">
            <h1>Hi! I'm</h1>
            <h1 className='my-name'>Fares Hentati</h1>
            <p>Welcome to my portfolio!</p>
            <div className='learn-more'>
              <div>Scroll to learn more about me</div>
              <Player
                src='https://assets9.lottiefiles.com/packages/lf20_p4eki2q3.json'
                className="lottie-player"
                loop
                autoplay
              />
            </div>
          </div>
        </section>

        <section className="container">
          <div className="section-content">
            <h1>I'm a Senior</h1>
            <h1 className='highlighted'>UI / UX / Graphic</h1>
            <h1>Designer</h1>
            <p>8+ years of expertise crafting beautiful user experiences</p>
          </div>
        </section>

        <section className="container">
          <div className="section-content">
            <h1>& I'm also a</h1>
            <h1 className='highlighted'>Web Development</h1>
            <h1>Engineer</h1>
            <p>6+ years turning designs into elegant code!</p>
          </div>
        </section>

        <section className="container">
          <div className="section-content">
            <h1>Aaaand I'm a</h1>
            <h1 className='highlighted'>Voice Over</h1>
            <h1>artist too!</h1>
            <p>I might be one person, but I have many voices :D</p>
          </div>
        </section>

        <section className="container">
          <div className="section-content">
            <h1>In the next sections<br /> you will discover</h1>
            <h1 className='highlighted'>my creations!</h1>
            <p>Enjoying it? keep scrolling</p>
          </div>
        </section>

      </div>

      <div className="my-img-bg">
        <img className='bg-me' src="assets/backgrounds/me-black.png" />
      </div>

      <div id="v0" ref={imageSequenceContainerRef}>
        <canvas id='images'></canvas>
      </div>

      <MyCategories />

      <StatsSection />

      <DetailedCategories />

      <Footer />

    </div>
  )
}

export default Home;