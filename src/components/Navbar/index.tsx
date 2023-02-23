import React from 'react';
import DesktopNavbar from './DesktopNavbar';

import Logo from './Logo';
import MobileNavbar from './MobileNavbar';

const Navbar: React.FC = () => {

    return (
        <nav
            className={'w-full bg-blue-700 h-12 flex gap-4 items-center min-w-full px-4 text-white sticky top-0 left-0'
                .concat(' max-sm:justify-between')}
        >
            <Logo />

            <DesktopNavbar />

            <MobileNavbar />
        </nav>
    );
}

export default Navbar;
