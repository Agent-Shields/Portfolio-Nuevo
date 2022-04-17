import React from 'react'
import Navigation from '../Navigation';

function Header() {
    return(
        <section className='mb-2 flex-row sticky-top'>
            <Navigation />  
        </section>
    )
}

export default Header;