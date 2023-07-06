import { Link } from "react-router-dom";
import "./Header.css";
const Header = (props) => {
  

  return (
    <div>
      <div className="containerHeader">
        <div className="navbar">
          <div classNameName="logo">
            <img src="ASSETS/images/logo.png" alt="" width="100px" />
            <img
              src="ASSETS/images/menu.png"
              alt=""
              className="menu"
              onclick="menutoggle()"
            />
          </div>
          <nav>
            <ul id="MenuItems">
            <li>
                <Link to="/Admin">Admin</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Products">Products</Link>
              </li>

              <li>
                <Link to="/Contactus">Contact Us</Link>
              </li>
              <li>
                <Link to="/About">About Us</Link>
              </li>
              <li>
                <Link to="/login">Account</Link>
              </li>
            </ul>
          </nav>

          <Link to="/cart">
            <img
              src="/ASSETS/images/cart.png"
              alt=""
              width="30px"
              height="30px"
            />
          </Link>
          <sup>{props.count}</sup>
        </div>
      </div>
    </div>
  );
};
export default Header;
