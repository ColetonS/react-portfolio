import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

export default function Nav() {
    return (
        <div className='nav-container'>
            <Link to='/'>
                <h6>Home</h6>
            </Link>
            <Link to='/about'>
                <h6>About</h6>
            </Link>
            <Link to='/skills'>
                <h6>Skills</h6>
            </Link>
            <Link to='/projects'>
                <h6>Projects</h6>
            </Link>
            <Link to='/contact'>
                <h6>Contact</h6>
            </Link>
        </div>
    )
}