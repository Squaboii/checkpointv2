import React from "react";

function CardItems(props) {
  return (
    <div>
      <div className="card-item">
        <img src={props.image} alt="meo" width={250} height={250} />
        <h5>{props.title}</h5>
        <p>{props.descrption}</p>
        <h3>{props.prix}</h3>
      </div>
    </div>
  );
}

export default CardItems;
