import React, { useEffect, useState } from "react";
import { Card } from "./card";
import Sidebar from "./Sidebar";

export default function MainComponent(props) {
  console.log(props.resultList);
  const { invokeAPI } = props;
  const [filteredList, setFilteredList] = useState([]);


  useEffect(() => {
    setFilteredList(props.resultList);
  }, [props.resultList]);

  const searchInputHandler = (event) => {
    console.log(event.target.value.toLowerCase());
    const searchKeyword = event.target.value.toLowerCase();
    if (!searchKeyword) {
      setFilteredList(props.resultList);
    } else {
      const finalResultList = props.resultList?.filter(
        (each) =>
          each?.title?.toLowerCase().includes(searchKeyword) ||
          each?.instructor_name?.toLowerCase().includes(searchKeyword)
      );
      console.log("============= RESULT FINAL FILTERED ======== ");
      console.log(finalResultList);
      setFilteredList(finalResultList);
    }
  };
  useEffect(() => {
    invokeAPI();
  }, [invokeAPI]);
  console.log(props.selectedCategory);
  return (
    <>
      <div className="row">
        <div className="col-sm-2">
          <div className="container">
            <Sidebar {...props} onSearchHandler={searchInputHandler} />
          </div>
        </div>
        <div className="col-sm-10">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {(filteredList &&
                filteredList.length > 0 &&
                filteredList.map((each, index) => {
                  return <Card {...each} key={index} />;
                })) || <p>No Result</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
