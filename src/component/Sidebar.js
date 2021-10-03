import React from "react";
import RadioButton from "./RadioButton";
import classes from "./sidebar.module.css";
import radio from "./radio.module.css";

export default function Sidebar(props) {
  const onChangeHandler = (event) => {
    props?.onCategoryChange?.(String(event.target.value).toLowerCase());
  };
  return (
    <React.Fragment>
      <p>
        <b>Search for Keyword</b>
      </p>
      <input
        className={classes.search}
        type="text"
        placeholder="Filter Courses"
        aria-label="Search"
        onChange={props.onSearchHandler}
      />
      <p className="pt-3">
        <b>categories</b>
      </p>
      <div className={radio.radio}>
        <input
          type="radio"
          id="all"
          name="Course_category"
          value="All"
          checked={"all" === props.selectedCategory}
          onChange={onChangeHandler}
          className={radio.radio__input}
        />
        <label htmlFor="all" className={radio.radio__label}>
          All
        </label>
      </div>
      <br />
      {props.availableOptions &&
        props.availableOptions.map((each, index) => {
          return (
            <RadioButton
              name={each}
              selectedCategory={props.selectedCategory}
              onChange={onChangeHandler}
              key={index}
            />
          );
        })}
    </React.Fragment>
  );
}
