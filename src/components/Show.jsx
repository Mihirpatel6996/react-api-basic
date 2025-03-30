import axios from "axios";
import React, { useState } from "react";


const Show = () => {
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button onClick={getProducts} className="rounded px-5 py-2 bg-red-400">
        Call Api
      </button>
      <br /> <br />
      <hr className="my-10" />
      <ul className="mb-3">
        {products.length > 0 ? (
          products.map((p) => (
            <li className="rounded mb-4 p-5 bg-red-400">{p.title} </li>
          ))
        ) : (
          <h1> Loading...</h1>
        )}
      </ul>
    </>
  );
};

export default Show;
