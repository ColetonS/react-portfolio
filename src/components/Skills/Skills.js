import React from 'react'
import './Skills.scss'
import html from '../../images/html-logo.png'
import js from '../../images/JavaScript-logo.png'
import css from '../../images/css-logo.png'
import express from '../../images/express-logo.png'
import git from '../../images/git-logo.png'
import node from '../../images/node-logo.png'
import postgres from '../../images/postgres-logo.svg'
import react from '../../images/react-logo.png'
import redux from '../../images/redux-logo.png'
import sass from '../../images/sass-logo.png'

export default function Skills() {
    return (
        <div className='skills-container'>
            <div className="skills">
                <div className='skill'>
                    <img src={js} className="logo-img" alt='JavaScript logo'></img>
                    <p>JavaScript</p>
                </div>
                <div className='skill'>
                    <img src={react} className="logo-img" alt='React logo'></img>
                    <p>React</p>
                </div>
                <div className="skill">
                    <img src={node}className='logo-img contain' alt='Node logo'></img>
                    <p>Node</p>
                </div>
                <div className='skill'>
                    <img src={express} className="logo-img" alt='Express logo'></img>
                    <p>Express</p>
                </div>
                <div className="skill">
                    <img src={postgres} className='logo-img contain' alt='PostgreSQL logo'></img>
                    <p>PostgreSQL</p>
                </div>
                <div className="skill">
                    <img src={html} className="logo-img contain" alt='HTML logo'></img>
                    <p>HTML</p>
                </div>
                <div className="skill">
                    <img src={css} className='logo-img' alt='CSS logo'></img>
                    <p>CSS</p>
                </div>
                <div className="skill">
                    <img src={sass} className='logo-img' alt='Sass logo'></img>
                    <p>Sass</p>
                </div>
                <div className="skill">
                    <img src={redux} className='logo-img' alt='Redux logo'></img>
                    <p>Redux</p>
                </div>
                <div className="skill">
                    <img src={git} className='logo-img' alt='Git logo'></img>
                    <p>Git</p>
                </div>
            </div>
        </div>
    )
}