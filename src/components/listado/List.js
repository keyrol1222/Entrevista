import React from "react";
import "./css/listado.css";
function List(props) {
  return (
    <div className="card">
      <p>description: {props.description}</p>
      <p>weight: {props.weight}</p>
      <p>priceToPay: {props.priceToPay}</p>
      <p>supplier: {props.supplier}</p>
      <p>courier: {props.courier}</p>
      <p>courierTracking: {props.courierTracking}</p>
      <p>internalTracking: {props.internalTracking}</p>
    </div>
  );
}

export default List;
