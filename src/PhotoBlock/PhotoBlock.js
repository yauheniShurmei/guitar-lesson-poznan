import classes from "./PhotoBlock.module.css";

const PhotoBlock = () => {
  return (
    <div className={classes.PhotoBlock}>
      <div
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/guitar_01.jpg"
          })`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default PhotoBlock;
