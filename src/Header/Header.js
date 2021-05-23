import classes from "./Header.module.css";
import MainMenu from "../MainMenu/MainMenu";

const Header = () => {
  return (
    <div>
      <div className={classes.Header}>
        <div>
          <h1>Lekcje Gry Na Gitarze</h1>
          <br></br>
          <span>Poaznań i Online</span>
        </div>
        <div className={classes.Contacts}>
          <a className={classes.Phone} href="tel:+(48)732-188-593">
            +(48)732-188-593
          </a>
          <a className={classes.Email} href="mailto:eshurmy@gmail.com">
            eshurmy@gmail.com
          </a>
        </div>
      </div>
      <MainMenu />
    </div>
  );
};

export default Header;
