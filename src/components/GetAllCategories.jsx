import React, { useState, useEffect } from "react";

const GetAllCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      console.log(data);

      setCategories(data);
    };
    fetchCategories();
  }, []);

  return <div>Categories</div>;
};
export default GetAllCategories;
