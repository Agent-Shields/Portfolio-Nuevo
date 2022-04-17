import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navigation() {
    return(
        <nav>
            <ul className='d-flex flex-row list-group-flush'>
                <li className='mx-2 list-group-item'>
                    <a href='#AboutMe'>About Me</a>
                </li>
                <li className='mx-2 list-group-item'>
                    <a href='#Portfolio'>Portfolio</a>
                </li>
                <li className='mx-2 list-group-item'>
                    <a href='#Contact'>Contact</a>
                </li>
                <li className='mx-2 list-group-item'>
                    <a href='#Resume'>Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;