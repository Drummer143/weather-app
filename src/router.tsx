import { createBrowserRouter, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import positionStore from './store/geolocationStore';
import CurrentWeather from './components/CurrentWeather';
import { aGeolocation } from './apis/Abstract/requests';
import { getCurrentWeather } from './apis/OpenWeather/requests';
import { currentWeatherExampleResponse } from './utils/constants';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'current', //lan=:lan&lon=:lon",
                id: 'current',
                element: <CurrentWeather />,
                loader: async (): Promise<OWCurrentWeatherResponse> => {
                    let latitude = positionStore.latitude,
                        longitude = positionStore.longitude;

                    try {
                        const geolocation = (await aGeolocation()).data;
                        console.log(geolocation);
                        positionStore.setCity(geolocation.city);
                        positionStore.setCountry(geolocation.country);

                        latitude = geolocation.latitude;
                        longitude = geolocation.longitude;
                    } catch (error) {
                        console.error(error);
                    }

                    return (await getCurrentWeather(latitude, longitude)).data;
                    return currentWeatherExampleResponse;
                },
                errorElement: <div>Error</div>
            },
            /* {
                path: '3-days',
                element: <div>3 day</div>
            },
            {
                path: '14-days',
                element: <div>14 day</div>
            } */
        ]
    },
    {
        path: '/*',
        element: <Navigate to='/' replace />
    }
]);

export default router;
