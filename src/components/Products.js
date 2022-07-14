import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductDetail from "./ProductView";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="container app-box">
      <br></br>
      <div className="row-co">
        {products.map((product) => (
          <div>
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ProductDetail {...product} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
