import React from 'react'
import PortfolioAvatar from '../../assets/avatar/Portfolio-Picture.jpg'

function About() {
    return (
        <section>
            <div className='row justify-content-center'>
                <h2 className='my-5 fs-1 text-center col-12' style={{
                    color: "#023E7D" 
                }}>Well Met!</h2>
                <img src={PortfolioAvatar} className="img-responsive rounded-circle col-3 align-self-center" alt='Portrait of Johnathan'></img>
            </div>
            <div className='row justify-content-center'>
                <p className='col-6 text-center m-4' style={{
                    color: "#33415C" 
                }}>
                    After graduating from the Dunwoody college of Technology with my associates in Industrial Controls and Robotics, I officially joined the Buhler Automation team as an Automation Engineer with a strong focus on software development. The team was in need of software based engineers and therefore I joined the University of Minnesota's full-stack software bootcamp to bolster my software development fundamentals and fulfill the need of more software based support for my team. With a passion for learning and curiosity for all things programming, I strive to deploy the latest and greatest technologies to help develop dynamic and cutting edge applications for our customers at Buhler!
                </p>
            </div>
        </section>
    )
}

export default About;