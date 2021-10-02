import React from "react";
import RadioButton from "./RadioButton";

export default function Sidebar(props) {
  const onChangeHandler = (event) => {
    console.log(event.target.value);
    props?.onCategoryChange?.(String(event.target.value).toLowerCase());
  };
  return (
    <div className="sidenav">
      <p>Search for Keyword</p>
      <form className="form-inline d-flex justify-content-center md-form form-sm mt-0">
        <i className="material-icons">search</i>
        <input
          className="form-control form-control-sm ml-3 "
          id="search"
          type="text"
          placeholder="Filter Courses"
          aria-label="Search"
          onChange={props.onSearchHandler}
        />
      </form>
      <div>
        <p className="pt-3">categories</p>
        <input
          type="radio"
          id="all"
          name="Course_category"
          value="All"
          checked={"all" === props.selectedCategory}
          onChange={onChangeHandler}
        />
        <label htmlFor="all">All</label>
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
      </div>
    </div>
  );
}
