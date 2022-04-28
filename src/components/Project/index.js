import React, { useState } from 'react'
import { Link } from 'react-router-dom' 


function Project(props) {

    const [isHovering, setisHovering] = useState(false)

    function handleMouseEnter(e) {
        setisHovering(true)
        // console.log("enter")
    }

    function handleMouseLeave() {
        setisHovering(false)
        // console.log('leave')
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='col-md-6 img-thumbnail img-responsive' style={{
            maxHeight: "200px",
            minHeight: "200px",
            backgroundSize: "cover",
            backgroundImage: `url(${props.image})`,
        }}>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${isHovering ? "show" : "hidden"}`} style={{
                maxHeight: "200px",
                minHeight: "200px",
                backgroundColor:"rgba(151, 157, 172, .7) ",
                backgroundSize: "cover",
                color:"#023E7D"
            }}>
                <h1 className='row mx-2' >{props.name}</h1>
                <Link to={{ pathname: `${props.gitHub}`}} target="_blank">
                <button className='btn btn-primary' alt="GitHub Repository">GitHub Link</button>
                </Link>
                <Link to={{ pathname: `${props.deployed}`}} target="_blank">
                <button className='btn btn-primary' alt="Deployed Application">Deployed Application</button>
                </Link>
            </div>
        </div>
    )
}

export default Project;