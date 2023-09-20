import React from "react";
import { useState, useEffect } from "react";
import "./products.css";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  //Make call to Products api to fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <h2>Fake API store</h2>
      <div className="container">
        {products.map((product) => {
          return (
            <>
              <div className="box" key={product.id}>
                <div className="content">
                  <h5>{product.title}</h5>
                  <p>{product.price}</p>
                </div>
                <img src={product.image} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default AllProducts;
