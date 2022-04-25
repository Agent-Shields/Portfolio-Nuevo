import React from 'react'
import Outfitters from '../../assets/portfolioPieces/Outfitters.PNG'

function Project(props) {

    const currentProj = {
        name: "Outfitters",
        gitHub: "https://github.com/hmailahn/outfitters",
        deployed: "https://outfitters-agent-shields.herokuapp.com/",
    }

    return (
        <div className='col-md-6 img-thumbnail' style={{
            minHeight: "200px",
            maxHeight: "200px",
            backgroundImage: `url(${Outfitters})`,
            backgroundSize: "contain"
        }}>
                <h1>{currentProj.name}</h1>
        </div>
    )
}

export default Project;