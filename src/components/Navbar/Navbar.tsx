import { useLocation } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';

import router from '../../router'
import CustomNavLink from './CustomNavLink';

import Logo from './Logo';

const Navbar: React.FC = () => {
    const location = useLocation();
    const activeLinkRef = useRef<HTMLAnchorElement>(null);
    const activeLinkBackgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (activeLinkBackgroundRef.current) {
            activeLinkBackgroundRef.current.style.left = `${activeLinkRef.current?.offsetLeft || 0}px`;
            activeLinkBackgroundRef.current.style.width = `${activeLinkRef.current?.offsetWidth || 0}px`;
            if (!activeLinkBackgroundRef.current.style.height && activeLinkRef.current?.offsetHeight) {
                activeLinkBackgroundRef.current.style.height = `${activeLinkRef.current?.offsetHeight}px`;
            }
        }
    }, [location.pathname]);

    return (
        <div className={'w-full bg-blue-700 h-12 grid grid-cols-3 items-center min-w-full px-4 text-white'}>
            <Logo />
            <div className={'relative flex gap-2 p-2 justify-self-center'}>
                <div
                    ref={activeLinkBackgroundRef}
                    className={'absolute bg-white h-8 rounded-lg aspect-square transition-[left,_width,_height] duration-300 pointer-events-none'}
                ></div>

                {router.routes[0].children?.map(child => (
                    <CustomNavLink
                        cRef={location.pathname === `/${child.path}` ? activeLinkRef : undefined}
                        key={child.path}
                        to={`/${child.path}`}
                    >
                        {child.path}
                    </CustomNavLink>
                ))}
            </div>
        </div>
    );
}

export default Navbar;
