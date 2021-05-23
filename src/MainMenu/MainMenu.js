import { Link } from "react-router-dom";
import classes from "./MainMenu.module.css";

const MainMenu = () => {
  return (
    <div className={classes.Links}>
      <Link to="/home">Home</Link>
      <Link to="/zapiszsie">Zapisz Się</Link>
      <Link to="/komentarze">Komentarze</Link>
      <Link to="/FAQ">FAQ</Link>
      <Link to="/materialy">Materjały</Link>
      <Link to="/gift-sertificats">Sertyfikaty podarunkowe</Link>
    </div>
  );
};

export default MainMenu;
