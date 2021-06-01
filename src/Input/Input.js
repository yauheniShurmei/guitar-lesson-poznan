import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.Input}>
      <input type={props.type} id={props.id} placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
