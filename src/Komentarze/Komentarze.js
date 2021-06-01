import Input from "../Input/Input";
import classes from "../Styles/MainStyle.module.css";
import classesKomentarzPage from "./Komentarze.module.css";
import Button from "../Button/Button";

const Komentarze = () => {
  return (
    <div className={classes.Main}>
      <h1>Komentarze</h1>
      <h2>Zostaw Swój Komentarz</h2>
      <form className={classesKomentarzPage.Form}>
        <Input placeholder="fullname" type="text" />
        <Input placeholder="e-mail" type="email" />
        <Input placeholder="write comment" />
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Komentarze;
