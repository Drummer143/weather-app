import React, { useEffect, useRef, useState } from 'react';

import SearchInput from './SearchInput';
import CitiesDropdown from './CitiesDropdown';

const DesktopSearchInput: React.FC = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const wrapperRef = useRef<HTMLDivElement>(null);

    const hideDropdown = (e: MouseEvent) => {
        if (wrapperRef.current && !e.composedPath().includes(wrapperRef.current)) {
            document.removeEventListener('click', hideDropdown);
            setIsDropdownVisible(false);
        }
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
            className='h-full relative min-w-[1.5rem] w-80 flex items-center'
        >
            <SearchInput onFocus={() => setIsDropdownVisible(true)} />

            <CitiesDropdown onItemClick={() => setIsDropdownVisible(false)} visible={isDropdownVisible} />
        </div>
    )
}
export default DesktopSearchInput;