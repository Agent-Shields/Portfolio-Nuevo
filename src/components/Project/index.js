import React, { useState } from 'react'


function Project(props) {

    const [isHovering, setisHovering] = useState(false)

    function handleMouseEnter(e) {
        setisHovering(true)
        console.log("enter")
    }

    function handleMouseLeave() {
        setisHovering(false)
        console.log('leave')
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='col-md-6 img-thumbnail img-responsive' style={{
            maxHeight: "200px",
            minHeight: "200px",
            backgroundSize: "cover",
            backgroundImage: `url(${props.image})`,
        }}>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${isHovering ? "show" : "hidden"}`} style={{
                opacity:'75',
                maxHeight: "200px",
                minHeight: "200px",
                backgroundColor:"darkgray",
                backgroundSize: "cover"
            }}>
                <h1 className='row mx-2' >{props.name}</h1>
                <a href={props.gitHub} alt="GitHub Repository">GitHub Link</a>
                <a href={props.deployed} alt="Deployed Application">Deployed Application</a>
            </div>
        </div>
    )
}

export default Project;