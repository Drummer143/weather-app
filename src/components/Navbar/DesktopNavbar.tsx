import React from 'react';

import CustomNavLink from './CustomNavLink';
import { navLinkInfo } from '../../utils/constants';

const DesktopNavbar: React.FC = () => {
    return (
        <div className={'sm:flex relative hidden gap-2 p-2 justify-self-center'}>
            {navLinkInfo.map(({ text, to }) => (
                <CustomNavLink
                    key={to}
                    to={to}
                >
                    {text}
                </CustomNavLink>
            ))}
        </div>
    );
}

export default DesktopNavbar;