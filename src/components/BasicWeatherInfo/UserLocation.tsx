import React, { useEffect, useState } from 'react';

import { dateFormatter } from '../../utils/constants';
import geolocationStore from '../../store/geolocationStore';

const UserLocation: React.FC = () => {
    const [currentTime] = useState(dateFormatter.format(new Date()));

    useEffect(() => {
        console.log(geolocationStore.city)
    })

    return (
        <div className='w-full px-3'>
            <h1 className='text-2xl pt-4'>{geolocationStore.city}, {geolocationStore.country}</h1>
            <p className='text-sm'>{currentTime}</p>
        </div>
    )
}
export default UserLocation;