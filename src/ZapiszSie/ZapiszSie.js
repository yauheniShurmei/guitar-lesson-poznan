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
        <span className={homeClasses.remark}>
          ** Zapisać się na zajęcia można przeż telefon:{" "}
          <a href="tel:+(48)732-188-593">+(48)732-188-593 </a>
          albo e-mail: <a href="mailto:eshurmy@gmail.com">eshurmy@gmail.com</a>
        </span>
        <Calendar locale="PL-pl" calendarType={"ISO 8601"} />
      </div>
    </div>
  );
};

export default ZapiszSie;
