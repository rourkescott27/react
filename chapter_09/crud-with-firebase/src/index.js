import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD2aujRmT4sM-1EDGXxO-vEbU2HdiZGkjY",
  authDomain: "react-crud-f7321.firebaseapp.com",
  projectId: "react-crud-f7321",
  storageBucket: "react-crud-f7321.appspot.com",
  messagingSenderId: "905721063817",
  appId: "1:905721063817:web:9939a3abedbe1f30639958",
  measurementId: "G-4HGZQDNS3C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
