import React from "react";
import classes from "./card.module.css";

export const Card = (props) => {
  let courseStatus;
  const start_date = Date.parse(props.start_date);
  const end_date = Date.parse(props.end_date);
  const today = Date.now();

  const numberofweeks = end_date / 604800000 - start_date / 604800000;

  if (today < start_date) {
    courseStatus = "Pre-registration";
  }
  if (today > end_date) {
    courseStatus = "Completed";
  }
  if (today > start_date && today < end_date) {
    courseStatus = "Ongoing";
  }

  const startMonthDay = new Date(start_date).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
  });
  const endMonthDay = new Date(end_date).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
  });
  
  return (
    <>
      <div className="col">
        <div className={`card h-100 ${classes.card}`}>
          <div className="row p-2">
            <div className="col-2">
              <div className={`rounded-circle ${classes.circle}`}></div>
            </div>
            <div className="col-10">
              <b className="card-title">{props.title}</b>
              <p className={classes.instructor_name}>
                <b>{props.instructor_name}</b>
              </p>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-2">
              <i className="material-icons" style={{ width: 24 }}>
                info_outlined
              </i>
            </div>
            <div className="col-10">
              <p
                className="card-text"
                dangerouslySetInnerHTML={{ __html: props.description }}
              ></p>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-2 ">
              <i className="material-icons">date_range</i>
            </div>
            <div className="col-10">
              <p className={classes.footer}>
                <b>
                  {courseStatus && courseStatus}
                  <br />
                  {startMonthDay} - {endMonthDay}
                  <br />
                  <span>
                    {numberofweeks} week course, {props.estimated_workload}
                  </span>
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
