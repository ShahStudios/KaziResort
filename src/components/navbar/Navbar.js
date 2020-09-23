import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

function Navbar() {
    const [click, setClick] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const changeBackground = () => {
        if (window.scrollY >= 80) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className={navbar ? 'navbar active' : 'navbar' }>
                    <div className='navbar-container container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            Kazi Resort</Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                                    Hotels &amp; Resorts
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/services'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Private Retreats
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/services'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    RESIDENCES
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link
                                    to='/services'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    Shop
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar