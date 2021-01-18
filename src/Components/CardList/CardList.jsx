import React from "react";
import "./CardList.css";
import { Card } from "../Card/Card";

export const CardList = (props) => {
  //   console.log(props);
  return (
    <div className="card__list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
