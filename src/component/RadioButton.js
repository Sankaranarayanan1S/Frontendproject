import React from "react";

export default function RadioButton({ name, selectedCategory, onChange }) {
  return (
    <React.Fragment>
      <input
        type="radio"
        id={name}
        name="Course_category"
        value={name}
        checked={name?.toLowerCase() === selectedCategory?.toLowerCase()}
        onChange={onChange}
      />
      <label htmlFor={name}> {name} </label>
      <br />
    </React.Fragment>
  );
}
