import React from 'react';
import { NavLink } from "react-router-dom";

import { SunSVG, CloudLeftSVG, CloudRightSVG } from "../../assets";

const Logo: React.FC = () => {
    return (
        <NavLink
            to="/"
            className={'group relative justify-self-start h-full grid place-items-center aspect-square w-fit'}
        >
            {({ isActive, isPending }) => (
                <>
                    <SunSVG
                        className={'absolute h-2/3 transition-[fill] fill-yellow-300'
                            .concat(isActive ? ' sm:animate-spin-5s' : '')
                            .concat(isPending ? ' sm:animate-spin-3s' : '')
                        }
                    />

                    <CloudLeftSVG
                        className={'absolute z-[2] h-2/3 transition-transform fill-slate-400 w-fit'
                            .concat(' -translate-x-2 translate-y-1 delay-100 duration-[275px]')
                            .concat(' group-hover:-translate-x-6')
                            .concat(isActive ? ' -translate-x-[1.625rem]' : '')
                        }
                    />

                    <CloudRightSVG
                        className={'absolute z-[1] h-2/3 transition-transform fill-slate-300 w-fit'
                            .concat(' translate-x-2 translate-y-1 scale-95 delay-200 duration-[375ms]')
                            .concat(' group-hover:translate-x-6')
                            .concat(isActive ? ' translate-x-[1.625rem]' : '')
                        }
                    />
                </>
            )}
        </NavLink>
    )
}

export default Logo;