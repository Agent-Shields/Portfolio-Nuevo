import React from 'react'

function Navigation() {
    return(
        <nav>
            <ul className='flex-row'>
                <li className='mx-2'>
                    <a href='#AboutMe'>About Me</a>
                </li>
                <li className='mx-2'>
                    <a href='#Portfolio'>Portfolio</a>
                </li>
                <li className='mx-2'>
                    <a href='#Contact'>Contact</a>
                </li>
                <li className='mx-2'>
                    <a href='#Resume'>Resume</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;