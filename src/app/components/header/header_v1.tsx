'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ContactMe from '@/app/components/contact-me';
import Social from '@/app/components/social';

// refractive uses ImageData (browser-only API) — must never run on the server
const RefractiveIsland = dynamic(
    () => import('@hashintel/refractive').then(m => {
        const { refractive } = m;
        const Island = ({ children, ...props }: React.ComponentProps<typeof refractive.div>) =>
            <refractive.div {...props}>{children}</refractive.div>;
        Island.displayName = 'RefractiveIsland';
        return { default: Island };
    }),
    {
        ssr: false,
        // Static fallback rendered on server / before hydration
        loading: () => <div id='dynamic-island' className='dynamic-island' />,
    }
);

const Header_v1 = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState([false, false, false]);
    const isOpen = selectedMenuItem[1] || selectedMenuItem[2];

    const selectMenuItem = (menuItemIndex: number) => {
        let selected = [...selectedMenuItem];
        if (!selectedMenuItem[menuItemIndex]) {
            selected.forEach((_, index) => { selected[index] = false; });
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
                    dynamicIsland.classList.remove('show-social', 'show-contactUs');
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

    const islandContent = (
        <>
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
        </>
    );

    return (
        <div className='header for-borders'>
            <RefractiveIsland
                id='dynamic-island'
                className='dynamic-island'
                refraction={{
                    radius: 50,
                    blur: isOpen ? 14 : 6,
                    bezelWidth: 36,
                    glassThickness: 120,
                    refractiveIndex: 3,
                    specularOpacity: 0.4,
                    specularAngle: 45,
                }}
            >
                {islandContent}
            </RefractiveIsland>
        </div>
    );
};

export default Header_v1;
