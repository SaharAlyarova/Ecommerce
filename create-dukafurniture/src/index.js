import React from 'react';
import ReactDOM from 'react-dom/client';
import "swiper/css/bundle";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductsProvider from './context/context';



// eslint-disable-next-line
// import "swiper/css/bundle";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <ProductsProvider>
   <App />
   </ProductsProvider>
 
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

