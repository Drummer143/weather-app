// import { AxiosPromise } from 'axios';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import Layout from './components/Layout';
// import positionStore from './store/positionStore';
import CurrentWeather from './components/CurrentWeather';
// import { aGeolocation } from './apis/Abstract/requests';
// import { getCurrentWeather } from './apis/OpenWeather/requests';
import { currentWeatherExampleResponse } from './utils/constants';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'current', //lan=:lan&lon=:lon",
                element: <CurrentWeather />,
                loader: async (/* { params: { lat, lon } } */) => {
                    // let latitude = /* lat ? Number(lat) : */ positionStore.latitude,
                    //     longitude = /* lon ? Number(lon) : */ positionStore.longitude;

                    // console.log(latitude, longitude)

                    // if (!latitude || !longitude) {
                    //     await aGeolocation().then(({ data }) => {
                    //         console.log(data);

                    //         latitude = data.latitude;
                    //         longitude = data.longitude;
                    //     })
                    // }

                    // return getCurrentWeather(latitude, longitude).then(res => res.data).catch(error => error);
                    return currentWeatherExampleResponse;
                }
            },
            {
                path: '3-days',
                element: <div>3 day</div>
            },
            {
                path: '14-days',
                element: <div>14 day</div>
            }
        ]
    },
    {
        path: '/*',
        element: <Navigate to='/' replace />
    }
]);

export default router;
