import { useRef } from 'react';
import MadeByMe from './made-by-me';
import CameraIcon from '../assets/icons/camera.svg';
import PencilIcon from '../assets/icons/pencil.svg';
import MicrophoneIcon from '../assets/icons/microphone.svg';
import UIUXIcon from '../assets/icons/uiux.svg';
import CodeIcon from '../assets/icons/code.svg';
import TranslationIcon from '../assets/icons/translation.svg';

const MyCategories = () => {

    const bgOverlayRef: any = useRef();
    const headphoneRef: any = useRef();
    const madeByMeRef: any = useRef();
    const photoRef: any = useRef();
    const illRef: any = useRef();
    const voRef: any = useRef();
    const uiuxRef: any = useRef();
    const feRef: any = useRef();
    const trRef: any = useRef();

    const photoHoverHandle = (hover: boolean) => {
        const bgOverlay = bgOverlayRef.current;
        if(bgOverlay){
            if(hover){
                bgOverlay.style.backgroundImage = 'url("/assets/backgrounds/bg3.jpg")';
                bgOverlay.style.opacity = 1;
            }
            else{
                bgOverlay.style.opacity = 0;
            }
        }
    }

    const illHoverHandle = (hover: boolean) => {
        const bgOverlay = bgOverlayRef.current;
        if(bgOverlay){
            if(hover){
                bgOverlay.style.backgroundImage = 'url("/assets/backgrounds/illustrations.jpeg")';
                bgOverlay.style.opacity = 1;
            }
            else{
                bgOverlay.style.opacity = 0;
            }
        }
    }

    const voHoverHandle = (hover: boolean) => {
        const headphone = headphoneRef.current;
        if(headphone){
            if(hover){
                headphone.style.maxHeight = '500px';
                headphone.style.scale = 2;
                headphone.style.opacity = 1;
            }
            else{
                headphone.style.maxHeight = 0;
                headphone.style.scale = 1;
                headphone.style.opacity = 0;
            }
        }
    }

    const uiuxHoverHandle = (hover: boolean) => {
        const borders = document.getElementsByClassName('for-borders');
        if(borders){
            const _borders = Array.from(borders as HTMLCollectionOf<HTMLElement>)
            if(hover){
                for (let border of _borders) {
                    border.style.border = '1px dashed';
                }
            }
            else{
                for (let border of _borders) {
                    border.style.border = 'none';
                }
            }
        }
    }

    const feHoverHandle = (hover: boolean) => {
        const madeByMe = madeByMeRef.current;
        if(madeByMe){
            if(hover){
                madeByMe.style.transform = 'translateX(0)';
            }
            else{
                madeByMe.style.transform = 'translateX(300px)';
            }
        }
    }

    const trHoverHandle = (hover: boolean) => {
        const titles = document.getElementsByClassName('tr');
        if(titles){
            const _titles = Array.from(titles as HTMLCollectionOf<HTMLElement>)
            if(hover){
                for (let title of _titles) {
                    title.style.maxHeight = '500px';
                    title.style.opacity = "1";
                }
            }
            else{
                for (let title of _titles) {
                    title.style.maxHeight = "0";
                    title.style.opacity = "0";
                }
            }
        }
    }

    return(
        <section className="my-categories">
            
            <div className='bg-overlay' ref={bgOverlayRef}></div>

            <div className='categories-header'>
                <div className='categories-title for-borders'>
                    <h1>My <strong>Art</strong> fields</h1>
                </div>
                <div className='categories-title for-borders'>
                    <h6>yes, I call it "Front-stack" !</h6>
                </div>
            </div>

            <div className='categories'>

                {/* Frontend */}
                <div className='for-borders'>
                    <div id="feRef"
                        ref={feRef}
                        onMouseEnter={() => feHoverHandle(true)}
                        onMouseLeave={() => feHoverHandle(false)}
                        className='category cat-code'
                        >
                        <div className='cat-overlay'></div>
                        <CodeIcon className='cat-icon'/>
                        <h4 className='cat-title'>Front-End dev.</h4>
                        <h4 className='cat-title cat-title-fr tr'>dév. Front-End</h4>
                        <h4 className='cat-title cat-title-ar tr'>برمجة الواجهات</h4>
                    </div>
                </div>

                {/* UI UX Design */}
                <div className='for-borders'>
                    <div id="uiuxRef"
                        ref={uiuxRef}
                        onMouseEnter={() => uiuxHoverHandle(true)}
                        onMouseLeave={() => uiuxHoverHandle(false)}
                        className='category cat-uiux'
                        >
                        <div className='cat-overlay'></div>
                        <UIUXIcon className='cat-icon'/>
                        <h4 className='cat-title'>UI / UX design</h4>
                        <h4 className='cat-title cat-title-fr tr'>design UI / UX</h4>
                        <h4 className='cat-title cat-title-ar tr'>تصميم</h4>
                    </div>
                </div>

                {/* Illustration */}
                <div className='for-borders'>
                    <div id="illRef"
                        ref={illRef}
                        onMouseEnter={() => illHoverHandle(true)}
                        onMouseLeave={() => illHoverHandle(false)}
                        className='category cat-illustration'
                        >
                        <div className='cat-overlay'></div>
                        <PencilIcon className='cat-icon'/>
                        <h4 className='cat-title'>Illustrations</h4>
                        <h4 className='cat-title cat-title-fr tr'>Illustrations</h4>
                        <h4 className='cat-title cat-title-ar tr'>رسم</h4>
                    </div>
                </div>

                {/* Voice Over */}
                <div className='for-borders'>
                    <div id="voRef"
                        ref={voRef}
                        onMouseEnter={() => voHoverHandle(true)}
                        onMouseLeave={() => voHoverHandle(false)}
                        className='category cat-voiceover'
                        >
                        <img src="/assets/icons/headphones2.svg" className='headphones-icon' ref={headphoneRef}/>
                        <div className='cat-overlay'></div>
                        <MicrophoneIcon className='cat-icon'/>
                        <h4 className='cat-title'>Voice Over</h4>
                        <h4 className='cat-title cat-title-fr tr'>Voix Off</h4>
                        <h4 className='cat-title cat-title-ar tr'>أداء صوتي</h4>
                    </div>
                </div>

                {/* Photography */}
                {/* <div className='for-borders'>
                    <div id="photoRef"
                        ref={photoRef}
                        onMouseEnter={() => photoHoverHandle(true)}
                        onMouseLeave={() => photoHoverHandle(false)}
                        className='category cat-photography'
                        >
                        <div className='cat-overlay'></div>
                        <CameraIcon className='cat-icon'/>
                        <h4 className='cat-title'>Photography</h4>
                        <h4 className='cat-title cat-title-fr tr'>Photographie</h4>
                        <h4 className='cat-title cat-title-ar tr'>تصوير</h4>
                    </div>
                </div> */}

                {/* Translation */}
                {/* <div className='for-borders'>
                    <div id="trRef"
                        ref={trRef}
                        onMouseEnter={() => trHoverHandle(true)}
                        onMouseLeave={() => trHoverHandle(false)}
                        className='category cat-tr'
                        >
                        <div className='cat-overlay'></div>
                        <TranslationIcon className='cat-icon'/>
                        <h4 className='cat-title'>Translations</h4>
                        <h4 className='cat-title cat-title-fr tr'>Traductions</h4>
                        <h4 className='cat-title cat-title-ar tr'>ترجمة</h4>
                    </div>
                </div> */}

            </div>

            <MadeByMe ref={madeByMeRef}/>

        </section>
    )
}

export default MyCategories;