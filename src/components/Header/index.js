import React from 'react'
import Navigation from '../Navigation';

function Header() {
    return(
        <section className='my-5 flex-row'>
            <h1 className='display-2'>
            <Navigation />  
            </h1>  
        </section>
    )
}

export default Header;