import React from "react";
import App from "./App";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function Root() {
  return(
    <Router>
        <div>
            <Routes>
            <Route path="/favorite" element={<Navbar />} />
            <Route path="/" element={<App />} />
            </Routes>
        </div>
    </Router>
  ) 
}

export default Root;
