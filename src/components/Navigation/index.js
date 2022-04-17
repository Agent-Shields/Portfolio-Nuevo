import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navigation() {
    return(
        <nav className='row'>
            <h1 className='display-2 col-4'>Johnathan Shields</h1>
            <ul className='d-inline-flex list-group-horizontal col-6'>
                <li className='list-unstyled'>
                    <a href='#AboutMe'>About Me</a>
                </li>
                <li className='list-unstyled'>
                    <a href='#Portfolio'>Portfolio</a>
                </li>
                <li className='list-unstyled'>
                    <a href='#Contact'>Contact</a>
                </li>
                <li className='list-unstyled'>
                    <a href='#Resume'>Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;