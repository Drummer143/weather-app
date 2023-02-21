import React, { useEffect } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

import Navbar from './Navbar';
import positionStore from '../store/positionStore';

const Layout: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                latitude = Math.round(latitude * 10000) / 10000;
                longitude = Math.round(longitude * 10000) / 10000;

                positionStore.setPosition(latitude, longitude);

                if (location.pathname === '/') {
                    navigate('current');
                }
            },
            error => {
                console.error(error);
                navigate('/');
            }
        );
    }, []);

    return (
        <div className={`w-full h-full grid grid-rows-[min-content,_1fr]`}>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Layout;
