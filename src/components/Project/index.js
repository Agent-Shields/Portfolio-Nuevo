import React from 'react'


function Project(props) {

    return (
        <div className='col-md-6 img-thumbnail img-responsive' style={{
            minHeight: "200px",
            maxHeight: "200px",
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            "&:hover": {
                background: "#efefef"
            }
        }}>
                <h1 className='row mx-2' >{props.name}</h1>
                <a href={props.gitHub} alt="GitHub Repository">GitHub Link</a>
                <a href={props.deployed} alt="Deployed Application">Deployed Application</a>
        </div>
    )
}

export default Project;