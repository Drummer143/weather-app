import { createBrowserRouter } from 'react-router-dom';

import { AxiosPromise } from 'axios';
import { getCurrentWeather } from './apis/OpenWeather/requests';
import Layout from './components/Layout/Layout';
import positionStore from './store/positionStore';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import { aGeolocation } from './apis/Abstract/requests';

const router = createBrowserRouter([
    {
        path: '/*',
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
                    return JSON.parse(`{    "coord": {        "lon": 44.5096,        "lat": 40.1458    },    "weather": [        {            "id": 701,            "main": "Mist",            "description": "mist",            "icon": "50n"        }    ],    "base": "stations",    "main": {        "temp": 272.48,        "feels_like": 272.48,        "temp_min": 272.48,        "temp_max": 272.48,        "pressure": 1018,        "humidity": 74    },    "visibility": 3500,    "wind": {        "speed": 0,        "deg": 0    },    "clouds": {        "all": 3    },    "dt": 1672000785,    "sys": {        "type": 1,        "id": 8851,        "country": "AM",        "sunrise": 1672028564,        "sunset": 1672062111    },    "timezone": 14400,    "id": 616353,    "name": "Nor Aresh",    "cod": 200}`);
                }
            }
        ]
    }
]);

export default router;
