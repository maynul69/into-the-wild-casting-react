import React from "react";
import "./Cast.css";
const Cast = (props) => {
  const { name, age, job, height, cost, img,} =
    props.cast;
    const {setSelected, selected}=props;
  return (
    <div className="cast-card">
      <img src={img} alt="" />
      <h3>Name:{name} </h3>
      <h5>Age:{age}</h5>
      <h5>Job:{job}</h5>
      <h5>Height:{height}</h5>
      <h4>Signing Amount:$ {cost}</h4>
      <button
        className="adding-button"
        onClick={() => {
          props.handleAddingToCart(props.cast);
          {
            selected.filter((cast) => cast.name === name).length === 0 &&
              setSelected([...selected, props.cast]);
          }
        }}
      >
        <i class="fas fa-shopping-cart"></i> Add Actor
      </button>
    </div>
  );
};

export default Cast;
