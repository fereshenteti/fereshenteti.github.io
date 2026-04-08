'use client';
import { useRef, useState, useEffect } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ContactMe from '@/app/components/contact-me';
import Social from '@/app/components/social';
import GlassSurface from '@/app/components/GlassSurface';

const Header_v1 = () => {
    const islandRef = useRef<HTMLDivElement>(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState([false, false, false]);

    const selectMenuItem = (menuItemIndex: number) => {
        let selected = [...selectedMenuItem];
        if (!selectedMenuItem[menuItemIndex]) {
            selected.forEach((menuItem, index) => {
                if (menuItem === true) selected[index] = false;
            });
            selected[menuItemIndex] = true;

            const dynamicIsland = document.getElementById('dynamic-island');
            if (dynamicIsland) {
                if (menuItemIndex === 1) {
                    dynamicIsland.classList.add('show-contactUs');
                    dynamicIsland.classList.remove('show-social');
                } else if (menuItemIndex === 2) {
                    dynamicIsland.classList.add('show-social');
                    dynamicIsland.classList.remove('show-contactUs');
                } else {
                    dynamicIsland.classList.remove('show-social');
                    dynamicIsland.classList.remove('show-contactUs');
                }
            }
        } else {
            selected[menuItemIndex] = false;
            const dynamicIsland = document.getElementById('dynamic-island');
            if (dynamicIsland) {
                if (menuItemIndex === 1) dynamicIsland.classList.remove('show-contactUs');
                if (menuItemIndex === 2) dynamicIsland.classList.remove('show-social');
            }
        }
        setSelectedMenuItem([...selected]);
    };

    useEffect(() => {
        const handleOpenContact = () => { selectMenuItem(1); };
        window.addEventListener('toggleContactMenu', handleOpenContact);
        return () => window.removeEventListener('toggleContactMenu', handleOpenContact);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedMenuItem]);

    return (
        <div className='header for-borders'>
            <div id='dynamic-island' ref={islandRef} className='dynamic-island'>

                {/* GlassSurface as background-only layer — no children, positioned absolute via CSS */}
                <GlassSurface
                    className="dynamic-island-glass"
                    borderRadius={50}
                    width="100%"
                    height="100%"
                    distortionScale={-120}
                    brightness={30}
                    opacity={0.95}
                    blur={selectedMenuItem[1] || selectedMenuItem[2] ? 22 : 10}
                    borderWidth={0.12}
                />

                {/* Content sits above the glass bg via z-index */}
                <div className='header-main'>
                    <div className='left'>
                        <img src="./assets/me-v4.png" alt='avatar' className='my-avatar' />
                    </div>
                    <div className='right'>
                        <a className={'menu-item menu-item-home ' + (selectedMenuItem[0] ? 'selected' : '')} href='#home' onClick={() => selectMenuItem(0)}>
                            Home
                        </a>
                        <div className={'menu-item ' + (selectedMenuItem[1] ? 'selected' : '')} onClick={() => selectMenuItem(1)}>
                            Contact Me
                            <div className='menu-item-icon'>
                                <ArrowDownwardIcon className={selectedMenuItem[1] ? 'rotate-180' : ''} />
                            </div>
                        </div>
                        <div className={'menu-item ' + (selectedMenuItem[2] ? 'selected' : '')} onClick={() => selectMenuItem(2)}>
                            Social
                            <div className='menu-item-icon'>
                                <ArrowDownwardIcon className={selectedMenuItem[2] ? 'rotate-180' : ''} />
                            </div>
                        </div>
                    </div>
                </div>

                <div id='contactUs' className={selectedMenuItem[1] ? 'show-header-content' : ''}>
                    {selectedMenuItem[1] && <ContactMe boxRef="topMenuBoxRef" />}
                </div>

                <div id='social-media-container' className={selectedMenuItem[2] ? 'show-header-content' : ''}>
                    {selectedMenuItem[2] && <Social boxRef="topMenuBoxRef" />}
                </div>

            </div>
        </div>
    );
};

export default Header_v1;
