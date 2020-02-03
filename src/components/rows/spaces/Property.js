import React from "react";

const Property = props => {
  return (
    <div id={props.id} className="space property">
      <div className="container">
        <div className={props.color + " color-bar"}></div>
        <div
          className="name"
          dangerouslySetInnerHTML={{ __html: props.propertyName }}
        ></div>
        <div className="price">{props.price}</div>
      </div>
    </div>
  );
};

export default Property;
