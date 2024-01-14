import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import DomesticViolence from "../components/DomesticViolence";
import Footer from "../components/Footer";
import NavBarContent from "../components/NavBarContent";
import CareHub from "../components/CareHub";

export default function Home() {
    return(
        <>  
        {/* navbar + the background picture: ./assets/getHelp.svg */}
        <div className="home-nav-box"> 
            <Navbar />      
            <NavBarContent />
        </div>

        <div>
            <About />
        </div>
      
        <div>
            <DomesticViolence />
        </div>

        <div>
            <CareHub />
        </div>
      
        <div>
            <Contact />
        </div>
      
        <div>
            <Footer />
        </div>
        </>
    )
}