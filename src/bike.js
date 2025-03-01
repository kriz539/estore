import React from 'react'
import"./bike.css";

const bike = (props) => {
  return (
    <div>
        <img src={props.img} alt=""/>
        <h1>{props.productName}</h1>
    </div>
  );
};

export default bike;