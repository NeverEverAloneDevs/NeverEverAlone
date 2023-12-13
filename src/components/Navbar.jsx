import { Link } from 'react-router-dom';
import logo_name from '../assets/logo_name.svg'
import { Outlet } from "react-router-dom";
export default function Navbar(){
    return (
        // navbar: render all paths in the Router.jsx
    <div>
        <nav>
        <img  src={logo_name} alt='logo and name of NeverEverAlone'/>
        <div className='nav-items'>
        <Link className='nav-home'to="/">Home</Link>
        <Link className='nav-rest-items'to="/domestic-violence">Domestic Violence</Link>
        <Link className='nav-rest-items'to="/about">About</Link>
        <Link className='nav-rest-items'to="/contact">Contact</Link>
        <Link className='nav-rest-items'to="/donate-now">Donate now</Link>
        </div>

        {/* import Outlet so all the components in children paths can render */}
        <div>
            <Outlet />
        </div>

        </nav>
</div>
        
    )
}