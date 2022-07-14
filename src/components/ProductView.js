import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductView = ({ title, description, image }) => {
  console.log(title, description, image);
  return (
    <Card style={{ width: "18rem" }} className="mx-3  my-2">
      <Card.Img variant="top" style={{ height: "200px" }} src={image} />
      <Card.Body>
        <Card.Title>{title.substring(0, 20)}...</Card.Title>
        <Card.Text>{description.substring(0, 50)}...</Card.Text>
        <Button variant="primary">View Product</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductView;
