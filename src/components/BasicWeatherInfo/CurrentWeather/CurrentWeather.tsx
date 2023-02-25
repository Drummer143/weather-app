import React, { useState } from 'react';

import weatherStore from '../../../store/weatherStore';
import AdditionalInfoItem from './AdditionalInfoItem';
import { weatherImageLink } from '../../../apis/OpenWeather';
import { speedFormatter, tempFormatter, timeFormatter } from '../../../utils/constants';

const CurrentWeather: React.FC = () => {
    const [imageSrc] = useState(weatherImageLink(weatherStore.currentWeather?.weather[0].icon, '4'));

    if (!weatherStore.currentWeather) {
        return (
            <div className='rounded-md flex justify-center items-center py-1 pl-2 pr-3 gap-1'>
                Error in getting weather info
            </div>
        )
    }

    return (
        <div className='rounded-md w-full max-md:flex-wrap flex h-fit justify-center items-stretch py-1 pl-2 pr-3 gap-1'>
            <div className={`w-1/2 max-md:w-full flex items-center justify-center max-md:border-none border-0 border-solid border-r-2 border-black`}>
                <div className='flex-grow-[1.25] flex justify-center items-center'>
                    <img className={`w-40`} src={imageSrc} alt='weather image' />
                </div>

                <div className='flex-grow text-center'>
                    <p className={`text-6xl place-self-center whitespace-nowrap`}>{tempFormatter.format(Math.round(weatherStore.currentWeather?.main.temp))}</p>
                    <p className={`text-sm whitespace-nowrap`}>{weatherStore.currentWeather.weather[0].description}</p>
                </div>
            </div>

            <div className='w-1/2 max-md:w-full grid gap-y-3 grid-cols-3 place-items-center'>
                <AdditionalInfoItem
                    bottomText='Max'
                    text={tempFormatter.format(Math.round(weatherStore.currentWeather.main.temp_max))}
                />
                <AdditionalInfoItem
                    bottomText='Humidity'
                    text={`${weatherStore.currentWeather.main.humidity}%`}
                />
                <AdditionalInfoItem
                    bottomText='Sunrise'
                    text={timeFormatter.format(weatherStore.currentWeather.sys.sunrise * 1000)}
                />
                <AdditionalInfoItem
                    bottomText='Min'
                    text={tempFormatter.format(Math.round(weatherStore.currentWeather.main.temp_min))}
                />
                <AdditionalInfoItem
                    bottomText='Wind'
                    text={speedFormatter.format(weatherStore.currentWeather.wind.speed)}
                />
                <AdditionalInfoItem
                    bottomText='Sunset'
                    text={timeFormatter.format(weatherStore.currentWeather.sys.sunset * 1000)}
                />
            </div>
        </div>
    )
}
export default CurrentWeather;