// import React from "react";
// import "./Signup.css";
// import { useState } from "react";
// import { addUser } from "../API/api.js";
// import { useEffect } from "react";

// const Signup = () => {
//   const [user, setUser] = useState({
//     userusername: "",
//     email: "",
//     password: "",
//   });

//   useEffect(() => {
//     console.log(user);
//   }, [user]);

//   const handleInputChange = (e) => {
//     console.log(e.target.username);
//     setUser({ ...user, [e.target.username]: e.target.value });
//   };

//   const handleRegister =  (e) => {
//     alert('User added successfully');
//     console.log("user");
//     e.preventDefault();
//     addUser(user);
    

//   };
//   return (
//     <div classusername="Signup">
//       <h1>Sign Up</h1>
//    			<form onSubmit={registerUser}>

//         <input
//           type="text"
//           placeholder="Username"
//           value={value={username}
// 			onChange={(e) => setusername(e.target.value)}}
//           className="AddInput1"
//           required

//         />
//         <input
//           type="Email"
//           value={user.email}
//           onChange={(e) => setEmail(e.target.value)}}
//           className="AddInput1"
//           required
//           placeholder="Email"
//         />
//         <input
//           placeholder="Password"
//           value={user.password}
//         onChange={(e) => setPassword(e.target.value)}}
//           className="AddInput1"
//           required
//         />
//       
//         <button classusername="button" type="submit">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };
// export default Signup;

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Signup.css";
import Navigation from './Navigation.js';
import { Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

	const [username, setusername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault();
	  
		const response = await fetch('http://localhost:8000/api/register', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({
			username,
			email,
			password,
		  }),
		});
	  
		const data = await response.json();
	  
		if (response.ok && data.user) {
			localStorage.setItem('token', data.user);
			alert('Login successful');
			navigate('/dashboard');
		} else {
			alert('Please check your username and password')
		}
	}
	  return (

		<div className="bodyLogin">
      <Navigation />
      <div className="LS_Container" >

	  <div className="Signup">
		      <h1>Sign Up</h1>
		   			<form onSubmit={registerUser}>
		
		        <input
		          type="text"
		          placeholder="Username"
		          value={username}
					onChange={(e) => setusername(e.target.value)}
		          className="AddInput1"
		          required
		
		        />
		        <input
		          type="Email"
		          value={email}
		          onChange={(e) => setEmail(e.target.value)}
		          className="AddInput1"
		          required
		          placeholder="Email"
		        />
		        <input
		          placeholder="Password"
		          value={password}
		        onChange={(e) => setPassword(e.target.value)}
		          className="AddInput1"
		          required
		        />
		      
			  <input className="button" type="submit" value="Signup" />

		      </form>
		    </div>        <div className="side-div">
			<Link to='/login'>  <button className="button">Login</button></Link>
        </div>
      </div>
    </div>

	
		  );
	  }

export default Signup