import React from 'react'

export default function Project(props) {
    return (
        <div className="details-container color-container">
            <div className="article-container">
                <img
                    src={props.image}
                    alt="Project 3"
                    className="project-img"
                />
            </div>
            <h2 className="experience-sub-title project-title">{props.name}</h2>
            <div className="btn-container">
                <button
                    className="btn btn-color-2 project-btn"
                    onClick={()=>{window.location.href=props.git}}
                >
                    Github
                </button>
                <button
                    className="btn btn-color-2 project-btn"
                    onClick={()=>{window.location.href=props.demo}}
                >
                    Live Demo
                </button>
            </div>
        </div>
    )
}
