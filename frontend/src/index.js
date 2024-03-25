import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from "react-bootstrap/SSRProvider";
// Changed to SSR from StrictMode??? Will this help when integeating with backend?

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SSRProvider>
    <App />
  </SSRProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
