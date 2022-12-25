import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Navbar from '../navbar/Navbar/Navbar';
import positionStore from '../../store/positionStore';

function MainPage() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                latitude = Math.round(latitude * 10000) / 10000;
                longitude = Math.round(longitude * 10000) / 10000;

                positionStore.setPosition(latitude, longitude);

                if (location.pathname === '/') {
                    navigate('current'); //`/lan=${latitude}&lon=${longitude}`);
                }
            },
            error => {
                console.error(error);
            }
        );
    }, []);

    return (
        <div className={`w-full h-full`}>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default MainPage;
