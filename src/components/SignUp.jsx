import React, { useState } from "react";

const SignUp = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (event) => {
    console.log("firsname", event.target.value);
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    console.log("lastname", event.target.value);
    setLastName(event.target.value);
  };
  const handleUsernameChange = (event) => {
    console.log("username", event.target.value);
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    console.log("email", event.target.value);
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    console.log("password", event.target.value);
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name:</label>
        <input
          type="text"
          minilength="4"
          required
          value={firstname}
          onChange={handleFirstNameChange}
        />
        <label htmlFor="lastname">Last Name:</label>
        <input
          type="text"
          minilength="7"
          required
          value={lastname}
          onChange={handleLastNameChange}
        />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          minLength="4"
          required
          value={username}
          onChange={handleUsernameChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          minilength="6"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          minLength="7"
          required
          value={password}
          onChange={handlePasswordChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUp;
