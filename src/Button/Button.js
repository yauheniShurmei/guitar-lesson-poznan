import { Link } from "react-router-dom";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <Link className={classes.Button} to={props.to}>
      {props.children}
    </Link>
  );
};

export default Button;
