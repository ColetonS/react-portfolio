import React from 'react'
import {Switch, Route} from 'react-router-dom'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

export default (
    <Switch>
        <Route path='/about' component= {About}/>
        <Route path='/contact' component= {Contact}/>
        <Route path='/projects' component= {Projects}/>
        <Route path='/skills' component= {Skills}/>
    </Switch>
)