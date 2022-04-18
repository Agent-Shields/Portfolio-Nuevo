import React from 'react'
import * as Icon from 'react-bootstrap-icons'

function Footer() {
    return(
        <footer className='footer justify-content-center hstack gap-3 pb-4'>
           <a href='https://github.com/Agent-Shields'> <Icon.Github  size={40}/></a>
            <a href='https://www.linkedin.com/in/johnathan-shields-3a1a301a2/'><Icon.Linkedin size={40} /></a>
            <a href='https://stackoverflow.com/users/17294308/johnathan-shields'><Icon.StackOverflow size={40} /></a>
        </footer>
    )
}

export default Footer;