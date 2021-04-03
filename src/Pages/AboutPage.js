import React from 'react'
import Title from '../Components/Title'
import ImageSection from './ImageSection'
import Skills from "./skills.js"

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={"About Me"} span={"About Me"}/>
            <ImageSection/>
            <Title title={"Skills"} span={"Skills"}/>
            <div className="skillsContainer">
            <Skills/>
            </div>
        </div>
    )
}

export default AboutPage
