import React from "react";

const Property = props => {
  return (
    <div id={props.space.id} className="space property">
      <div className="container">
        <div className={props.space.color + " color-bar"}></div>
        <div
          className={props.space.class ? `name ${props.space.class}` : "name"}
          dangerouslySetInnerHTML={{ __html: props.space.name }}
        ></div>
        <div className="price">
          <span className="million">₩</span>
          {props.space.price}
        </div>
        {props.space.owner.length > 0 ? (
          <div className={`owner ${props.space.owner}`}>
            <i className="fas fa-user"></i>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Property;
