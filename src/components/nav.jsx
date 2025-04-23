import { Link, NavLink } from 'react-router'
import '../styles/nav.styles.css'

export const Nav =()=>{

    return<>
     <NavLink to="Home" className='link'>Home</NavLink>
     <NavLink to="Form" className='link'>SignUp</NavLink>
     <NavLink to="Docs" className='link'>Docs</NavLink>
     <NavLink to="search" className='link'>Search</NavLink>
     <NavLink to="setting" className='link'>Setting</NavLink>
     <NavLink to="admin" className='link'>Admin</NavLink>

    </>
}