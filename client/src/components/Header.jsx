import { NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

function Header() {
    return (
        <header>
            <div className="logo">Cultural Hackaton</div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/admin">Admin</NavLink>
                <NavLink to="/login">
                    <FiLogIn />
                </NavLink>
            </nav>
        </header>
    );
}

export default Header;
