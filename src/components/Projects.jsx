import React from 'react'
import Project from './Project'

const projectData = require("./ProjectData.json")

export default function Projects() {
    return (
        <div>
            <section id="projects">
                <p className="section__text__p1">Browse My Recent</p>
                <h1 className="title">Projects</h1>
                <div className="experience-details-container">
                    <div className="about-containers">

                        {projectData.map((item, index) => {
                            return (
                                <Project key={index} {...item}/>
                            )
                        })}



                    </div>
                </div>
            </section>
        </div>
    )
}
