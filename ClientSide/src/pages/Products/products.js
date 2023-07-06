import { Link } from "react-router-dom";
import Header from "../HeaderPage/Header";
import Footer from "../Footer/Footer";
import "./products.css";
// import data from "../../data";
import Cards from "./cards";
import { Images } from "../../data";
import { useContext } from 'react';
import { ProductContext } from '../Context/productContext';
import { CartContext } from '../Context/cartContext';


const Products = (props) => {
  const { product } = useContext(ProductContext);
  const { cart, addToCart ,handleProductClick, } = useContext(CartContext);

 
  return (
    <div>
      <Header count={cart.length} />
      <div className="sub-containerProducts">
        <div className="row rowProducts">
          <h2>All Products</h2>
          <select>
            <option value="">Default Sorting</option>
            <option value="">Sort by Price</option>
            <option value="">Sort by Popularity</option>
            <option value="">Sort by Rating</option>
            <option value="">Sort by Sale</option>
          </select>
        </div>
      </div>
      <div className="sub-containerProducts">
        <div className="rowProducts">

          {product.map((product,index) => (
            <Cards
              key={product.id} // Add a unique key prop
              product={product}
              addToCart={addToCart}
              handleProductClick={handleProductClick}
              image={Images[index % Images.length].image} 
            />
          ))}
        </div>

        <div className="pg-btns">
          <Link to="./product2">
            <span>1</span>
          </Link>
          <Link to="./product2">
            <span>2</span>
          </Link>
          <Link to="./product2">
            <span>3</span>
          </Link>
          <Link to="./product2">
            <span>4</span>
          </Link>
          <span className="fas fa-arrow-right"></span>
        </div>
      </div>
     

      <Footer />
    </div>
  );
};

export default Products;
