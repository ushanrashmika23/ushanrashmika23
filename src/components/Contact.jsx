import React from 'react'

export default function Contact() {
    return (
        <div>
            <section id="contact">
                <p className="section__text__p1">Get in Touch</p>
                <h1 className="title">Contact Me</h1>
                <div className="contact-info-upper-container">
                    <div className="contact-info-container">
                        <img
                            src={require("./../assets/email.png")}
                            alt="Email icon"
                            className="icon contact-icon email-icon"
                        />
                        <p><a href="mailto:ushanrashmika23@gmail.com">ushanrashmika23@gmail.com</a></p>
                    </div>
                    <div className="contact-info-container">
                        <img
                            src={require("./../assets/linkedin.png")}
                            alt="LinkedIn icon"
                            className="icon contact-icon"
                        />
                        <p><a href="https://www.linkedin.com/in/ushanrashmika23">LinkedIn</a></p>
                    </div>
                </div>
            </section>
        </div>
    )
}
