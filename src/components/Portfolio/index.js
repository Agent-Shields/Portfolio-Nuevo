import React from "react";
import Project from "../Project"

function Portfolio() {
    return (
        <section>
            <div className="row mx-2">
                <div className="col-6">
                    <h1 style={{
                        color: "#023E7D"
                    }}>Portfolio</h1>
                </div>
            </div>
            <div className="row mx-2">
                <Project />
                <Project />
            </div>
            {/* <div className="row mx-2">
                <Project />
                <Project />
            </div>
            <div className="row mx-2">
                <Project />
                <Project />
            </div> */}
        </section>
    )
}

export default Portfolio;