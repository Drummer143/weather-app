import React from 'react';
import { useLoaderData } from 'react-router-dom';


import UserLocation from './UserLocation';
import CurrentWeather from './CurrentWeather/CurrentWeather';

const BasicWeatherInfo: React.FC = () => {
    const currentWeather = useLoaderData() as OWCurrentWeatherResponse;

    return (
        <div className={'flex items-center flex-col gap-2 w-full'}>
            <UserLocation />

            <CurrentWeather />
        </div>
    );
}

export default BasicWeatherInfo;
