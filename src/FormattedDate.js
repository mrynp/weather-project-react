import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let period = "";
  if (hours >= 12) {
    period = "pm";
    hours = hours - 12;
  } else {
    period = "am";
  }

  return (
    <div>
      {day}, {hours}:{minutes} {period}
    </div>
  );
}
