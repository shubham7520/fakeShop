import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailView from "./detailView";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        console.log(product);
      })
      .catch((err) => {});
  }, []);
  return <div>{product && <DetailView {...product} />}</div>;
};

export default ProductDetail;
