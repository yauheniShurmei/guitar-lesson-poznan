import certyfikat_01_640x425 from "../assets/img/certyfikat_01_640x425.jpg";
import certyfikat_02_640x425 from "../assets/img/certyfikat_02_640x425.jpg";
import certyfikat_03_640x425 from "../assets/img/certyfikat_03_640x425.jpg";
import certyfikat_04_640x425 from "../assets/img/certyfikat_04_640x425.jpg";
import classes from "../Styles/MainStyle.module.css";

const Sertificats = () => {
  return (
    <div className={classes.Main}>
      <h1>Certyfikaty</h1>
      <div className={classes.Certyfikaty}>
        <div>
          <img src={certyfikat_01_640x425} alt="guitar lesson" />
          <p>50zł</p>
          <h3>Jedna Lekcja</h3>
          <span>Jedna godzina zajęć</span>
        </div>
        <div>
          <img src={certyfikat_02_640x425} alt="guitar lesson" />
          <p>100zł</p>
          <h3>Dwie Lekcji</h3>
          <span>Dwie godziny zajęć</span>
        </div>
        <div>
          <img src={certyfikat_03_640x425} alt="guitar lesson" />
          <p>150zł</p>
          <h3>Trzy Lekcji</h3>
          <span>Trzy godziny zajęć</span>
        </div>
        <div>
          <img src={certyfikat_04_640x425} alt="guitar lesson" />
          <p>200zł</p>
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
