import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <>
      <div className="card">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          width={271}
        />
        <h1 style={{ textAlign: "center", margin: "0px" }}>{props.title}</h1>
        <p style={{ padding: "0px 10px" }}>{props.descri}</p>
      </div>
    </>
  );
}

export default Card;