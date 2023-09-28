import React, { useEffect, useState } from "react";
import AccountForm from "./components/AccountForm";
import { LoginUser } from "./api";
import GetAllUsers from "./components/GetAllUsers";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Carts from "./components/Carts";

import AllProducts from "./components/AllProducts";
import "./App.css";
import Navbar from "./components/Navbar";

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="account" element={<AccountForm setToken={setToken} />} />
      </Routes>
      <AllProducts />
      <AccountForm />
      <GetAllUsers />
    </div>
  );
}

export default App;
