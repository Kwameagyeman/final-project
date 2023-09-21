import React from "react";
import AccountForm from "./components/AccountForm";
import { LoginUser } from "./api";
import GetAllUsers from "./components/GetAllUsers";

import AllProducts from "./components/AllProducts";
import "./App.css";

function App() {
  return (
    <div>
      <AllProducts />
      <AccountForm />
      <GetAllUsers />
    </div>
  );
}

export default App;
