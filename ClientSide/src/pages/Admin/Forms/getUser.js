import React from "react";
import { useEffect, useState } from "react";
import { getUser } from "../../../API/api";
const RetrieveUser = () => {
  // const { user } = useContext(UserContext);
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsers();
    console.log(user);
  }, []);

  const getUsers = async () => {
    try {
      const response = await getUser();
      console.log(response.data); // Check the response data from the server
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      {user.map((user) => (
        <div>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
          <h1>{user.password}</h1>
        </div>
      ))};
    </div>
  );
};
export default RetrieveUser;
