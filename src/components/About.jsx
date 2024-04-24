import React from 'react'

export default function About() {
    return (
        <div>
            <section id="about">
                <p className="section__text__p1">Get To Know More</p>
                <h1 className="title">About Me</h1>
                <div className="section-container">
                    <div className="section__pic-container">
                        <img
                            src={require("./../assets/about-pic.png")}
                            alt=""
                            className="about-pic"
                        />
                    </div>
                    <div className="about-details-container">
                        <div className="about-containers">
                            <div className="details-container">
                                <img
                                    src={require("./../assets/experience.png")}
                                    alt="Experience icon"
                                    className="icon"
                                />
                                <h3>Experience</h3>
                                <p>2+ years <br />Full-Stack Development</p>
                            </div>
                            <div className="details-container">
                                <img
                                    src={require("./../assets/education.png")}
                                    alt="Education icon"
                                    className="icon"
                                />
                                <h3>Education</h3>
                                <p>B.Sc. (Hons) IT UOM<br />M.Sc. in CS</p>
                            </div>
                        </div>
                        <div className="text-container">
                            <p>
                                Hi there! I'm Ushan Rashmika, a full-stack developer passionate about crafting digital experiences that make a difference. With expertise in both front-end and back-end technologies, I bring ideas to life, from concept to execution. My journey began with a love for problem-solving, which led me to dive deep into coding. Now, I thrive on creating seamless user interfaces and robust server-side solutions. When I'm not coding, you'll find me exploring new technologies, tinkering with side projects, or enjoying the great outdoors. Let's collaborate and build something amazing together!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
