import React from 'react'
import coverImage from '../../assets/cover/Generic-Banner-03-blue-Game.png'

function Header() {
    return(
        <section className='my-5 flex-row'>
            <h1 className='display-2'>    
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            </h1>  
        </section>
    )
}

export default Header;