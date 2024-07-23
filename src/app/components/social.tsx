import { gsap } from "gsap";
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Social = () => {

    useEffect(() => {
        const boxes: any[] = gsap.utils.toArray('.socialBox');

        boxes.forEach((box, i) => {
            const anim = gsap.fromTo(box, {autoAlpha: 0, y: 50}, {duration: 0.5, delay: i/10, autoAlpha: 1, y: 0});
            ScrollTrigger.create({
              trigger: box,
              animation: anim,
              toggleActions: 'play none none none',
              once: true,
            });
        });
    }, []);

    return (
        <div className='social-container'>

            <a className='socialBox' href='https://www.facebook.com/Feres.arts' target="blank">
                <img src="../assets/icons/facebook-logo.svg" className='social-icon'/>
                @Feres.arts
            </a>

            <a className='socialBox' href='https://www.instagram.com/fereshenteti' target="blank">
                <img src="../assets/icons/instagram-logo.svg" className='social-icon'/>
                @fereshenteti
            </a>

            <a className='socialBox' href='https://www.linkedin.com/in/fareshentati/' target="blank">
                <img src="../assets/icons/linkedin-logo.svg" className='social-icon'/>
                @fareshentati
            </a>

        </div>
    );
}

export default Social;