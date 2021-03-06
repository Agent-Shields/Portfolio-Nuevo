import React from "react";
import Project from "../Project"
import Outfitters from '../../assets/portfolioPieces/Outfitters.PNG'
import TimedQuiz from '../../assets/portfolioPieces/QuizProof.PNG'
import NoteTaker from '../../assets/portfolioPieces/NoteTaker.PNG'
import RecipEase from '../../assets/portfolioPieces/RecipEase.PNG'
import ConcertScout from '../../assets/portfolioPieces/Concert-Scout.png'
import BudgetTracker from '../../assets/portfolioPieces/Go-Budget-Tracker.PNG'

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
                <Project name="Outfitters" image={Outfitters} gitHub="https://github.com/hmailahn/outfitters" deployed="https://outfitters-agent-shields.herokuapp.com/"/>
                <Project name="Concert Scout" image={ConcertScout} gitHub="https://github.com/austinslatey/concert-scout"  deployed="https://austinslatey.github.io/concert-scout/" />
            </div>
            <div className="row mx-2">
                <Project name="RecipEase" image={RecipEase} gitHub="https://github.com/austinslatey/RecipEase"  deployed="http://thebestrecipease.herokuapp.com/" />
                <Project name="Note Taker" image={NoteTaker} gitHub="https://github.com/Agent-Shields/Note-Taker"  deployed="https://note-taker-agent-shields.herokuapp.com/" />
            </div>
            <div className="row mx-2">
                <Project name="Budget Tracker" image={BudgetTracker} gitHub="https://github.com/Agent-Shields/Go-Budget-Tracker"  deployed="https://shields-go-budget-tracker.herokuapp.com/" />
                <Project name="Timed Quiz" image={TimedQuiz} gitHub="https://github.com/Agent-Shields/Timed-Quiz"  deployed="https://agent-shields.github.io/Timed-Quiz/" />
            </div>
        </section>
    )
}

export default Portfolio;