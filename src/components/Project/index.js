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
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`col-md-6 img-thumbnail img-responsive cursor-pointer ${isHovering ? "" : "hidden"}`} style={{
            minHeight: "200px",
            maxHeight: "200px",
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover"
        }}>
                <h1 className='row mx-2' >{props.name}</h1>
                <a href={props.gitHub} alt="GitHub Repository">GitHub Link</a>
                <a href={props.deployed} alt="Deployed Application">Deployed Application</a>
        </div>
    )
}

export default Project;