import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import DomesticViolence from "../components/DomesticViolence";
import Footer from "../components/Footer";
// import getHelp from "../assets/getHelp.svg"
export default function Home() {
    return(
        <>   
        <div className="home-nav-box"> 
            <Navbar />      
            {/* <img  src={getHelp} alt="getHelp svg for background"/> */}
        </div>
        <div>
            <About />
        </div>
        <div>
            <DomesticViolence />
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