import { NavLink } from 'react-router'
import './style.css'

export const Nav = () => {

    return <>
        <div className='nav'>
            <NavLink to='Home' className='link'>Home</NavLink>

            <NavLink to='Form' className='link'>SignUp</NavLink>

            <NavLink to='Docs' className='link'>Docs</NavLink>

            <NavLink to='search' className='link'>Search</NavLink>

            <NavLink to='setting' className='link'>Setting</NavLink>

            <NavLink to='AdminPanel' className='link'>Admin</NavLink>
        </div>
    </>
}