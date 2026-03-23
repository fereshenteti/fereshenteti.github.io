import { useEffect, useState, useRef } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GlassSurface from './glass-bar/GlassSurface';
import ContactMe from './contact-me';
import Social from './social';

const Header = () => {
    const islandRef = useRef<HTMLDivElement>(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState([false, false, false]);
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
        <div className="header" ref={islandRef}>
            <GlassSurface className="glass-surface">

                <div className='header-main'>
                    <div className='left'>
                    <img src="./assets/me-v3.png" alt='avatar' className='my-avatar' />
                    </div>
                    <div className='right'>

                    <a className={'menu-item menu-item-home ' + (selectedMenuItem[0] ? 'selected' : '')} href='#home' onClick={(e) => selectMenuItem(0)} >
                        Home
                    </a>

                    <div className={'menu-item ' + (selectedMenuItem[1] ? 'selected' : '')} onClick={(e) => selectMenuItem(1)}>
                        Contact Me
                        <div className='menu-item-icon'>
                        <ArrowDownwardIcon className={selectedMenuItem[1] ? 'rotate-icon-180' : ''} />
                        </div>
                    </div>

                    <div className={'menu-item ' + (selectedMenuItem[2] ? 'selected' : '')} onClick={(e) => selectMenuItem(2)}>
                        Social
                        <div className='menu-item-icon'>
                        <ArrowDownwardIcon className={selectedMenuItem[2] ? 'rotate-icon-180' : ''} />
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
            </GlassSurface>

        </div>
    )
}

export default Header;