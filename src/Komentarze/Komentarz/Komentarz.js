import profil from "../../assets/img/blank-profile-picture.png";
import classes from "./Komentarz.module.css";

const Komentarz = (props) => {
  return (
    <div className={classes.Komentarz}>
      <img src={profil} alt="profile" />
      <div>
        <h3>{props.name}</h3>
        <span>{props.comment}</span>
      </div>
    </div>
  );
};

export default Komentarz;
