import React from "react";
import classes from "./card.module.css";

export const Card = (props) => {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <div className="row p-2">
            <div className="col-2">
              <div className={`rounded-circle ${classes.test}`}></div>
            </div>
            <div className="col-8">{props.instructor_name}</div>
          </div>
          <div className="row p-2">
            <div className="col-2">
              <div className={`rounded-circle ${classes.test}`}></div>
            </div>
            <div className="col-8">
              <h5 className="card-title">{props.title}</h5>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-2">
              <p className="text-center"> &euro;</p>
            </div>
            <div className="col-8">
              <p
                className="card-text"
                dangerouslySetInnerHTML={{ __html: props.description }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
