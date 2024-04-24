import React from "react";



export default function Home() {
    const [isOpen, setIsOpen] = React.useState(false);

    function toggleMenu() {
        setIsOpen((isOpen) => !isOpen);
        console.log(isOpen)
    }

    return (
        <div>
            <nav id="desktop-nav">
                <div className="logo">Rashmika</div>
                <div>
                    <ul className="nav-links">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>


            <nav id="hamburger-nav">
                <div className="logo">Rashmika</div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon" onClick={() => { toggleMenu(isOpen) }}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={`menu-links ${isOpen ? "open" : ""} `} id="menu-links">
                        <li>
                            <a href="#about" onClick={() => { toggleMenu(isOpen) }}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#experience" onClick={() => { toggleMenu(isOpen) }}>
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="#projects" onClick={() => { toggleMenu(isOpen) }}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => { toggleMenu(isOpen) }}>
                                Contact
                            </a>
                        </li>
                    </div>
                </div>
            </nav>


            <section id="profile">
                <div className="section__pic-container">
                    <img src={require("./../assets/profile-pic.png")} alt="" />
                </div>
                <div className="section__text">
                    <p className="section__text__p1">Hello, I'm</p>
                    <h1 className="title">Ushan Rashmika</h1>
                    <p className="section__text__p2">Full-Stack Developer</p>
                    <div className="btn-container">
                        <button
                            className="btn btn-color-2"
                            onClick={() => { window.open("./resume.pdf") }}
                        >
                            Download CV
                        </button>
                        <button
                            className="btn btn-color-1"
                            onClick={() => { window.location.replace("./#contact") }}
                        >
                            Contact Info
                        </button>
                    </div>
                    <div id="socials-container">
                        <img
                            src={require("./../assets/linkedin.png")}
                            alt="My LinkedIn profile"
                            className="icon"
                            onClick={() => { window.location.href = ("https://linkedin.com/in/ushanrashmika23") }}
                        />
                        <img
                            src={require("./../assets/instagram.png")}
                            alt="My Insta profile"
                            className="icon"
                            onClick={() => { window.location.href = ("https://instagram.com/ushanrashmika23") }}
                        />
                        <img
                            src={require("./../assets/github.png")}
                            alt="My Github profile"
                            className="icon"
                            onClick={() => { window.location.href = ("https://github.com/ushanrashmika23") }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
