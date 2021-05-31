import classes from "./ZapiszSie.module.css";
import homeClasses from "../Home/Home.module.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ZapiszSie = () => {
  return (
    <div>
      <div className={classes.Photo}></div>
      <div className={homeClasses.Home_content}>
        <h1>Wybierz Dowolny Termin</h1>
        <Calendar />
      </div>
    </div>
  );
};

export default ZapiszSie;
