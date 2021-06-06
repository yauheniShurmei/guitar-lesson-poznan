import classes from "../Styles/MainStyle.module.css";
import one_book from "../assets/img/books/one_book.jpg";
import one_book_02 from "../assets/img/books/one_book_02.jpg";
import one_book_03 from "../assets/img/books/one_book_03.jpg";
import { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";

const Materialy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookIndex, setBookIndex] = useState();

  const clickHandler = (bookIndex) => {
    setIsOpen((prevState) => !prevState);
    setBookIndex(bookIndex);
  };

  return (
    <div>
      <Backdrop show={isOpen} onClick={clickHandler} />
      <div
        className={classes.Modal}
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(-100vh)",
          opacity: isOpen ? "1" : "0",
        }}
      >
        <img src={bookIndex} alt="my guitar book" />
      </div>
      <div className={classes.Main} style={{ maxWidth: "80%" }}>
        <h1>Materiały</h1>
        <ul className={classes.Materialy}>
          <a href="#foo" onClick={() => clickHandler(one_book)}>
            <p>60zł</p>
            <img src={one_book} alt="my guitar book" />
            <div>
              <h3>Podręcznik "My Guitar Book I"</h3>
              <span>
                +69 podkładów muzycznych. Wszysko co musisz wiedzieć o gitarze.
              </span>
            </div>
          </a>
          <a href="#foo" onClick={() => clickHandler(one_book_02)}>
            <p>60zł</p>
            <img src={one_book_02} alt="my guitar book" />
            <div>
              <h3>Podręcznik "My Guitar Book II"</h3>
              <span>+ Podkłady. Najlepsze piosenki i utwory dla Gitary .</span>
            </div>
          </a>
          <a href="#foo" onClick={() => clickHandler(one_book_03)}>
            <p>60zł</p>
            <img src={one_book_03} alt="my guitar book" />
            <div>
              <h3>Podręcznik "My Guitar Book II"</h3>
              <span>+podkłady. Gitarowe solówki.</span>
            </div>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Materialy;
