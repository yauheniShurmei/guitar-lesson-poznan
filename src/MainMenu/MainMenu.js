import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainMenu.module.css";

const MainMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenu, setIsMenu] = useState("MENU");

  const openMenuHandler = (menu) => {
    setIsOpen(!isOpen);
    setIsMenu(menu);
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
        onClick={() => openMenuHandler(isMenu)}
      >
        {isMenu.toUpperCase()}
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
        <NavLink
          onClick={() => openMenuHandler("HOME")}
          activeClassName={classes.Active}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => openMenuHandler("Zapisz Sie")}
          activeClassName={classes.Active}
          to="/zapiszsie"
        >
          Zapisz Się
        </NavLink>
        <NavLink
          onClick={() => openMenuHandler("komentarze")}
          activeClassName={classes.Active}
          to="/komentarze"
        >
          Komentarze
        </NavLink>
        <NavLink
          onClick={() => openMenuHandler("FAQ")}
          activeClassName={classes.Active}
          to="/FAQ"
        >
          FAQ
        </NavLink>
        <NavLink
          onClick={() => openMenuHandler("materialy")}
          activeClassName={classes.Active}
          to="/materialy"
        >
          Materiały
        </NavLink>
        <NavLink
          onClick={() => openMenuHandler("Bony Podarunkowe")}
          activeClassName={classes.Active}
          to="/gift-sertificats"
        >
          Bony Podarunkowe
        </NavLink>
      </div>
    </div>
  );
};

export default MainMenu;
