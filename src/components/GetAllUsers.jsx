import React from "react";
import { useState, useEffect } from "react";

const GetAllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://fakestoreapi.com/users");

      const data = await response.json();
      console.log(data);
      setUsers(data);
    };
    fetchUsers();
  }, []);
  return (
    <>
      <h2>All users</h2>
    </>
  );
};
export default GetAllUsers;
