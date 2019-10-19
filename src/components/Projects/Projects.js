import React from 'react'
import './Projects.scss'
import writeon from '../../images/write-on.png'
import youteachme from '../../images/youteachme.png'

export default function Projects() {
    return (
        <div className='projects-container'>
            <h1>Projects</h1>
            <div className="projects">
                <div className="project">
                    <h2>Write On</h2>
                    <img className='project-img' alt='app image' src={writeon} />
                </div>
                <div className="project">
                    <h2>youTeachMe</h2>
                    <img className='project-img' alt='app image' src={youteachme} />
                </div>
            </div>
        </div>
    )
}