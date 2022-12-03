import { useLoaderData } from 'react-router-dom';

function CurrentWeather() {
    const data = useLoaderData();

    return <div>CurrentWeather</div>;
}

export default CurrentWeather;
