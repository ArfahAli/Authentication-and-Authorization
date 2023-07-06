import { useState } from "react";
import { useReducer } from "react";
import Header from "../HeaderPage/Header";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./ProductDetails.css";
const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state;
  const [Relatedproducts] = useState([
    {
      id: "1",
      imageSrc: "/ASSETS/images/product-12.jpg",
      name: "Red T-Shirt",
      rating: [
        "fa-regular fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-regular fa-star-half-stroke",
      ],
      price: 50.0,
    },
    {
      id: "2",
      imageSrc: "/ASSETS/images/product-5.jpg",
      name: "Grey Sneakers",
      rating: [
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-regular fa-star",
      ],
      price: 40.0,
    },
    {
      id: "3",
      imageSrc: "/ASSETS/images/product-7.jpg",
      name: "Socks",
      rating: [
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
      ],
      price: 60.0,
    },

    {
      id: "4",
      imageSrc: "/ASSETS/images/product-11.jpg",
      name: "Sneakers",
      rating: [
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-solid fa-star",
        "fa-regular fa-star-half-stroke",
      ],
      price: 70.0,
    },
  ]);
  
  const reducer = (state, action) => {
    if (action.type === "Increement") {
      return { quantity: state.quantity + 1 };
    } else if (action.type === "Decreement" && state.quantity > 1) {
      return { quantity: state.quantity - 1 };
    }

    // Default return statement when no state update is needed
    return state;
  };

  const [state, dispatch] = useReducer(reducer, { quantity: 1 });

  return (
    <div>
      <Header />

      <div class="sub-container single-product">
        <div class="rowDetails">
          <div class="col-2">
            <img src={product.image} alt="" id="productImg" />
          </div>
          <div class="col-2">
            <p>Home / {product.name}</p>
            <h1>{product.name}</h1>
            <h4>price: $ {product.price}</h4>
            <select>
              <option value="">Select Size</option>
              <option value="">XXL</option>
              <option value="">XL</option>
              <option value="">Large</option>
              <option value="">Medium</option>
              <option value="">Small</option>
              <option value="">XS</option>
            </select>
            <div className="quantity2">
              <div class="quantity">
                <button onClick={() => dispatch({ type: "Decreement" })}>
                  -
                </button>
                <span> {state.quantity}</span>
                <button onClick={() => dispatch({ type: "Increement" })}>
                  +
                </button>
                <button class="btn">Add to Bucket</button>
              </div>

              <h3>
                Product Details <i class="fa fa-indent"></i>
              </h3>
              <br />
              <p>
                Give your summer wardrobe a style upgrade with the HRX Men's
                Active T-shirt. Team it with a pair of shorts for your morning
                workout or a denims for an evening out with the guys.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- tittle --> */}

        <div className="sub-containerDetails">
          <h2>Related Products</h2>
          <div className="rowDetails">
            {Relatedproducts.map((item, index) => (
              <div className="col-4" key={index}>
                <img src={item.imageSrc} alt="" />
                <h4>{item.name}</h4>
                <div className="ratings">
                  {item.rating.map((rating, index) => (
                    <i className={rating} key={index}></i>
                  ))}
                </div>
                <h5>price: $ {item.price}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ProductDetail;
