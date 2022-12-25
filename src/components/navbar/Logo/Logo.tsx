import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Sun } from '../../../assets/sun.svg';
import { ReactComponent as CloudLeft } from '../../../assets/cloudLeft.svg';
import { ReactComponent as CloudRight } from '../../../assets/cloudRight.svg';

function Logo() {
    return (
        <NavLink
            to="/"
            className={'group relative justify-self-start h-full grid place-items-center aspect-square w-fit'}
        >
            {({ isActive, isPending }) => (
                <React.Fragment>
                    <Sun
                        className={'absolute h-2/3 transition-[fill] fill-yellow-300'
                            .concat(isActive ? ' animate-spin-5s' : '')
                            .concat(isPending ? ' animate-spin-3s' : '')
                        }
                    />
                    <CloudLeft
                        className={
                            'absolute z-[2] h-2/3 transition-transform fill-slate-400 w-fit -translate-x-2 translate-y-1 delay-100 duration-[275px]'
                                .concat(' group-hover:-translate-x-6')
                                .concat(isActive ? ' -translate-x-[1.625rem]' : '')
                        }
                    />
                    <CloudRight
                        className={
                            'absolute z-[1] h-2/3 transition-transform fill-slate-300 w-fit translate-x-2 translate-y-1 scale-95 delay-200 duration-[375ms]'
                                .concat(' group-hover:translate-x-6')
                                .concat(isActive ? ' translate-x-[1.625rem]' : '')
                        }
                    />
                </React.Fragment>
            )}
        </NavLink>
    )
}

export default Logo;