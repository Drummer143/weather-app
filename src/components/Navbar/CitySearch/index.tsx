import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchInput from './SearchInput';
import CitiesDropdown from './CitiesDropdown';
import geolocationStore from '../../../store/geolocationStore';

const DesktopSearchInput: React.FC = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const navigate = useNavigate();

    const wrapperRef = useRef<HTMLDivElement>(null);

    const hideDropdown = (e: MouseEvent) => {
        if (wrapperRef.current && !e.composedPath().includes(wrapperRef.current)) {
            document.removeEventListener('click', hideDropdown);
            setIsDropdownVisible(false);
        }
    }

    const handleDropdownItemClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const lon = Number(e.currentTarget.dataset.lon);
        const lat = Number(e.currentTarget.dataset.lat);

        if (!isNaN(lon) && !isNaN(lat)) {
            geolocationStore.setPosition(lat, lon);

            navigate('/current')
        }

        setIsDropdownVisible(false);
    }

    useEffect(() => {
        console.log(isDropdownVisible);
        if (isDropdownVisible) {
            document.addEventListener('click', hideDropdown);
        } else {
            document.removeEventListener('click', hideDropdown);
        }
    }, [isDropdownVisible]);

    return (
        <div
            ref={wrapperRef}
            className='relative min-w-[1.5rem] w-80 flex items-center'
        >
            <SearchInput onFocus={() => setIsDropdownVisible(true)} />

            <CitiesDropdown onItemClick={handleDropdownItemClick} visible={isDropdownVisible} />
        </div>
    )
}
export default DesktopSearchInput;