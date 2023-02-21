import React from "react";
import { NavLink } from "react-router-dom";

type CustomNavLinkProps = {
    to: string

    children?: React.ReactNode
    cRef?: React.RefObject<HTMLAnchorElement>
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, children, cRef }) => {
    return (
        <NavLink
            to={to}
            ref={cRef}
            className={({ isActive, isPending }) =>
                'relative z-[1] px-2 py-1 rounded-lg transition-colors underline decoration-transparent'
                    .concat(' first-letter:uppercase')
                    .concat(' ', isActive ? 'text-black' : 'hover:decoration-white')
                    .concat(isPending ? ' pointer-events-none bg-gray-500' : '')
            }
        >
            {children}
        </NavLink>
    )
}

export default CustomNavLink;