import "./footer.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


function Footer() {
    return (
        <>
            <body>
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-6 col-xs-12">
                                <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by &nbsp;
                                    <a href="https://gcsconsultant.com/digital-marketing-agency.html">FITIT Official</a>.
                                </p>
                            </div>

                            <div className="col-md-4 col-sm-6 col-xs-12">
                                <ul className="social-icons">
                                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </>
    )
}

export default Footer;
