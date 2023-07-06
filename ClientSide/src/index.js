import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter} from 'react-router-dom';
import { ProductProvider } from './pages/Context/productContext';
import { CartProvider } from './pages/Context/cartContext';
import {UserProvider } from './pages/Context/user.context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <UserProvider>
      <CartProvider>
      <ProductProvider>
          <App />
    </ProductProvider>
    </CartProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>

);

reportWebVitals();
