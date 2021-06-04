import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  switch (props.type) {
    case "text":
      return (
        <div className={classes.Input}>
          <label htmlFor={props.id}>{props.label}</label>
          <input
            ref={ref}
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
          />
        </div>
      );
    case "email":
      return (
        <div className={classes.Input}>
          <label htmlFor={props.id}>{props.label}</label>
          <input
            ref={ref}
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
          />
        </div>
      );
    case "textarea":
      return (
        <div className={classes.Textarea}>
          <label htmlFor={props.id}>{props.label}</label>
          <textarea
            ref={ref}
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
          />
        </div>
      );
    default:
      return null;
  }
});

export default Input;
