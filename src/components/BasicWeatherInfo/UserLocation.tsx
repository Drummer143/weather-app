import React, { useEffect, useState } from 'react';

import { dateFormatter } from '../../utils/constants';
import weatherStore from '../../store/weatherStore';

const UserLocation: React.FC = () => {
    const [currentTime] = useState(dateFormatter.format(new Date()));

    useEffect(() => {
        console.log(weatherStore.city)
    })

    return (
        <div className='w-full px-3'>
            <h1 className='text-2xl pt-4'>{weatherStore.city}, {weatherStore.country}</h1>
            <p className='text-sm'>{currentTime}</p>
        </div>
    )
}
export default UserLocation;