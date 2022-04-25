import React from 'react'


function Project(props) {

    return (
        <div className='col-md-6 img-thumbnail' style={{
            minHeight: "200px",
            maxHeight: "200px",
            backgroundImage: `url(${props.image})`,
            backgroundSize: "contain"
        }}>
                <h1>{props.name}</h1>
        </div>
    )
}

export default Project;