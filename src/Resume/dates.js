import moment from "moment-timezone";
import React from "react";

export const Date = ({ date }) => (
  <span style={{ whiteSpace: "nowrap" }}>
    {moment(date).format("MMMM YYYY")}
  </span>
);

export const DateRange = ({ start, end }) => {
  let endString = end ? <Date date={end} /> : "Present";
  return (
    <span>
      <Date date={start} /> – {endString}
    </span>
  );
};
