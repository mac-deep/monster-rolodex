import React from "react";
import "./Card.css";

export const Card = (props) => {
  //   console.log(props);
  return (
    <div className="card__container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}
      ></img>
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
