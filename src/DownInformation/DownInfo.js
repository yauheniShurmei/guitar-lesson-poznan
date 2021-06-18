import classes from "./DownInfo.module.css";

const DownInfo = () => {
  return (
    <footer className={classes.DownInfo}>
      <div>
        <h3>GODZINY PRACY</h3>
        <p>Pn-Czw 10:00-20:00</p>
        <span>Pt-Sb 10:00-18:00</span>
      </div>
      <div>
        <h3>LOKALIZACJA</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/maps/dpQ9Rfk8BaesYTWk7"
        >
          Poznań Grunwald Opalenicka
        </a>
      </div>
      <div>
        <h3>ONLINE</h3>
        <span>Zoom, Skype, Google Meet, WhatsApp</span>
      </div>
    </footer>
  );
};

export default DownInfo;
