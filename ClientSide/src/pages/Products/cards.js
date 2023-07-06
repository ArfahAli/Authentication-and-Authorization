
import React from "react";
const Cards = (props) => {
  const { product, addToCart, handleProductClick, image} = props;

  return (
    <div className="col-4" key={product.id}>
       <img
        onClick={() => handleProductClick(product)}
        src={image} // Display the first image from the `images` array
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
      <h5>Price: ${product.price}</h5>
      <button onClick={() => addToCart(product)} className="btnBucket">
        Add to Bucket
      </button>
    </div>
  );
};

export default Cards;
