import classes from "./PhotoBlock.module.css";

const PhotoBlock = (props) => {
  return <div className={classes.Photo} style={props.style}></div>;
};

export default PhotoBlock;
