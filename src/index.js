import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBT0j6pBMVQgyPlwAxMyC-RCqJrWwWkFcE",
  authDomain: "ecommerce-tecnologia.firebaseapp.com",
  projectId: "ecommerce-tecnologia",
  storageBucket: "ecommerce-tecnologia.appspot.com",
  messagingSenderId: "1036587195661",
  appId: "1:1036587195661:web:2a9873aaf692d0871fa444"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* {<React.StrictMode>} */}
    <App />
  {/* {</React.StrictMode>} */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
