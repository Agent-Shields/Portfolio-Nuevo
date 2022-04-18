import React from 'react'
import coverImage from '../../assets/cover/Generic-Banner-03-blue-Game.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navigation() {

    return(
        <nav className='row justify-content-between align-items-center' style={{
            backgroundImage: `url(${coverImage})`,
            backgroundSize: "contain",
            minHeight: "200px"
            }}>
            <h1 className='display-3 col-6' style={{
                            color: "#023E7D"
                        }}>Johnathan Shields</h1>
                <ul className='d-inline-flex list-group-horizontal col-6 links'>
                    <li className='list-unstyled fs-2 mx-2'>
                        <a href='/' className='text-decoration-none' style={{
                            color: "#001233"
                        }}>About Me</a>
                    </li>
                    <li className='list-unstyled fs-2 mx-2'>
                        <a href='/portfolio' className='text-decoration-none' style={{
                            color: "#001233"
                        }} >Portfolio</a>
                    </li>
                    <li className='list-unstyled fs-2 mx-2'>
                        <a href='/contact' className='text-decoration-none' style={{
                            color: "#001233"
                        }}>Contact</a>
                    </li>
                    <li className='list-unstyled fs-2 mx-2'>
                        <a href='/resume' className='text-decoration-none' style={{
                            color: "#001233"
                        }}>Resume</a>
                    </li>
                </ul>
        </nav>
    )
}

export default Navigation;