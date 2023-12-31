import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { LoginUser } from "../api";
import GetAllUsers from "./GetAllUsers";
import "./AccountForm.css";

const AccountForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const auth = LoginUser;
    const data = await auth(username, password);
    console.log("data", data.tokens);
    setToken(data.data.token);

    if (data.token) {
      Navigate("/");
    } else {
      return "Trouble logging in";
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="ui-form">
      <h1>Login page</h1>
      <div className="fields">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          placeholder="password"
          minLength="6"
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <button className="ui button" type="submit">
        login/user
      </button>
    </form>
  );
};
export default AccountForm;
