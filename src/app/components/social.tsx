import { gsap } from "gsap";
import { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Social = (props: {boxRef?: string}) => {

    const {boxRef} = props;

    useEffect(() => {
        if(boxRef){
            const boxes: any[] = gsap.utils.toArray(`.${boxRef}`);
    
            boxes.forEach((box, i) => {
                const anim = gsap.fromTo(box, {autoAlpha: 0, y: 50}, {duration: 0.5, delay: i/10, autoAlpha: 1, y: 0});
                ScrollTrigger.create({
                  trigger: box,
                  animation: anim,
                  toggleActions: 'play none none none',
                  once: true,
                });
            });
        }
    }, []);

    return (
        <div className='social-container'>

            <a className={`socialBox ${boxRef}`} href='https://www.linkedin.com/in/fareshentati/' target="blank">
                <img src="assets/icons/linkedin-logo.svg" className='social-icon'/>
            </a>

            <a className={`socialBox ${boxRef}`} href='https://dribbble.com/fereshenteti/collections' target="blank">
                <img src="assets/icons/dribble-logo.svg" className='social-icon'/>
            </a>

            <a className={`socialBox ${boxRef}`} href='https://www.instagram.com/fereshenteti' target="blank">
                <img src="assets/icons/instagram-logo.svg" className='social-icon'/>
            </a>

            <a className={`socialBox ${boxRef}`} href='https://www.pinterest.com/hentetiferes/_created' target="blank">
                <img src="assets/icons/pinterest-logo.svg" className='social-icon'/>
            </a>

            <a className={`socialBox ${boxRef}`} href='https://www.tiktok.com/@fereshenteti' target="blank">
                <img src="assets/icons/tiktok-logo.svg" className='social-icon'/>
            </a>

        </div>
    );
}

export default Social;