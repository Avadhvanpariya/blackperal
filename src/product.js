import "./singalproduct.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import img from "./assets/images/blck-pearl.png";
import heroimg from "./assets/images/heroimg.png";
import product from "./assets/images/shopping.webp";

function SingleProduct() {
    return (
        <>
            <body>
                <div className="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
                    <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5  wow fadeIn" data-wow-delay="0.1s">
                        <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                            <img src={img} alt="" width="190px" />
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

                <div className="card-wrapper">
                    <div className="card">
                        {/* <!-- card left --> */}
                        <div className="product-imgs">
                            <div className="img-display">
                                <div className="img-showcase">
                                    <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="shoe image" />
                                    <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="shoe image" />
                                    <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="shoe image" />
                                    <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" />
                                </div>
                            </div>
                            <div className="img-select">
                                <div className="img-item">
                                    <a href="#" data-id="1">
                                        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_1.jpg" alt="shoe image" />
                                    </a>
                                </div>
                                <div className="img-item">
                                    <a href="#" data-id="2">
                                        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_2.jpg" alt="shoe image" />
                                    </a>
                                </div>
                                <div className="img-item">
                                    <a href="#" data-id="3">
                                        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_3.jpg" alt="shoe image" />
                                    </a>
                                </div>
                                <div className="img-item">
                                    <a href="#" data-id="4">
                                        <img src="https://fadzrinmadu.github.io/hosted-assets/product-detail-page-design-with-image-slider-html-css-and-javascript/shoe_4.jpg" alt="shoe image" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- card right --> */}
                        <div className="product-content">
                            <h2 className="product-title">nike shoes</h2>
                            <a href="#" className="product-link">visit nike store</a>
                            <div className="product-rating">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <span>4.7(21)</span>
                            </div>

                            <div className="product-price">
                                <p className="last-price">Old Price: <span>$257.00</span></p>
                                <p className="new-price">New Price: <span>$249.00 (5%)</span></p>
                            </div>

                            <div className="product-detail">
                                <h2>about this item: </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                                <ul>
                                    <li>Color: <span>Black</span></li>
                                    <li>Available: <span>in stock</span></li>
                                    <li>Category: <span>Shoes</span></li>
                                    <li>Shipping Area: <span>All over the world</span></li>
                                    <li>Shipping Fee: <span>Free</span></li>
                                </ul>
                            </div>
                            <div className="social-links">
                                <p>Share At: </p>
                                <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-whatsapp"></i>
                                </a>
                                <a href="#">
                                    <i className="fab fa-pinterest"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}

export default SingleProduct;
