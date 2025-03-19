import { NavLink } from 'react-router-dom';
import "../styling/Navbar.css"
import logo from "../assets/logo.png"


const Navbar = () => {
    return (
        <div className='main-div'>
            <img src={logo} alt="NiceShodz Logo" className="logo" />
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                    <NavLink 
                        to="/niceshodz" 
                        end
                        className={({ isActive }) => isActive ? 'nav-link-a' : 'nav-link'}
                    >
                        Home
                    </NavLink>
                    </li>
                    <li>
                    <NavLink 
                        to="/who-we-are"
                        className={({ isActive }) => isActive ? 'nav-link-a' : 'nav-link'}
                    >
                        About Us
                    </NavLink>
                    </li>
                    <li>
                    <NavLink 
                        to="/what-we-do"
                        className={({ isActive }) => isActive ? 'nav-link-a' : 'nav-link'}
                    >
                        What We Do
                    </NavLink>
                    </li>
                    <li>
                    <NavLink 
                        to="/inspiration"
                        className={({ isActive }) => isActive ? 'nav-link-a' : 'nav-link'}
                    >
                        Inspiration
                    </NavLink>
                    </li>
                    <li>
                    <NavLink 
                        to="/get-in-touch"
                        className={({ isActive }) => isActive ? 'nav-link-a' : 'nav-link'}
                    >
                        Get In Touch
                    </NavLink>
                    </li>
                    <li>
                    <NavLink 
                        to="/book-your-event"
                        className={({ isActive }) => isActive ? 'nav-link-a' : 'nav-link'}
                    >
                        Book Your Event
                    </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
