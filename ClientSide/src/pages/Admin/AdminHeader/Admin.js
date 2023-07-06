import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Admin = () => {
  return (
    <div>
<div>
      <div className="containerHeader">
        <div className="navbar2">
          <div className="logo">
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
                <Link to="/LoginSignupContainer">Account</Link>
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
        </div>
      </div>
    </div>  
  <div class="main-container">
  <h1 style={{textAlign:"center", marginTop:"100px"}}>Welcome To Admin Pannel</h1>

  <div id="navbar-sticky">
    <ul class="list">
      <li>
        <Link to="/Add Product" >Add Product</Link>
      </li>
      
    </ul>
    <ul class="list">
      <li>
        <Link to="/Check Users" >See Users</Link>
      </li>
      
    </ul>
    {/* <ul class="list">
    <li>
        <Link to='/UpdateProduct' >UpdateProduct</Link>
      </li>
      </ul>
      <ul class="list">
      <li>
        <Link to="/DeleteProduct" >Delete Product</Link>
      </li>
      
    </ul>
    <ul class="list">
      <li>
        <Link to="/ProductSearch" >Search Product</Link>
      </li>
      
    </ul> */}

  </div>
  </div>
  </div>
  );
};

export default Admin;