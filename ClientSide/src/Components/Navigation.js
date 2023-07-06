import React from 'react'
import "./Navigation.css";
const Navigation = () => {
  return (
    <div>
        <nav className='navigation'>
            <a href='/'>E-Commerce Website</a>
            <div>
                <p>
                    Welcome <span>Guest</span>
                </p>
                <i className='fa fa-user'></i>
            </div>
        </nav>
    </div>
  )
}

export default Navigation