import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import DomesticViolence from "../components/DomesticViolence";
import Footer from "../components/Footer";
import NavBarContent from "../components/NavBarContent";
import CareHub from "../components/CareHub";
import { Outlet } from "react-router-dom";

export default function Home() {
    return(
        <>  
        <div > 
            <Navbar />      
            <Outlet/>
      
        </div>
        </>
    )
}