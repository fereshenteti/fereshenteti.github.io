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
import DetailedCategories from './components/detailed-categories';
import Footer from './components/footer';


gsap.registerPlugin(useGSAP);

const Home = () => {

  const [selectedMenuItem, setSelectedMenuItem] = useState([false, false, false]);
  const imageSequenceContainerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, [])

  useEffect(() => {
    const boxes: any[] = gsap.utils.toArray('.boxRef');

    boxes.forEach((box, i) => {
        const anim = gsap.fromTo(box, {autoAlpha: 0, y: 50}, {duration: 0.5, delay: i/10, autoAlpha: 1, y: 0});
        ScrollTrigger.create({
          trigger: box,
          animation: anim,
          toggleActions: 'play none none none',
          once: true,
        });
    });

    let canvas = document.getElementById('images') as HTMLCanvasElement;
    if(canvas) initCanvas(canvas);

  }, []);

  const initCanvas = (canvas: HTMLCanvasElement) => {
      
    let context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let frameCount = 111;
    const currentFrame = (index: number) => (
      `/assets/my_image_sequence/${(index).toString().padStart(5, '0')}.png`
    );

    let images: HTMLImageElement[] = [];
    let frames = {
      frame: 0
    };
    
    for (let i = 1; i <= frameCount; i++) {
      let img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = () => {
      if(context){
        context.clearRect(0, 0, canvas.width, canvas.height);
        let img = images[frames.frame];
        var scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        // get the top left position of the image
        var x = (canvas.width / 2) - (img.width / 2) * scale;
        context.drawImage(img, x, 0, img.width * scale, img.height * scale);
      }
    }

    gsap.timeline({
      onUpdate: render,
      scrollTrigger: {
        trigger: imageSequenceContainerRef?.current,
        pin: false,
        scrub: 0.5,
        start: "top",
        markers: false
      }
    })
    .to(frames, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      duration: 1
    }, 0);
    
    images[0].onload = render;

  }
  
  const selectMenuItem = (menuItemIndex: number) => {
    let selected = selectedMenuItem;
    if(!selectedMenuItem[menuItemIndex]){
      selected.forEach((menuItem, index) => {
        if (menuItem === true) selected[index] = false
      })
      selected[menuItemIndex] = true;

      let dynamicIsland = document.getElementById('dynamic-island');

      if(menuItemIndex === 1) {
        if(dynamicIsland) {
          dynamicIsland.classList.add('show-contactUs');
          dynamicIsland.classList.remove('show-social');
        }
      }
      else if(menuItemIndex === 2) {
        if(dynamicIsland) {
          dynamicIsland.classList.add('show-social');
          dynamicIsland.classList.remove('show-contactUs');
        }
      }
      else {
        if(dynamicIsland) {
          dynamicIsland.classList.remove('show-social');
          dynamicIsland.classList.remove('show-contactUs');
        }
      }
      
    }
    else{
      selected[menuItemIndex] = false;
      if(menuItemIndex === 1) {
        let dynamicIsland = document.getElementById('dynamic-island');
        if(dynamicIsland) dynamicIsland.classList.remove('show-contactUs');
      }
      if(menuItemIndex === 2) {
        let dynamicIsland = document.getElementById('dynamic-island');
        if(dynamicIsland) dynamicIsland.classList.remove('show-social');
      }
    }
    setSelectedMenuItem([...selected]);
  }

  return (
    <div className="App" id="home">

      <div className='header for-borders'>
        <div id='dynamic-island' className='dynamic-island'>

          <div className='header-main'>
            <div className='left'>
              <img src="./assets/me.jpg" alt='avatar' className='my-avatar'/>
            </div>
            <div className='right'>

              <a className={'menu-item menu-item-home ' + (selectedMenuItem[0] ? 'selected' : '')} href='#home'  onClick={(e) => selectMenuItem(0)} >
                Home
              </a>

              <div className={'menu-item ' + (selectedMenuItem[1] ? 'selected' : '')} onClick={(e) => selectMenuItem(1)}>
                Contact Me 
                <div className='menu-item-icon'>
                  <ArrowDownwardIcon className={selectedMenuItem[1] ? 'rotate-180' : ''}/>
                </div>
              </div>

              <div className={'menu-item ' + (selectedMenuItem[2] ? 'selected' : '')} onClick={(e) => selectMenuItem(2)}>
                Social
                <div className='menu-item-icon'>
                  <ArrowDownwardIcon className={selectedMenuItem[2] ? 'rotate-180' : ''}/>
                </div>
              </div>
            </div>
          </div>

          <div id='contactUs' className={selectedMenuItem[1] ? 'show-header-content' : ''}>
            {selectedMenuItem[1] && <ContactMe boxRef="topMenuBoxRef"/>}
          </div>

          <div id='social-media-container' className={selectedMenuItem[2] ? 'show-header-content' : ''}>
            {selectedMenuItem[2] && <Social boxRef="topMenuBoxRef"/>}
          </div>

        </div>
      </div>

      <div className='intro'>
        
        <section className="container">
          <div className="section-content">
              <h1>Hi! I'm Fares Hentati</h1>
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
                <h1>I'm a Web development Engineer</h1>
                <p>6+ years of expertise in Front-end technologies</p>
            </div>
        </section>

        <section className="container">
          <div className="section-content">
              <h1>& I'm also a UI / UX / Graphic Designer</h1>
              <p>I adore tasty designs and turn them into code!</p>
          </div>
        </section>

        <section className="container">
          <div className="section-content">
              <h1>Aaaand I'm a Voice Over artist too!</h1>
              <p>I might be one person, but I have many voices :D</p>
          </div>
        </section>

        <section className="container">
          <div className="section-content">
              <h1>In the next sections<br/> you will discover my creations!</h1>
              <p>Enjoying it? keep scrolling</p>
          </div>
        </section>

      </div>

      <div className="my-img-bg">
        <img className='bg-me' src="assets/backgrounds/bg-me.png"/>
      </div>
      
      <div id="v0" ref={imageSequenceContainerRef}>
        <canvas id='images'></canvas>
      </div>

      <MyCategories/>

      <DetailedCategories/>

      <Footer/>

    </div>
  )
}

export default Home;