import classes from "./ZapiszSie.module.css";
import homeClasses from "../Home/Home.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

const ZapiszSie = () => {
  console.log(value);

  return (
    <div>
      <div className={classes.Photo}></div>
      <div className={homeClasses.Home_content}>
        <h1>Wybierz Dowolny Termin</h1>
        <Calendar locale="PL-pl" calendarType={"ISO 8601"} value={value} />
      </div>
    </div>
  );
};

export default ZapiszSie;
