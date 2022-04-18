import React from 'react'
import { Link } from 'react-router-dom'
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
                        <Link to='/' className='text-decoration-none' style={{
                            color: "#001233"
                        }}>About Me</Link>
                    </li>
                    <li className='list-unstyled fs-2 mx-2'>
                        <Link to='/portfolio' className='text-decoration-none' style={{
                            color: "#001233"
                        }} >Portfolio</Link>
                    </li>
                    <li className='list-unstyled fs-2 mx-2'>
                        <Link to='/contact' className='text-decoration-none' style={{
                            color: "#001233"
                        }}>Contact</Link>
                    </li>
                    <li className='list-unstyled fs-2 mx-2'>
                        <Link to='/resume' className='text-decoration-none' style={{
                            color: "#001233"
                        }}>Resume</Link>
                    </li>
                </ul>
        </nav>
    )
}

export default Navigation;