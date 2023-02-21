import { useLoaderData } from 'react-router-dom';
import { owWeatherImage } from '../../apis/OpenWeather/urlBuilders';

function CurrentWeather() {
    const data = useLoaderData() as OWCurrentWeatherResponse;

    console.log(data);

    return (
        <div>
            {data.weather?.length && data.weather[0].icon && <img src={owWeatherImage(data.weather[0]?.icon)} />}
        </div>
    );
}

export default CurrentWeather;
