import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import { getProducts } from '../../API/api.js';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  const value = { product };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
