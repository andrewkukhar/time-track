import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";


export const Navbar = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        navigate("/", { replace: true })
    }

    return (
        <div className="navbar-fixed">
            <nav>
                <div className="navbarwrap blue darken-1" style={{ padding: '0 2rem' }}>
                    <ul className="center">
                        <li><NavLink to="/create">Create time</NavLink></li>
                        <li><NavLink to="/times">My times</NavLink></li>
                        <li><a href="/" onClick={logoutHandler}>Exit</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}