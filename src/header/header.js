import "./header.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/images/blck-pearl.png';


function Header() {
    return (
        <>
            <body>
                <div className="container-fluid fixed-top px-0 wow fadeIn">
                    <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5  wow fadeIn">
                        <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                            <img src={logo} alt="logo" />
                        </a>
                        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto p-4 p-lg-0">
                                <a href="index.html" className="nav-item nav-link active">Home</a>
                                <a href="#about" className="nav-item nav-link">About</a>
                                <a href="#service" className="nav-item nav-link">Services</a>
                                <a href="#contact" className="nav-item nav-link">Contact</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </body>
        </>
    )
}

export default Header;
