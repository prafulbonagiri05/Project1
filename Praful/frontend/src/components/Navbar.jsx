
import { Link } from "react-router-dom";


import "./Navbar.css";


function Navbar()
{
    return <nav className="navbar bg-dark">
        <h4><Link className="link" to="/">Home</Link></h4>
        <h4><Link className="link" to="/logrec">Customer</Link></h4>
        <h4><Link className="link" to="/logowner">Owner</Link></h4>
        <h4><Link className="link" to="/logowner">Sign Up</Link></h4>
        </nav>
}
export default Navbar;