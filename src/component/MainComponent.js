import React, { useEffect, useState } from "react";
import { Card } from "./card";
import Sidebar from "./Sidebar";

export default function MainComponent(props) {
  const { invokeAPI } = props;
  const [filteredList, setFilteredList] = useState([]);

  const courseCount = filteredList.length;

  useEffect(() => {
    setFilteredList(props.resultList);
  }, [props.resultList]);

  const searchInputHandler = (event) => {
    const searchKeyword = event.target.value.toLowerCase();
    if (!searchKeyword) {
      setFilteredList(props.resultList);
    } else {
      const finalResultList = props.resultList?.filter(
        (each) =>
          each?.title?.toLowerCase().includes(searchKeyword) ||
          each?.instructor_name?.toLowerCase().includes(searchKeyword)
      );
      setFilteredList(finalResultList);
    }
  };
  useEffect(() => {
    invokeAPI();
  }, [invokeAPI]);

  return (
    <>
      <div className="row my-3">
        <div className="col-sm-3">
          <div className="container">
            <Sidebar {...props} onSearchHandler={searchInputHandler} />
          </div>
        </div>
        <div className="col-sm-9 px-0">
          <div className="container">
            <p>{courseCount} Courses Available</p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {filteredList.map((each, index) => {
                return <Card {...each} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
