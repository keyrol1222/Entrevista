import React from "react";
import "./css/listado.css";
function List(props) {
  return (
    <div className="card">
      <ul className="cardContainer">
        <h3>{props.description}</h3>

        <li>|weight: {props.weight}|</li>
        <li> |priceToPay: {props.priceToPay}|</li>
        <li>|supplier:{props.supplier}|</li>
        <li>||courier: {props.courier}|</li>
        <li> |courierTracking:{props.courierTracking}|</li>
        <li>|internalTracking: {props.internalTracking}|</li>
      </ul>
    </div>
  );
}

export default List;
