import React from "react";

import Card from "react-bootstrap/Card";
import ProductDesc from "../ProductDesc";
import "../style/product.css";

function ProductCard({ el }) {
  return (
    <div>
      <Card
        className="CartaKbira"
        style={{
          width: "18rem",
          margin: "20px 0",
          boxShadow: "0 5px 10px rgb(0 0 0 / 75%)",
        }}
      >
        <Card.Img
          variant="top"
          src={el?.image}
          className="ImageCarta"
          style={{ height: "250px" }}
        />
        <Card.Body className="bdanCarta">
          <Card.Title>{el?.name}</Card.Title>
          <Card.Text>{el?.description}</Card.Text>
          <Card.Text>{el?.prix}</Card.Text>
          <ProductDesc el={el} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
