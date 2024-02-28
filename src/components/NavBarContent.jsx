import {WhoWeAre, CareHub,DomesticViolence,WhatWeDo} from "./";
import { Carousel } from "@material-tailwind/react";
import quotes from "./quotes";
import CarouselForQuote from "./CarouselForQuote";
export default function NavBarContent() {

    return (
        <div>
        <Carousel className="font-montserrat bg-cover bg-center bg-[url('./assets/getHelp.svg')] h-screen sm:w-auto bg-image-mobile sm:bg-image-desktop">
        {quotes.map((quote,index)=>(<CarouselForQuote key={index}{...quote} />))}
        
        </Carousel>
        <WhoWeAre />
        <WhatWeDo />
        <DomesticViolence />
        <CareHub />
        </div>
    )
}