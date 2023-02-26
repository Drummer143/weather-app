import React from 'react';
import { observer } from 'mobx-react-lite';

import DropdownItem from './DropdownItem';
import weatherStore from '../../../store/weatherStore';

type CitiesDropdownProps = {
    visible?: boolean

    onItemClick?: React.MouseEventHandler<HTMLDivElement>
}

const CitiesDropdown: React.FC<CitiesDropdownProps> = observer(({ visible = false, onItemClick }) => {
    return (
        <div
            className={'absolute bottom-0 left-1/2 w-[calc(100%+2px)] px-1 border border-solid'
                .concat(' max-h-[20vh] max-md:max-h-[50vh] overflow-y-auto overflow-x-hidden border-black border-t-0')
                .concat(' rounded-b translate-y-full -translate-x-1/2 bg-white text-black')
                .concat(visible && weatherStore.suggestedCities.length > 0 ? '' : ' hidden')}
        >
            {weatherStore.suggestedCities.map(city => (
                <DropdownItem key={city.lat + city.lon} city={city} onClick={onItemClick} />
            ))}
        </div>
    )
})

export default CitiesDropdown;