import React, { useState } from "react";

function PlantCard({ plant }) {

const [ isInStock, setIsInStock ] = useState( true );

  function handleClick() {
    console.log("click")
    setIsInStock(() => !isInStock);
   }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
