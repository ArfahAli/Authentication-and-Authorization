// import React, { useState, useEffect } from "react";
// import { addProduct } from "../../../API/api";
// import { useNavigate } from "react-router-dom";
// import "./AddProduct.css";
// const AddProduct = () => {

  
//   const [formData, setFormData] = useState({
//     id: 0,
//     name: "",
//     rating: 0,
//     price: 0,
//     quantity: 0,
//   });
//   useEffect(() => {
//     console.log(formData);
//   }, [formData]);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     const fieldValue = type === 'checkbox' ? checked : value;

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: fieldValue,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Product added successfully');
//     addProduct(formData);
//     setFormData({
//       id: 0,
//     name: "",
//     rating: 0,
//     price: 0,
//     quantity: 0,
//     });
//   };

//   // const loadData = (e) => {
//   //     e.preventDefault();
//   //     List.map((item) => {
//   //       let formData = {
//   //         id: item.id,
//   //   image: item.image,
//   //   name: item.name,
//   //   rating:item.rating,
//   //   price: item.price,
//   //   quantity: item.quantity,
//   //       };
//   //       addProduct(formData);
//   //     });
//   //   };


//   // const handleImage = (e) => {
//   //   setFormData({ ...formData, [e.target.name]: e.target.files[0] });
//   //   console.log(formData);
//   // };

//   const Navigate = useNavigate();

//   const BackButton = () => {
//     Navigate("/Admin");
//   };

//   return (
//     <div className="ContainerAdd">
//       <h2 style={{textAlign:"center"}}>Add a New Product</h2>
//       {/* <button onClick={loadData}>Click</button> */}

//       <form onSubmit={handleSubmit} className="product-form">
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             required/>
//         </div>
//         <div className="form-group">
//           <label htmlFor="price">Price:</label>
//           <input
//             type="number"
//             className="form-control"
//             id="price"
//             name="price"
//             value={formData.price}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="quantity">Quantity:</label>
//           <input
//             type="number"
//             className="form-control"
//             id="quantity"
//             name="quantity"
//             value={formData.quantity}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         {/* <div className="form-group">
//           <label htmlFor="image">Image:</label>
//           <input
//             type="file"
//             className="form-control-file"
//             id="image"
//             name="image"
//             onChange={handleImage}
            
//           />
//         </div> */}
//         <div className="form-group">
//           <label htmlFor="rating">Rating:</label>
//           <input
//             type="number"
//             className="form-control"
//             id="rating"
//             name="rating"
//             value={formData.rating}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Add Product
//         </button>
//         <button onClick={BackButton} className="btn btn-primary">
//           Back
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;









import React, { useState, useEffect } from "react";
import { addProduct } from "../../../API/api";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

const AddProduct = () => {
  const [user, setUser] = useState(localStorage.getItem('token'));
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
    rating: 0,
    price: 0,
    quantity: 0,
  });

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product added successfully');
    addProduct(formData);
    setFormData({
      id: 0,
      name: "",
      rating: 0,
      price: 0,
      quantity: 0,
    });
  };

  const Navigate = useNavigate();

  const BackButton = () => {
    Navigate("/Admin");
  };

  return user ? (
    <div className="ContainerAdd">
      <h2 style={{ textAlign: "center" }}>Add a New Product</h2>

      <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required/>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            className="form-control-file"
            id="image"
            name="image"
            onChange={handleImage}
            
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            className="form-control"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
        <button onClick={BackButton} className="btn btn-primary">
          Back
        </button>      </form>
    </div>
  ) : (
    <h1>Please Login to Continue</h1>
  );
};

export default AddProduct;
