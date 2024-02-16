import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Home() {
    return(
        <>  
        <div > 
            <Navbar />      
            <Outlet/>
            <Footer/>
      
        </div>
        </>
    )
}