import { NavLink } from "react-router-dom";

export const NavbarGuest = () => {

    return (
        <div className="navbar-fixed">
            <nav>
                <div className="navbarwrap blue darken-1" style={{ padding: '0 2rem' }}>
                    <ul className="center">
                        <li><NavLink to="/signup">Signup</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}