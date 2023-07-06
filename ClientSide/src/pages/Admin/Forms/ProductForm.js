import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [productData, setProductData] = useState({
    id: 0,
    title: "",
    price: 0,
    description: "",
    image: null,
    rating: {
      rate: 0,
      count: 0,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setProductData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setProductData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can perform the necessary actions with the productData, like saving it to a database
    try {
      const res = await axios.get(
        "http://localhost:8000/products/post",
        productData
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div >
      <div >
        <form onSubmit={handleSubmit}>
          <div >
            <label
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={productData.description}
              onChange={handleChange}
            ></textarea>
          </div>
        
          
          <div >
            <label
              htmlFor="ratingRate"
            >
              Rating Rate
            </label>
            <input
              type="number"
              id="ratingRate"
              name="rating.rate"
              value={productData.rating.rate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="ratingCount"
            >
              Rating Count
            </label>
            <input
              type="number"
              id="ratingCount"
              name="rating.count"
              value={productData.rating.count}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
            > 
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;