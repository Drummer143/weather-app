import { Link, useLocation, NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'

import { ReactComponent as Sun } from '../../assets/sun.svg';
import { ReactComponent as CloudRight } from '../../assets/cloudRight.svg';
import { ReactComponent as CloudLeft } from '../../assets/cloudLeft.svg';

function Navbar() {
    const location = useLocation();
    const activeLinkRef = useRef<HTMLAnchorElement>(null);
    const activeLinkBackgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (activeLinkBackgroundRef.current) {
            activeLinkBackgroundRef.current.style.left = `${activeLinkRef.current?.offsetLeft || 0}px`
            activeLinkBackgroundRef.current.style.width = `${activeLinkRef.current?.offsetWidth || 0}px`
            if (!activeLinkBackgroundRef.current.style.height) {
                activeLinkBackgroundRef.current.style.height = `${activeLinkRef.current?.offsetHeight || 0}px`
            }
        }
    }, [location.pathname])

    return (
        <div className={`w-full bg-blue-700 h-12 grid grid-cols-3 items-center min-w-full px-4 text-white`}>
            <NavLink to='/' className={`group relative justify-self-start h-full grid place-items-center aspect-square w-fit`}>
                {({isActive, isPending}) =>
                    <>
                        <Sun className={`absolute h-2/3 transition-[fill] fill-yellow-300 ${isActive && 'animate-spin-5s'} ${isPending && 'animate-spin-3s'}`} />
                        <CloudLeft className={`absolute z-[1] h-2/3 transition-transform fill-slate-400 w-fit translate-x-2 translate-y-1 delay-100 duration-[275px] ${isActive && 'translate-x-[1.625rem] group-hover:translate-x-[1.625rem]'} group-hover:translate-x-6`} />
                        <CloudRight className={`absolute z-[2] h-2/3 transition-transform fill-slate-300 w-fit -translate-x-2 translate-y-1 scale-95 delay-200 duration-[375ms] shadow-smp ${isActive && '-translate-x-[1.625rem] -group-hover:-translate-x-[1.625rem]'} group-hover:-translate-x-6`} />
                    </>
                }
            </NavLink>
            <div className={`relative flex gap-2 p-2 justify-self-center`}>
                <div ref={activeLinkBackgroundRef} className={`absolute bg-white h-[calc(100%_-_0.5rem)] rounded-lg aspect-square transition-[left,_width,_height] duration-300 pointer-events-none`}></div>
                <NavLink ref={location.pathname === '/current' ? activeLinkRef : null} to='/current' className={({ isActive, isPending }) => `relative z-[1] px-2 py-1 rounded-lg transition-[color] delay-200 ${isActive && 'text-black'} ${isPending && 'pointer-events-none bg-gray-500'}`}>Current</NavLink>
                <NavLink ref={location.pathname === '/test' ? activeLinkRef : null} to='/test' className={({ isActive, isPending }) => `relative z-[1] px-2 py-1 rounded-lg transition-[color] delay-200 ${isActive && 'text-black'} ${isPending && 'pointer-events-none bg-gray-500'}`}>Test</NavLink>
            </div>
        </div>
    )
}

export default Navbar;