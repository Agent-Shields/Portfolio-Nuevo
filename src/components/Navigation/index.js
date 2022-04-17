import React from 'react'
import coverImage from '../../assets/cover/Generic-Banner-03-blue-Game.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navigation() {
    return(
        <nav className='row justify-content-between align-items-center' style={{
            backgroundImage: `url(${coverImage})`,
            backgroundSize: "contain",
            minHeight: "200px",
            minWidth: "100%"
            }}>
            <h1 className='display-3 col-6'>Johnathan Shields</h1>
                <ul className='d-inline-flex list-group-horizontal col-6'>
                    <li className='list-unstyled fs-1 mx-2'>
                        <a href='#AboutMe'>About Me</a>
                    </li>
                    <li className='list-unstyled fs-1 mx-2'>
                        <a href='#Portfolio'>Portfolio</a>
                    </li>
                    <li className='list-unstyled fs-1 mx-2'>
                        <a href='#Contact'>Contact</a>
                    </li>
                    <li className='list-unstyled fs-1 mx-2'>
                        <a href='#Resume'>Resume</a>
                    </li>
                </ul>
        </nav>
    )
}

export default Navigation;