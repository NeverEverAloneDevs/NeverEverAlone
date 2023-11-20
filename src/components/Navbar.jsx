import { Link } from 'react-router-dom';

export default function Navbar(){
    return (
        <nav>
        <h2>NEVERALONE</h2>
        <Link to="/">Who We Are</Link>
        <Link to="/what-we-serve">What We Serve</Link>
        <Link to="/how-we-do">How We Do</Link>
        <Link to="/how-we-help">How We Help</Link>
        <Link to="/team">Team</Link>

        </nav>
    )
}