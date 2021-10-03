import React from "react";
import classes from "./radio.module.css"

export default function RadioButton({ name, selectedCategory, onChange }) {
  return (
    <React.Fragment>
      <div className={classes.radio}>
      <input
        type="radio"
        id={name}
        name="Course_category"
        value={name}
        checked={name?.toLowerCase() === selectedCategory?.toLowerCase()}
        onChange={onChange}
        className={classes.radio__input}
      />
      <label htmlFor={name} className={classes.radio__label}> {name} </label>
      </div>
      <br />
    </React.Fragment>
  );
}

