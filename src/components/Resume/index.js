import React from "react";

function Resume() {
    return (
        <section>
            <div className="row mx-2">
                <div className="col-6">
                    <h1 style={{
                        color: "#023E7D"
                    }}>Resume</h1>
                    <h2 className="my-5" style={{
                        color: "#023E7D"
                    }}>Download my
                        <a className="m-2" href="https://docs.google.com/document/d/15deBWK6Z7RieozVFLSlR7_ih0FeIyxhA/edit?usp=sharing&ouid=105200339858078149531&rtpof=true&sd=true">resume</a>
                    </h2>
                </div>
            </div>
            <div className="row mx-2">
            <h2 style={{
                        color: "#023E7D"
                    }}>Front-end Proficiencies
                <ul>
                    <li>Bootstrap</li>
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>CSS</li>
                </ul>
                </h2>
            </div>
            <div className="row">
            <h2 style={{
                        color: "#023E7D"
                    }}>Back-end Proficiencies
                <ul>
                    <li>SQL</li>
                    <li>MongoDB</li>
                    <li>Express</li>
                    <li>Node</li>
                </ul>
                </h2>
            </div>
        </section>
    )
}

export default Resume;