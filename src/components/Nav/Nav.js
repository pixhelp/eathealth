import { Link } from "react-router-dom";
import { NavBarContent } from "./Nav.styles";

const Nav = () => {
    return (
        <nav>
            <NavBarContent>
                <li><Link className="block p-2 hover:bg-gray-800 text-white" to="/">Accueil</Link></li>
                <li><Link className="block p-2 hover:bg-gray-800 text-white" to="/about">À propos</Link></li>
                <li><Link className="block p-2 hover:bg-gray-800 text-white" to="/contact">Contact</Link></li>
                <li><Link className="block p-2 hover:bg-gray-800 text-white" to="/blog">Blog</Link></li>
            </NavBarContent>
        </nav>
    )
}

export default Nav;