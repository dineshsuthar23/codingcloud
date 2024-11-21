import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>User</h1>
            <div className="links">
                <p><NavLink to={'/'}>Home</NavLink></p>
                <p><NavLink to={'/register'}>Registration</NavLink></p>
                <p><NavLink to={'/users'}>User</NavLink></p>
            </div>
        </div>
    )
}

export default Navbar
