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
                    let latitude = /* lat ? Number(lat) : */ positionStore.latitude,
                        longitude = /* lon ? Number(lon) : */ positionStore.longitude;

                    if (!latitude || !longitude) {
                        aGeolocation().then(({ data }) => {
                            console.log(data);

                            latitude = data.latitude;
                            longitude = data.longitude;
                        })
                    }

                    // return getCurrentWeather(latitude, longitude).then(res => res.data).catch(error => error);
                    return JSON.parse(`{"coord": {"lon": 0,"lat": 0},"weather": [{"id": 804,"main": "Clouds","description": "overcast clouds","icon": "04d"}],"base": "stations","main": {"temp": 298.96,"feels_like": 299.69,"temp_min": 298.96,"temp_max": 298.96,"pressure": 1007,"humidity": 80,"sea_level": 1007,"grnd_level": 1007},"visibility": 10000,"wind": {"speed": 4.27,"deg": 206,"gust": 4.52},"clouds": {"all": 100},"dt": 1670084519,"sys": {"sunrise": 1670046381,"sunset": 1670090011},"timezone": 0,"id": 6295630,"name": "Globe","cod": 200}`);
                }
            }
        ]
    }
]);

export default router;
