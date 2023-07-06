import React, { useEffect, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const handleRemove = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
      };

      const handleProductClick = (product) => {
        navigate(`/product/${product.id}`, { state: { product } });
      };


  const addToCart = (data) => {
    const existingProduct = cart.find((item) => item.id === data.id);
    if (existingProduct) {
      // Product already exists in the cart, update the quantity
      const updatedCart = cart.map((item) =>
        item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // Product doesn't exist in the cart, add it with quantity 1
      setCart([...cart, { ...data, quantity: 1 }]);
    }
  };

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cart || []); // Initializing with an empty array if cart is undefined
  }, [cart]);

  const incrementQuantity = (cartIndex) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item, index) =>
        cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };

  const decrementQuantity = (cartIndex) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item, index) =>
        cartIndex === index && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const value = { cart, setCart, handleRemove, addToCart,handleProductClick,decrementQuantity,incrementQuantity,totalPrice, cartItems, setCartItems};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

