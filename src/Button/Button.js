import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={classes.Button}>
      <a>{props.children}</a>
    </div>
  );
};

export default Button;
