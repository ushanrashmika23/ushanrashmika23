import React from 'react'
import { useMediaQuery } from '@material-ui/core';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./../../node_modules/slick-carousel/slick/slick-theme.css";

const data = require('./Rewiev.json');

export default function Reviews() {
    const isDesktop = useMediaQuery('(min-width: 1024px)');
    const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
    const isMobile = useMediaQuery('(max-width: 767px)');


    const settings = {
        dots: true,
        speed: 1000,
        slidesToShow: isDesktop ? 3 : isTablet ? 2 : isMobile ? 1 : 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div>
            <section id="reviews">
                <p className="section__text__p1">Read My Clients' Feedback</p>
                <h1 className="title">Feedbacks</h1>
                <div className="review-details-container">

                    <Slider {...settings}>

                        {data.map((item, index) => {
                            return (
                                <div className="rev-container">
                                    <div className='rev-contant'>
                                        <img
                                            src={require("./../assets/experience.png")}
                                            alt="Experience icon"
                                            className="icon"
                                        />
                                        <h3>{item.name}</h3>
                                        <p>{item.email}<br/>{item.msg}</p>
                                    </div>
                                </div>
                            );
                        })}

                    </Slider>

                </div>
            </section>
        </div>
    )
}
