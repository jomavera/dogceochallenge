import React from "react";
import { Card } from "./Card.js";

const Cards = (props) => {
  const cartas = props.imagenes.map((e, ix) => {
    return (
      <Card
        imagen = {e}
        key={ix}
      />
    );
  });

  return <div className="row row-cols-3">{cartas}</div>;
}

export default Cards