import { createBrowserRouter, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
import weatherStore from './store/weatherStore';
import positionStore from './store/geolocationStore';
import BasicWeatherInfo from './components/BasicWeatherInfo';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'current', //lan=:lan&lon=:lon",
                id: 'current',
                element: <BasicWeatherInfo />,
                loader: async (): Promise<OWCurrentWeatherResponse> => {
                    await positionStore.requestPosition()

                    const currentWeather = await weatherStore.requestCurrentWeather(positionStore.latitude, positionStore.longitude);

                    positionStore.setCity(currentWeather.name);
                    positionStore.setCountry(currentWeather.sys.country);

                    return currentWeather;
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
