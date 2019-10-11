import React from 'react'
import './Skills.scss'

export default function Skills() {
    return (
        <div className='skills-container'>
            <div className="skills">
                <div className='skill'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png' className="logo-img" alt='JavaScript logo'></img>
                    <p>JavaScript</p>
                </div>
                <div className='skill'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png' className="logo-img" alt='React logo'></img>
                    <p>React</p>
                </div>
                <div className="skill">
                    <img src='https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png' className='logo-img contain' alt='Node logo'></img>
                    <p>Node</p>
                </div>
                <div className='skill'>
                    <img src='https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/landscape/expressjslogo.png' className="logo-img" alt='Express logo'></img>
                    <p>Express</p>
                </div>
                <div className="skill">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' className='logo-img contain' alt='PostgreSQL logo'></img>
                    <p>PostgreSQL</p>
                </div>
                <div className="skill">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png' className="logo-img" alt='HTML logo'></img>
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png' className='logo-img contain' alt='CSS logo'></img>
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <img></img>
                    <p></p>
                </div>
                <div className="skill">
                    <img></img>
                    <p></p>
                </div>
            </div>
        </div>
    )
}