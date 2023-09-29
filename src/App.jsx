import React, { useEffect, useState } from "react";
import AccountForm from "./components/AccountForm";
import { LoginUser } from "./api";
import GetAllUsers from "./components/GetAllUsers";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Carts from "./components/Carts";
import GetAllCategories from "./components/GetAllCategories";

import AllProducts from "./components/AllProducts";
import "./App.css";
import Navbar from "./components/Navbar";
import SingleProduct from "./components/SingleProduct";

function App() {
  const [token, setToken] = useState(
    window.localStorage.getItem("token") || null
  );

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token");
    }
  }, [token]);
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<SingleProduct />} />

        <Route path="account" element={<AccountForm setToken={setToken} />} />
      </Routes>
    </div>
  );
}

export default App;
