import React from "react";

const Property = props => {
  return (
    <div id={props.space.id} className="space property">
      <div className="container">
        <div className={props.space.color + " color-bar"}></div>
        <div
          className={`name ${props.space.class}`}
          dangerouslySetInnerHTML={{ __html: props.space.name }}
        ></div>
        <div className="price">{props.space.price}</div>
      </div>
    </div>
  );
};

export default Property;
