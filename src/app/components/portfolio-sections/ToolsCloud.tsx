'use client';

import React, { useRef, useState } from 'react';
import { ClashDisplay, Satoshi } from '../../../fonts/fonts';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

import IconFigma from '../../assets/icons/tools/figma.svg';
import IconIllustrator from '../../assets/icons/tools/illustrator.svg';
import IconProcreate from '../../assets/icons/tools/procreate.png';
import IconCanva from '../../assets/icons/tools/canva.svg';

import IconHtml5 from '../../assets/icons/tools/html-5.svg';
import IconCss3 from '../../assets/icons/tools/css-3.svg';
import IconTs from '../../assets/icons/tools/typescript.svg';
import IconJs from '../../assets/icons/tools/javascript.svg';
import IconReact from '../../assets/icons/tools/react.svg';
import IconVue from '../../assets/icons/tools/vue.svg';
import IconNextjs from '../../assets/icons/tools/nextjs.svg';
import IconNodejs from '../../assets/icons/tools/nodejs.svg';
import IconAngular from '../../assets/icons/tools/angular.svg';
import IconTailwind from '../../assets/icons/tools/tailwind.svg';
import IconFramer from '../../assets/icons/tools/framer.svg';

import IconGithub from '../../assets/icons/tools/github.svg';
import IconGitlab from '../../assets/icons/tools/gitlab.svg';
import IconBitbucket from '../../assets/icons/tools/bitbucket.svg';
import IconStorybook from '../../assets/icons/tools/storybook.svg';
import IconVercel from '../../assets/icons/tools/vercel.svg';
import IconClaude from '../../assets/icons/tools/claude.svg';
import IconChatGPT from '../../assets/icons/tools/chatGPT.svg';
import IconNotion from '../../assets/icons/tools/notion.svg';
import IconDocker from '../../assets/icons/tools/docker.svg';

gsap.registerPlugin(ScrollTrigger);

const toolsData = [
  {
    category: 'Design',
    items: [
      { name: 'Figma', icon: <IconFigma /> },
      { name: 'Adobe Illustrator', icon: <IconIllustrator /> },
      { name: 'Procreate', icon: <Image src={IconProcreate} alt="Procreate" /> },
      { name: 'Canva', icon: <IconCanva /> },
    ],
  },
  {
    category: 'Frontend Engine',
    items: [
      { name: 'HTML5', icon: <IconHtml5 /> },
      { name: 'CSS3 / SCSS', icon: <IconCss3 /> },
      { name: 'JavaScript', icon: <IconJs /> },
      { name: 'TypeScript', icon: <IconTs /> },
      { name: 'React', icon: <IconReact /> },
      { name: 'Vue', icon: <IconVue /> },
      { name: 'Next.js', icon: <IconNextjs />, invertDark: true },
      { name: 'Nodejs', icon: <IconNodejs /> },
      { name: 'Angular', icon: <IconAngular /> },
      { name: 'Tailwind CSS', icon: <IconTailwind /> },
      { name: 'Framer Motion', icon: <IconFramer /> },
    ],
  },
  {
    category: 'Workflow & Delivery',
    items: [
      { name: 'Git / GitHub', icon: <IconGithub />, invertDark: true },
      { name: 'Git / Gitlab', icon: <IconGitlab /> },
      { name: 'Git / Bitbucket', icon: <IconBitbucket /> },
      { name: 'Storybook', icon: <IconStorybook /> },
      { name: 'Vercel', icon: <IconVercel />, invertDark: true },
      { name: 'Claude AI', icon: <IconClaude /> },
      { name: 'ChatGPT', icon: <IconChatGPT />, invertDark: true },
      { name: 'Notion', icon: <IconNotion />, invertDark: true },
      { name: 'Docker', icon: <IconDocker /> },
    ],
  },
];

const ToolsCloud = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const cloudContainerRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const scatterStates = useRef<any[]>([]);

  // Initial Scroll Reveal
  useGSAP(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
    }

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.4,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
    }

    if (cloudContainerRef.current) {
      gsap.fromTo(
        cloudContainerRef.current,
        { opacity: 0 },
        {
          opacity: 1, duration: 1, delay: 0.6,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
    }
  }, { scope: sectionRef });

  // Hover Interaction & Floating Physics
  useGSAP(() => {
    const tools = gsap.utils.toArray('.tool-item', cloudContainerRef.current);
    const categoriesTitles = gsap.utils.toArray('.category-title', cloudContainerRef.current);
    const categoryContainers = gsap.utils.toArray('.tool-category', cloudContainerRef.current);

    if (isHovered) {
      // Stop floating and snap to organized grid
      gsap.killTweensOf(tools);
      gsap.to(tools, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 0.6,
        ease: 'back.out(1.2)',
        stagger: 0.02,
        overwrite: "auto"
      });

      // Reveal category titles and borders
      gsap.to(categoriesTitles, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.1,
        overwrite: "auto"
      });
      gsap.to(categoryContainers, {
        borderTopColor: 'rgba(0, 0, 0, 0.08)',
        duration: 0.5,
        ease: 'power2.out'
      });
    } else {
      // Scatter and resume floating in a Watch-OS Hexagonal/Circular style
      gsap.killTweensOf(tools);

      const cloudRect = cloudContainerRef.current?.getBoundingClientRect();
      if (!cloudRect) return;

      const cloudCenterX = cloudRect.width / 2;
      const cloudCenterY = cloudRect.height / 2;

      // Apple Watch Hexagonal packing parameters
      const getHexPosition = (index: number) => {
        if (index === 0) return { x: 0, y: 0, ring: 0 };

        let ring = 1;
        let firstInRing = 1;
        while (index >= firstInRing + ring * 6) {
          firstInRing += ring * 6;
          ring++;
        }

        const posInRing = index - firstInRing;
        const side = Math.floor(posInRing / ring);
        const step = posInRing % ring;

        const dirs = [
          { dq: 1, dr: 0 },
          { dq: 0, dr: 1 },
          { dq: -1, dr: 1 },
          { dq: -1, dr: 0 },
          { dq: 0, dr: -1 },
          { dq: 1, dr: -1 }
        ];

        let q = 0;
        let r_coord = -ring;

        for (let s = 0; s < side; s++) {
          q += dirs[s].dq * ring;
          r_coord += dirs[s].dr * ring;
        }
        q += dirs[side].dq * step;
        r_coord += dirs[side].dr * step;

        const D = 92; // Constant spacing across all screens
        const x = D * (q + r_coord / 2);
        const y = D * (Math.sqrt(3) / 2) * r_coord;

        return { x, y, ring };
      };

      tools.forEach((tool: any, i) => {
        const rect = tool.getBoundingClientRect();
        // Undo current GSAP transforms to get natural grid baseline relative to container
        const currOffsetX = gsap.getProperty(tool, "x") as number;
        const currOffsetY = gsap.getProperty(tool, "y") as number;

        const origX = (rect.left - cloudRect.left - currOffsetX) + rect.width / 2;
        const origY = (rect.top - cloudRect.top - currOffsetY) + rect.height / 2;

        const { x: hexX, y: hexY } = getHexPosition(i);

        const targetX = cloudCenterX + hexX;
        const targetY = cloudCenterY + hexY;

        // Calculate necessary transform dx/dy from natural grid position
        const dx = targetX - origX;
        const dy = targetY - origY;

        const floatY = gsap.utils.random(-10, 10);
        const floatDuration = gsap.utils.random(2, 3);

        // Fly to new scatter position
        gsap.to(tool, {
          x: dx,
          y: dy,
          rotation: 0, // No rotation for Apple watch feel
          scale: 1, // Uniform size
          duration: 1.2,
          ease: 'power3.inOut',
          overwrite: "auto",
          onComplete: () => {
            // Constant floating loop
            if (!isHovered) {
              gsap.to(tool, {
                y: dy + floatY,
                duration: floatDuration,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
                overwrite: "auto"
              });
            }
          }
        });
      });

      // Hide category titles and dividers
      gsap.to(categoriesTitles, {
        opacity: 0,
        x: -20,
        duration: 0.4,
        ease: 'power2.in',
        overwrite: "auto"
      });
      gsap.to(categoryContainers, {
        borderTopColor: 'rgba(0, 0, 0, 0)',
        duration: 0.4,
        ease: 'power2.in'
      });
    }
  }, { dependencies: [isHovered], scope: sectionRef });

  return (
    <section className="tools-cloud-section" ref={sectionRef}>
      <div className="portfolio-container">

        <div className="section-header">
          <div ref={titleRef}>
            <span className={`section-eyebrow ${Satoshi.className}`}>Tools & Craft</span>
            <h2 className={`section-title ${ClashDisplay.className}`}>
                The toolkit behind every project
            </h2>
          </div>
          <p ref={textRef} className={`section-subtitle ${Satoshi.className}`}>
            Every project you just saw was built with a carefully chosen set of design and development tools — here's what powers my workflow.
          </p>
        </div>

        <div
          className="tools-cloud-container"
          ref={cloudContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {toolsData.map((group, idx) => (
            <div key={idx} className="tool-category">
              <h3 className={`category-title ${Satoshi.className}`}>{group.category}</h3>
              <div className="tools-list">
                {group.items.map((tool, toolIdx) => (
                  <div key={toolIdx} className="tool-item">
                    <span className={`tool-icon${tool.invertDark ? ' tool-icon--invert-dark' : ''}`}>{tool.icon}</span>
                    <span className={`tool-tooltip ${Satoshi.className}`}>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsCloud;
