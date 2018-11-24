import React from "react";

export const AgendaItem = (props) => (
    <div className="card">
      <div className="card-body">
        <h1>{props.name}</h1>
        <p>Number: {props.number}</p>
      </div>
    </div>
)