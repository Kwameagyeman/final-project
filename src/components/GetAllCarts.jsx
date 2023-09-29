import React from "react";
import { useState, useEffect } from "react";

const GetAllCarts = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const fetchCarts = async () => {
      const response = await fetch("https://fakestoreapi.com/carts");

      const data = await response.json();
      console.log(data);
      set(data);
    };
    fetchCarts();
  }, []);
  return (
    <>
      <h2>All users</h2>
    </>
  );
};
export default GetAllCarts;
