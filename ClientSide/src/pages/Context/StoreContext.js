import React, { createContext, useState, useEffect } from "react";
import { fetchProducts } from "../api/product";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await fetchProducts();
        setProducts(products);
        console.log(products)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [products]);

  const addToWishList = (product) => {
    const existingItemIndex = wishList.findIndex(
      (item) => item.id === product.id
    );
    if (existingItemIndex >= 0) {
      console.log("Already Added");
    } else {
      setWishList([...wishList, product]);
    }
  };

  const removeItemWishList = (item) => {
    const updatedWishList = wishList.filter(
      (product) => product.id !== item.id
    );
    setWishList(updatedWishList);
  };

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex >= 0) {
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setTotal(total + product.price);
    }
  };

  const incrQuan = (item) => {
    const updatedCart = cart.map((product) =>
      product.id === item.id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(updatedCart);
    setTotal(total + item.price);
  };

  const decrQuan = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cart.map((product) =>
        product.id === item.id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      setCart(updatedCart);
      setTotal(total - item.price);
    }
  };

  const removeItem = (item) => {
    const updatedCart = cart.filter((product) => product.id !== item.id);
    setCart(updatedCart);
    setTotal(total - item.price * item.quantity);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const store = {
    products,
    cart,
    total,
    wishList,
    addToCart,
    incrQuan,
    decrQuan,
    removeItem,
    clearCart,
    removeItemWishList,
    addToWishList,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };