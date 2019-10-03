import React from 'react'
import './Landing.scss'

export default function Landing() {
    return (
        <div className='landing-container'>
            <h1>Coleton Smith</h1>
            <h2>Web Developer</h2>
            <div className="star-container">
                <div className="star"></div>
                <div className="star star-2"></div>
                <div className="star star-3"></div>
                <div className="star star-4"></div>
            </div>
        </div>
    )
}