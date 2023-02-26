import debounce from 'lodash.debounce';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import weatherStore from '../../../store/weatherStore';

import GoogleMaterialIcon from '../../GoogleMaterialIcon/GoogleMaterialIcon';

import styles from './DesktopSearchInput.module.scss';

type SearchInputProps = {
    onFocus?: React.FocusEventHandler<HTMLInputElement>
}

const SearchInput: React.FC<SearchInputProps> = ({ onFocus }) => {
    const [input, setInput] = useState('');

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => setInput(e.target.value);

    const debouncedHandleInputChange = useMemo(() => {
        return debounce(handleInputChange, 1000);
    }, []);

    useEffect(() => {
        return () => {
            debouncedHandleInputChange.cancel();
        }
    })

    useEffect(() => {
        if (input) {
            weatherStore.getCitiesWithGivenName(input);
        } else {
            weatherStore.clearSuggestedCities();
        }
    }, [input]);

    return (
        <>
            <input
                type='text'
                placeholder='Weather in your city'
                // value={input}
                onFocus={onFocus}
                onChange={debouncedHandleInputChange}
                className={'text-black h-7 rounded w-full pr-1.5 pl-7 outline outline-1 outline-transparent'
                    .concat(' ', styles.input)
                    .concat(' focus:rounded-b-none')
                    .concat(' active:outline-black')}
            />

            <GoogleMaterialIcon
                iconName='search'
                size={1.5}
                className={'absolute top-1/2 left-[2px] -translate-y-1/2 cursor-text pointer-events-none'}
                color='black'
            />
        </>
    )
}
export default SearchInput;