import React from 'react'
import coverImage from '../../assets/cover/Generic-Banner-03-blue-Game.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function Navigation(props) {

    const {
        contactSelected,
        setContactSelected
    } = props;

    return(
        <nav className='row justify-content-between align-items-center' style={{
            backgroundImage: `url(${coverImage})`,
            backgroundSize: "contain",
            minHeight: "200px"
            }}>
            <h1 className='display-3 col-6' style={{
                            color: "#023E7D"
                        }}>Johnathan Shields</h1>
                <ul className='d-inline-flex list-group-horizontal col-6'>
                    <li className='list-unstyled fs-2 mx-2'>
                        <a className='text-decoration-none' onClick={() => setContactSelected(false)} href='#AboutMe' style={{
                            color: "#001233"
                        }}>About Me</a>
                    </li>
                    <li className='list-unstyled fs-2 mx-2'>
                        <a className='text-decoration-none' href='#Portfolio' style={{
                            color: "#001233"
                        }}>Portfolio</a>
                    </li>
                    <li className='list-unstyled fs-2 mx-2'>
                        <a className='text-decoration-none' href='#Contact' onClick={() => contactSelected(true)} style={{
                            color: "#001233"
                        }}>Contact</a>
                    </li>
                    <li className='list-unstyled fs-2 mx-2'>
                        <a className='text-decoration-none' href='#Resume' style={{
                            color: "#001233"
                        }}>Resume</a>
                    </li>
                </ul>
        </nav>
    )
}

export default Navigation;