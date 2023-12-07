import { Link } from 'react-router-dom';
import logo_name from '../assets/logo_name.svg'
export default function Navbar(){
    return (
        <nav>
        <img  src={logo_name} alt='logo and name of NeverEverAlone'/>
        <Link to="/">Home</Link>
        <Link to="/domestic-violence">Domestic Violence</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/donate-now">Donate now</Link>

        </nav>
    )
}