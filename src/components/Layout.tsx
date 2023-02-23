import React, { useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

import Navbar from './Navbar';

const Layout: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('current');
        }
    }, []);

    return (
        <div className={`w-full h-full`}>
            <Navbar />

            <div className='w-full flex justify-center'>
                <div className='w-full lg:w-[1024px]'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Layout;
