import certyfikat_01_640x425 from "../assets/img/certyfikat_01_640x425.jpg";
import certyfikat_02_640x425 from "../assets/img/certyfikat_02_640x425.jpg";
import certyfikat_03_640x425 from "../assets/img/certyfikat_03_640x425.jpg";
import certyfikat_04_640x425 from "../assets/img/certyfikat_04_640x425.jpg";
import classes from "../Styles/MainStyle.module.css";

const Sertificats = () => {
  return (
    <div className={classes.Main}>
      <h1>Bony</h1>
      <div className={classes.Certyfikaty}>
        <div>
          <img src={certyfikat_01_640x425} alt="guitar lesson" />
          <p>70zł</p>
          <h3>Jedna Lekcja</h3>
          <span>Jedna godzina zajęć</span>
        </div>
        <div>
          <img src={certyfikat_02_640x425} alt="guitar lesson" />
          <p>130zł</p>
          <h3>Dwie Lekcji</h3>
          <span>Dwie godziny zajęć</span>
        </div>
        <div>
          <img src={certyfikat_03_640x425} alt="guitar lesson" />
          <p>190zł</p>
          <h3>Trzy Lekcji</h3>
          <span>Trzy godziny zajęć</span>
        </div>
        <div>
          <img src={certyfikat_04_640x425} alt="guitar lesson" />
          <p>250zł</p>
          <h3>Cztery Lekcji</h3>
          <span>Cztery godziny zajęć</span>
        </div>
      </div>
      <span style={{ marginTop: "20px" }}>
        * Jedna lekcja trwa 45 minut dla dzieci, 60 minut dla dorosłych
      </span>
    </div>
  );
};

export default Sertificats;
