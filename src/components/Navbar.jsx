import { Link } from 'react-router-dom';
import logo_name from '../assets/logo_name.svg'
import { Outlet } from "react-router-dom";

export default function Navbar(){
    return (
        // navbar: render all paths in the Router.jsx
        <nav>
        <img  src={logo_name} alt='logo and name of NeverEverAlone'/>
        <Link to="/">Home</Link>
        <Link to="/domestic-violence">Domestic Violence</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/donate-now">Donate now</Link>
        {/* import Outlet so all the components in children paths can render */}
        <div>
            <Outlet />
        </div>

        </nav>

        
    )
}