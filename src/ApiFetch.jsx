import React, { useEffect, useState } from "react";
import { API_KEY } from "./utils/constraints";


const ApiFetch = () => {
  const [products, setProduct] = useState([]);
  const getProducts = async () => {
    const url = `http://127.0.0.1:8000/api/products?per_page=10`;

    await fetch(url, API_KEY)
      .then((res) => res.json())
      .then((json) => setProduct(json))

      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return <div>ApiFetch</div>;
};

export default ApiFetch;
