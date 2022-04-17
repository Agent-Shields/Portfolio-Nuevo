import React from 'react'
import Navigation from '../Navigation';

function Header() {
    return(
        <section className='m-2 flex-row sticky-top'>
            <Navigation />  
        </section>
    )
}

export default Header;