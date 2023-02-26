import React, { useEffect, useRef, useState } from 'react';

import CitySearch from './CitySearch';
import CustomNavLink from './CustomNavLink';
import GoogleMaterialIcon from '../GoogleMaterialIcon/GoogleMaterialIcon';
import { navLinkInfo } from '../../utils/constants';

const MobileNavbar: React.FC = () => {
    const [isOpened, setIsOpened] = useState(false);

    const mobileNavBarRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => setIsOpened(prev => !prev);
    const hideMenu = () => setIsOpened(false);
    const handleOutsideOfBlock = (e: MouseEvent) => {
        if (mobileNavBarRef.current && !e.composedPath().includes(mobileNavBarRef.current)) {
            document.removeEventListener('click', handleOutsideOfBlock);
            hideMenu();
        }
    }

    useEffect(() => {
        if (isOpened) {
            document.addEventListener('click', handleOutsideOfBlock);
        }
    }, [isOpened])

    return (
        <div ref={mobileNavBarRef} className='max-sm:flex hidden leading-3'>
            <button onClick={toggleMenu} className='relative z-[11]'>
                <GoogleMaterialIcon iconName={isOpened ? 'close' : 'menu'} size={1.5} />
            </button>

            <div
                className={'absolute top-0 right-0 h-screen z-[10] bg-blue-900 transition-[width] delay-150 pt-10 pb-5 rounded-bl'
                    .concat(' flex items-center gap-2 flex-col text-lg overflow-hidden')
                    .concat(' ', isOpened ? 'w-full' : 'w-0')}
            >
                <div className='mb-2'>
                    <CitySearch />
                </div>

                {navLinkInfo.map(({ text, to }) => (
                    <CustomNavLink
                        onClick={hideMenu}
                        key={to}
                        to={to}
                    >
                        {text}
                    </CustomNavLink>
                ))}
            </div>
        </div>
    )
}
export default MobileNavbar;