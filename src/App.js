import "./App.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import heroimg from "./assets/images/heroimg.png";
import ProductList from "./product-list/productlist.js";
import Footer from "./footer/footer";
import Header from "./header/header";
import SingleProduct from './product.js';
import mheroimg from './assets/images/heroimg2.png';

function App() {
  return (
    <>
      <body>
        <Header />
        <div className="container-fluid p-0 mb-5 wow fadeIn" >
          <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner d-none d-md-block">
              <div className="carousel-item active">
                <img className="w-100 d-none d-md-block" src={heroimg} alt="Image" />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-lg-8">
                        <div className="d-none d-md-block">
                          <p
                            className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3 animated slideInDown ">
                            Welcome to Black Pearl</p>
                        </div>
                        <h2 className="mb-4 animated slideInDown d-none d-md-block">Elevate Your <br /> Style with Timeless Elegance
                        </h2>
                        <div className="d-none d-md-block">
                          <a href="https://api.whatsapp.com/send?phone=&text=Hello I want to know more about Shreemaa Investment"
                            target="_blank" className="btn btn-primary py-3 px-5 animated slideInDown ">Explore
                            More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-inner d-block d-md-none" style={{marginTop:"50px"}}>
              <div className="carousel-item active">
                <img className="w-100" src={mheroimg} alt="Image" />
                <div className="carousel-caption">
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-lg-8">
                        <h2 className="mb-4 animated slideInDown" style={{ fontSize: "30px" }}>Elevate Your  Style <br />with Timeless<br /> Elegance
                        </h2>
                        <div>
                          <a href="https://api.whatsapp.com/send?phone=&text=Hello I want to know more about Shreemaa Investment"
                            target="_blank" className="btn btn-primary py-2 px-3 animated slideInDown " style={{fontSize:"12px"}}>Explore
                            More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProductList />
        <Footer />
        {/* <SingleProduct /> */}
      </body>
    </>
  )
}

export default App;
