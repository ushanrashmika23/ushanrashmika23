import React from "react";
import ExpSkill from "./ExpSkill";
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaBootstrap,
    FaAngular,
    FaPython,
    FaJava,
    FaNode,
} from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { SiMongodb, SiExpress, SiSpringboot } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const FS = require("./FrontSkill.json");
const BS = require("./BackSkill.json");
const skill = [
    <FaHtml5 size={"2.0rem"} />,
    <FaCss3Alt size={"2.0rem"} />,
    <IoLogoJavascript size={"2.0rem"} />,
    <FaReact size={"2.0rem"} />,
    <FaBootstrap size={"2.0rem"} />,
    <FaAngular size={"2.0rem"} />,
    <FaPython size={"2.0rem"} />,
    <FaJava size={"2.0rem"} />,
    <FaNode size={"2.0rem"} />,
    <TbSql size={"2.0rem"} />,
    <SiMongodb size={"2.0rem"} />,
    <SiExpress size={"2.0rem"} />,
    <SiSpringboot size={"2.0rem"} />
];

export default function Experience() {
    return (
        <div>
            <section id="experience">
                <p className="section__text__p1">Explore My</p>
                <h1 className="title">Experience</h1>
                <div className="experience-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <h2 className="experience-sub-title">Frontend Development</h2>
                            <div className="article-container">
                                {FS.map((item, index) => {
                                    return (
                                        <ExpSkill key={index}
                                            name={item.name}
                                            rate={item.rate}
                                            badge={skill[item.icon - 1]}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="details-container">
                            <h2 className="experience-sub-title">Backend Development</h2>
                            <div className="article-container">
                                {BS.map((item, index) => {
                                    return (
                                        <ExpSkill key={index}
                                            name={item.name}
                                            rate={item.rate}
                                            badge={skill[item.icon - 1]}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
