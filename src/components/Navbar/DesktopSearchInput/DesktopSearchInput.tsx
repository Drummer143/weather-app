import React, { useRef, useState } from 'react';

import GoogleMaterialIcon from '../../GoogleMaterialIcon/GoogleMaterialIcon';

const DesktopSearchInput: React.FC = () => {
    const [input, setInput] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setInput(e.target.value);

    const handleClick: React.MouseEventHandler<HTMLDivElement> = () => inputRef.current?.focus();

    return (
        <div
            onClick={handleClick}
            className='h-full relative min-w-[1.5rem] w-full flex items-center cursor-text'
        >
            <input
                ref={inputRef}
                type='text'
                placeholder='Weather in your city'
                value={input}
                onChange={handleInputChange}
                className={'text-black h-7 rounded w-full pr-1.5 pl-7 outline outline-1 outline-transparent'
                    .concat(' active:outline-black')}
            />

            <GoogleMaterialIcon
                iconName='search'
                size={1.5}
                className={'absolute top-1/2 left-[2px] -translate-y-1/2'}
                color='black'
            />
        </div>
    )
}
export default DesktopSearchInput;