import "react";

// Import Logo
// import logo from "../assets/Logo.png";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
                <div className="container">

                    {/* Logo Image */}
                    {/* <Link className="navbar-brand" href="#">
                        <img
                            src={logo}
                            alt="logo"
                            className="logo-img"
                        />
                    </Link> */}

                    {/* Toggle Button */}
                    <button
                        className="navbar-toggler border-0 shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Menu */}
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav mx-auto gap-lg-5 text-center">

                            <li className="nav-item">
                                <Link to="/" className="nav-link active text-white" >
                                    Home
                                </Link  >
                            </li>

                            <li className="nav-item">
                                <Link to="/products" className="nav-link text-white" href="#">
                                    Products
                                </Link>
                            </li>

                             <li className="nav-item">
                                <Link to="findloads" className="nav-link text-white fw-bold">
                                    Find Loads
                                </Link>
                            </li>

                             <li className="nav-item">
                                <Link to="estimate" className="nav-link text-white fw-bold">
                                    Estimate
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/terms" className="nav-link text-white" >
                                    Conditions
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/helpline" className="nav-link text-white" href="#">
                                 Helpline
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;