import React, { useCallback } from 'react';

import { countryFlagLink } from '../../../apis/OpenWeather';
import { roundToCertainOrder } from '../../../utils/helpers';

type DropdownItemProps = {
    city: OWLocationWithGivenName

    onClick?: React.MouseEventHandler<HTMLDivElement>
}

const DropdownItem: React.FC<DropdownItemProps> = ({ city, onClick }) => {
    const roundTo3Floats = useCallback((number: number) => roundToCertainOrder(number, 3), []);

    return (
        <div
            onClick={onClick}
            data-lat={city.lat}
            data-lon={city.lon}
            className={'px-1 py-1 border border-solid border-x-0 cursor-pointer transition-[background-color]'
                .concat(' first:border-t-0 last:border-b-0')
                .concat(' hover:bg-slate-200')}
        >
            <h4 className='text-base'>
                {city.name}, {city.country}
                <img className='inline-block ml-1.5' height={14} src={countryFlagLink(city.country)} />
            </h4>
            <p className='text-sm'>
                Coordinates:{' '}
                <span className='text-blue-700'>[{roundTo3Floats(city.lat)}, {roundTo3Floats(city.lon)}]</span>
            </p>
        </div>
    )
}
export default DropdownItem;