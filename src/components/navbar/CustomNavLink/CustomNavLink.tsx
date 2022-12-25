import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
    to: string

    children?: React.ReactNode
    cRef?: React.RefObject<HTMLAnchorElement>
}

function CustomNavLink({ to, children, cRef }: Props) {
    return (
        <NavLink
            to={to}
            ref={cRef}
            className={({ isActive, isPending }) =>
                'relative z-[1] px-2 py-1 rounded-lg transition-colors underline decoration-transparent'
                    .concat(' ', isActive ? 'text-black' : 'hover:decoration-white')
                    .concat(isPending ? ' pointer-events-none bg-gray-500' : '')
            }
        >
            {children}
        </NavLink>
    )
}

export default CustomNavLink;