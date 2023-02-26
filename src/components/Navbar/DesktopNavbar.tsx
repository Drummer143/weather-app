import React from 'react';

import CustomNavLink from './CustomNavLink';
import { navLinkInfo } from '../../utils/constants';
import CitySearch from './CitySearch';

const DesktopNavbar: React.FC = () => {
    return (
        <div className={'sm:flex hidden relative h-12 gap-2 p-2'}>
            {navLinkInfo.map(({ text, to }) => (
                <CustomNavLink
                    key={to}
                    to={to}
                >
                    {text}
                </CustomNavLink>
            ))}

            <CitySearch />
        </div>
    );
}

export default DesktopNavbar;