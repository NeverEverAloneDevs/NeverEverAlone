import React from "react";
import Slider from "react-slick";
import {WhoWeAre, CareHub,DomesticViolence,WhatWeDo} from "./";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import quotes from "./quotes";
import CarouselForQuote from "./CarouselForQuote";
export default function NavBarContent() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear"
      };
    return (
        <div>
        <Slider {...settings} className="font-montserrat bg-cover bg-center bg-[url('./assets/getHelp.svg')] h-screen sm:w-auto bg-image-mobile sm:bg-image-desktop">
            {quotes.map((quote,index)=>(<CarouselForQuote key={index}{...quote} />))}
        </Slider>
     
        <WhoWeAre />
        <WhatWeDo />
        <DomesticViolence />
        <CareHub />
        </div>
    )
}