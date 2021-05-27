import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MainMenu.module.css";

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  let navBarClasses = [];
  isOpen
    ? (navBarClasses = [classes.Links, classes.Open])
    : (navBarClasses = [classes.Links, classes.Close]);

  return (
    <div className={classes.NavBar}>
      <div
        className={
          !isOpen ? classes.Menu : [`${classes.MenuOpen} ${classes.Menu}`]
        }
        onClick={openMenuHandler}
      >
        Menu
        <div
          className={
            isOpen
              ? [`${classes.MenuArrowOpen}`]
              : [`${classes.MenuArrowClose}`]
          }
        >
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={navBarClasses.join(" ")}>
        <Link to="/home">Home</Link>
        <Link to="/zapiszsie">Zapisz Się</Link>
        <Link to="/komentarze">Komentarze</Link>
        <Link to="/FAQ">FAQ</Link>
        <Link to="/materialy">Materjały</Link>
        <Link to="/gift-sertificats">Sertyfikaty podarunkowe</Link>
      </div>
    </div>
  );
};

export default MainMenu;
