import { Link } from 'react-router-dom';
import logo_name from '../assets/logo_name.svg'
export default function Navbar(){
    return (
        <nav>
        <img  src={logo_name} alt='logo and name of NeverEverAlone'/>
        <Link to="/">Home</Link>
        <Link to="/what-we-serve">Domestic Violence</Link>
        <Link to="/how-we-do">About</Link>
        <Link to="/how-we-help">Contact</Link>
        <Link to="/team">Donate now</Link>

        </nav>
    )
}