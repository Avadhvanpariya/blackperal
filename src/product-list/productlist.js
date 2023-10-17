import "./productlist.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function ProductList() {
    return (
        <>
            <body>
                <section className="section-products">
                    <div className="container">
                        <div className="col-md-12">
                            <div className="text-center mx-auto wow fadeInUp" style={{maxWidth:" 600px;"}}>
                                <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Products</p>
                                <h1 className="display-5 mb-5">WHAT WE OFFER</h1>
                            </div>
                        </div>
                        <div className="list-products">
                            <div className="product">
                                <div className="top">
                                    <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500" alt="product" className="img-product" />
                                </div>
                                <div className="bottom">
                                    <h3 className="product-name">Sunglasses</h3>
                                    <h4 className="product-price">$ <span>55</span></h4>
                                </div>
                            </div>
                            <div className="product">
                                <div className="top">
                                    <img src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500" alt="product" className="img-product" />
                                </div>
                                <div className="bottom">
                                    <h3 className="product-name">Gameboy</h3>
                                    <h4 className="product-price">$ <span>47</span></h4>
                                </div>
                            </div>
                            <div className="product">
                                <div className="top">
                                    <img src="https://images.unsplash.com/photo-1549326483-d8ecdf9611c9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500" alt="product" className="img-product" />
                                </div>
                                <div className="bottom">
                                    <h3 className="product-name">Sket</h3>
                                    <h4 className="product-price">$ <span>73</span></h4>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <section className="section-products pb-5">
                    <div className="container">
                        <div className="list-products">
                            <div className="product">
                                <div className="top">
                                    <img src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500" alt="product" className="img-product" />
                                </div>
                                <div className="bottom">
                                    <h3 className="product-name">Sunglasses</h3>
                                    <h4 className="product-price">$ <span>55</span></h4>
                                </div>
                            </div>
                            <div className="product">
                                <div className="top">
                                    <img src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500" alt="product" className="img-product" />
                                </div>
                                <div className="bottom">
                                    <h3 className="product-name">Gameboy</h3>
                                    <h4 className="product-price">$ <span>47</span></h4>
                                </div>
                            </div>
                            <div className="product">
                                <div className="top">
                                    <img src="https://images.unsplash.com/photo-1549326483-d8ecdf9611c9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2R1Y3R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500" alt="product" className="img-product" />
                                </div>
                                <div className="bottom">
                                    <h3 className="product-name">Sket</h3>
                                    <h4 className="product-price">$ <span>73</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </>
    )
}

export default ProductList;
