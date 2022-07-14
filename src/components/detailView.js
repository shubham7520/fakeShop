import React from "react";

export default function DetailView({
  title,
  description,
  image,
  price,
  category,
  rating,
}) {
  return (
    <div className="wrapper">
      <div className="row-co">
        <div className="img-box">
          <img src={image}></img>
        </div>
        <div className="col-co">
          <p>
            <b>{title}</b>
          </p>
          <p>
            {" "}
            <b>Category: </b> {category}
          </p>
          <p>
            <b>Price: </b>
            {price}
          </p>
          <p>
            <b>Rating:</b> {rating.rate}
          </p>
          <p>
            <b>Description: </b>
            {description}
          </p>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}
