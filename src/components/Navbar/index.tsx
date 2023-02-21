import React from 'react';
import DesktopNavbar from './DesktopNavbar';

import Logo from './Logo';
import MobileNavbar from './MobileNavbar';

const Navbar: React.FC = () => {

    return (
        <nav
            className={'w-full bg-blue-700 h-12 flex gap-2 items-center min-w-full px-4 text-white'
                .concat(' max-sm:justify-between')}
        >
            <Logo />

            <DesktopNavbar />

            <MobileNavbar />
        </nav>
    );
}

export default Navbar;
