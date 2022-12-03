import { NavLink, Link } from 'react-router-dom'

function Navbar () {
    return (
        <div className={`w-full bg-blue-500 flex justify-between items-center`}>
            <Link to='/'>Main</Link>
            <div className={`flex gap-2`}>
                <NavLink to='/' className={({isActive, isPending}) => ``}>Link 1</NavLink>
                <NavLink to='/' className={({isActive, isPending}) => ``}>Link 2</NavLink>
                <NavLink to='/' className={({isActive, isPending}) => ``}>Link 3</NavLink>
                <NavLink to='/' className={({isActive, isPending}) => ``}>Link 4</NavLink>
                <NavLink to='/' className={({isActive, isPending}) => ``}>Link 5</NavLink>
            </div>
        </div>
    )
}

export default Navbar;