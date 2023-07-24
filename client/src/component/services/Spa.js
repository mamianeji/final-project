import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

function Spa() {
  const product = useSelector((state) => state.product?.product);
   console.log(product)
  return (
    <div
      style={{
        display: "flex",
        marginTop: "70px",
        justifyContent: "space-around",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      {product?.filter((el) => el.category == "Spa")
        .map((el) => <ProductCard el={el} />)
        .reverse()}
    </div>
  );
}

export default Spa;
