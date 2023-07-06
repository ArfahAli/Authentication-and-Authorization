// import React from "react"
// import "./Login.css";
// import { Link } from 'react-router-dom';

// const LoginSide = () => {
//   return (
//     <div classusername="login">
//         <h1>Login</h1>
//         <form>
//             <input type={'text'} placeholder={'Userusername'}/>
//             <input type={'password'} placeholder={'Password'}/>
//             <Link to='/'>  <button classusername="button">Login</button></Link>

          

//         </form>
    
//     </div>
//   )
// }

// export default LoginSide;

import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import './Login.css'
function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:8000/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/'
		} else {
			alert('Incorrect Email and password')
		}
	}

	return (
		<div>
        <div className="bodyLogin">
      <Navigation />
      <div className="LS_Container" >
      <div className="login">
       <h1>Login</h1>
       <form onSubmit={loginUser} >
         <input type='email' placeholder='Email'					onChange={(e) => setEmail(e.target.value)}/>
         <input type='password' placeholder='Password'				onChange={(e) => setPassword(e.target.value)}/>
         <input className="button" type="submit" value="Login" />

       </form>
       </div>       
       <div className="side-div">
       <Link to='/register'>  <button className="button">Signup</button></Link>         
        </div>
        </div>
       </div>
    </div>
	)
}

export default Login