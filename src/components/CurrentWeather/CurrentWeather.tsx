import { useLoaderData } from 'react-router-dom'

function CurrentWeather() {
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            CurrentWeather
        </div>
    )
}

export default CurrentWeather;