import React from 'react'
import './Landing.scss'

export default function Landing() {
    return (
        <div className='landing-container'>
            <h1>Coleton Smith</h1>
            <h2>Web Developer</h2>
            <div className="star-container">
                <div className="star star-1"></div>
                <div className="star star-2"></div>
                <div className="star star-3"></div>
                <div className="star star-4"></div>
                <div className="star star-5"></div>
                <div className="star star-6"></div>
            </div>
            <div className="star-container-2">
                <div className="star star-7"></div>
            </div>
        </div>
    )
}