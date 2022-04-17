import React from 'react'
import coverImage from '../../assets/cover/Generic-Banner-03-blue-Game.png'
import Navigation from '../Navigation';

function Header() {
    return(
        <section className='my-5 flex-row'>
            <h1 className='display-2'>
            <div style={{
                 backgroundImage: `url(${coverImage})`,
                 backgroundSize: "cover"
                 }}>
            <Navigation />
            </div>    
            </h1>  
        </section>
    )
}

export default Header;