import axios from "axios";
// const URL = "https://fa21-bse-080-0eb0725faa4a.herokuapp.com";
const URL = "http://localhost:8000";



export const getProducts = async () => {
  return axios.get(`${URL}`);
};
export const getUser = async () => {
  return await axios.get(`http://localhost:8000/CheckUsers`);
};



export const addUser = async (registerData) => {
  try {
    await axios.post(
      `http://localhost:8000/LoginSignupContainer`,
      registerData
    );
  } catch (error) {
    console.error(error);
  }
};
export const addProduct = async (formData) => {
  try {
    await axios.post(
      `${URL}/AddProduct`,
      formData
    );
  } catch (error) {
    console.error(error);
  }
};
