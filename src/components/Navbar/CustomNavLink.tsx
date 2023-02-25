import React from "react";
import { NavLink } from "react-router-dom";

type CustomNavLinkProps = {
    to: string

    children?: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, children, onClick }) => {
    return (
        <NavLink
            to={to}
            onClick={onClick}
            className={({ isActive, isPending }) =>
                'px-2 py-1 rounded-lg transition-[color,_background-color]'
                    .concat(' underline decoration-transparent whitespace-nowrap')
                    .concat(' first-letter:uppercase')
                    .concat(' ', isActive ? 'text-black bg-white' : 'hover:decoration-white')
                    .concat(isPending ? ' pointer-events-none bg-gray-500' : '')}
        >
            {children}
        </NavLink>
    )
}

export default CustomNavLink;