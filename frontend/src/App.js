import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./Components/Page";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;