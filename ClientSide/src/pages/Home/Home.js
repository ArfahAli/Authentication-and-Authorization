import { Link, useNavigate } from "react-router-dom";
import Header from "../HeaderPage/Header";

import Footer from "../Footer/Footer";
import data from "../../data";
import "./Home.css";
import React, { useContext } from "react";
import { AppContext } from "./AppProvider";
const Home = () => {
  const { List, testimonials } = data;
  const { Featuredproducts } = useContext(AppContext);

  const navigate = useNavigate();
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

 



  return (
    <div>
      <div className="header">
        <div className="container">
          <Header />

          <div className="row">
            <div className="col-2">
              <h1>
                Give your Workout <br />a new Style!
              </h1>
              <p>
                Success isn't always about greatness. It's about consistency.
                Consistet <br /> hard work gains Success. Greatness will come.
              </p>
              <Link to="" className="btn" >Explore Now <i className="fas fa-arrow-right"></i></Link>
              
            </div>
            <div className="col-2">
              <img src="ASSETS/images/image1.png" alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="categories">
        <div className="sub-container">
          <div className="row">
            <div className="col-4">
              <img src="ASSETS/images/category-1.jpg" alt="" />
            </div>
            <div className="col-4">
              <img src="ASSETS/images/category-2.jpg" alt="" />
            </div>
            <div className="col-4">
              <img src="ASSETS/images/category-3.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Featured products --> */}

      <div className="sub-container">
        <h2 className="tittle">Featured Products</h2>
        <div className="row">
          {Featuredproducts.map((product) => (
            <div className="col-4" key={product.id}>
              <img
                onClick={() => handleProductClick(product)}
                src={product.image}
                alt=""
              />
              <h4>{product.name}</h4>
              <div className="ratings">
              {Array.from({ length: product.rating }).map((_, index) => (
          <i
            key={index}
            className={`fa-solid fa-star${
              product.rating - index === 0.5 ? "-half-stroke" : ""
            }`}
          ></i>
        ))}
              </div>
              <h5>price: ${product.price}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Products */}

      <div className="sub-container">
        <h2 className="tittle">Latest Products</h2>
        <div className="row">
          {List.map((product) => (
            <div className="col-4" key={product.id}>
              <img
                onClick={() => handleProductClick(product)}
                src={product.image}
                alt=""
              />
              <h4>{product.name}</h4>
              <div className="ratings">
              {Array.from({ length: product.rating }).map((_, index) => (
          <i
            key={index}
            className={`fa-solid fa-star${
              product.rating - index === 0.5 ? "-half-stroke" : ""
            }`}
          ></i>
        ))}
              </div>
              <h5>price: $ {product.price}</h5>
            </div>
          ))}
        </div>
      </div>

      {/* <!-- offer --> */}

      <div className="offer">
        <div className="sub-container">
          <div className="row">
            <div className="col-2">
              <img
                src="ASSETS/images/exclusive.png"
                alt=""
                className="offer-image"
              />
            </div>
            <div className="col-2">
              <p>Exclusively available</p>
              <h1>Smart band 4</h1>
              <small>
                The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
                AMOLED color full touch display with adjustable brightness, so
                everything is clear as can be.
              </small>
              <Link to="" className="btn" >Buy Now <i className="fas fa-arrow-right"></i></Link>

              
            </div>
          </div>
        </div>
      </div>

      {/* <!-- testimonials --> */}

      <div className="testimonials">
        <div className="sub-container">
          <div className="row">
            {testimonials.map((testimonial) => (
              <div className="col-3" key={testimonial.id}>
                <i className="fa fa-quote-left"></i>
                <p>{testimonial.quote}</p>
                <div className="ratings">
                  {testimonial.rating.map((star, index) => (
                    <i
                      key={index}
                      className={`fa-solid fa-star${
                        star === 0.5 ? "-half-stroke" : ""
                      }`}
                    ></i>
                  ))}
                </div>
                <h3>{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <!-- brands --> */}

      <div className="brands">
        <div className="sub-container">
          <div className="row">
            <div className="col-5">
              <img src="ASSETS/images/logo-godrej.png" alt="" />
            </div>
            <div className="col-5">
              <img src="ASSETS/images/logo-coca-cola.png" alt="" />
            </div>
            <div className="col-5">
              <img src="ASSETS/images/logo-oppo.png" alt="" />
            </div>
            <div className="col-5">
              <img src="ASSETS/images/logo-paypal.png" alt="" />
            </div>
            <div className="col-5">
              <img src="ASSETS/images/logo-philips.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
