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
          <h3>Jedna Lekcja Gitary</h3>
          <span>Jedna godzina (60 minut) zajęć</span>
        </div>
        <div>
          <img src={certyfikat_02_640x425} alt="guitar lesson" />
          <p>100zł</p>
          <h3>Dwie Lekcja Gitary</h3>
          <span>Dwie godzina (60 minut) zajęć</span>
        </div>
        <div>
          <img src={certyfikat_03_640x425} alt="guitar lesson" />
          <p>150zł</p>
          <h3>Trzy Lekcja Gitary</h3>
          <span>Trzy godzina (60 minut) zajęć</span>
        </div>
        <div>
          <img src={certyfikat_04_640x425} alt="guitar lesson" />
          <p>200zł</p>
          <h3>Cztery Lekcja Gitary</h3>
          <span>Cztery godzina (60 minut) zajęć</span>
        </div>
      </div>
    </div>
  );
};

export default Sertificats;
