import classes from "../Styles/MainStyle.module.css";
import one_book from "../assets/img/books/one_book.jpg";
import one_book_02 from "../assets/img/books/one_book_02.jpg";
import one_book_03 from "../assets/img/books/one_book_03.jpg";
import { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import firsPage from "../assets/img/some_pages_from_book/03.jpg";
import secPage from "../assets/img/some_pages_from_book/04.jpg";
import thirdPage from "../assets/img/some_pages_from_book/05.jpg";
import foursPage from "../assets/img/some_pages_from_book/06.jpg";
import fifthPage from "../assets/img/some_pages_from_book/07.jpg";
import sixthPage from "../assets/img/some_pages_from_book/08.jpg";

const firstAlbum = [
  one_book,
  firsPage,
  secPage,
  thirdPage,
  foursPage,
  fifthPage,
  sixthPage,
];

const Materialy = () => {
  const [pages, setPages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const clickHandler = (bookIndex) => {
    setIndex(0);
    setPages(firstAlbum); //
    setIsOpen(!isOpen);
  };

  const clickBackdropHandler = () => {
    setIsOpen(false);
  };

  const nextPrevPagesHandler = (isForward) => {
    if (isForward) {
      setIndex((index + 1) % firstAlbum.length);
    } else {
      const positiveIndex = index - 1 < 0 ? index + firstAlbum.length : index;
      setIndex((positiveIndex + firstAlbum.length - 1) % firstAlbum.length);
    }
  };

  return (
    <main className={classes.MainSection}>
      <Backdrop show={isOpen} onClick={clickBackdropHandler} />
      <section
        className={classes.Modal}
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(-100vh)",
          opacity: isOpen ? "1" : "0",
        }}
      >
        <img src={pages[index]} alt="my guitar book" />
        <div className={classes.RightLeftButtons}>
          <div onClick={() => nextPrevPagesHandler(false)}>{`<`}</div>
          <div onClick={() => nextPrevPagesHandler(true)}>{`>`}</div>
        </div>
      </section>
      <section className={classes.Main} style={{ maxWidth: "80%" }}>
        <h1>Materia??y</h1>
        <span style={{ marginBottom: "1rem" }}>
          ** Zam??wi?? podr??czniki mo??na przez telefon lub e-mail. Wysy??ka
          InPostem w dzie?? potwierdzenia op??aty.
        </span>
        <ul className={classes.Materialy}>
          <a href="#foo" onClick={() => clickHandler(0)}>
            <p>60z??</p>
            <img src={one_book} alt="my guitar book" />
            <div>
              <h3>Podr??cznik "My Guitar Book I"</h3>
              <span>
                +69 podk??ad??w muzycznych. Wszysko co musisz wiedzie?? o gitarze.
              </span>
            </div>
          </a>
          <a href="#foo" onClick={() => clickHandler(1)}>
            <p>60z??</p>
            <img src={one_book_02} alt="my guitar book" />
            <div>
              <h3>Podr??cznik "My Guitar Book II"</h3>
              <span>+ Podk??ady. Najlepsze piosenki i utwory dla Gitary .</span>
            </div>
          </a>
          <a href="#foo" onClick={() => clickHandler(2)}>
            <p>60z??</p>
            <img src={one_book_03} alt="my guitar book" />
            <div>
              <h3>Podr??cznik "My Guitar Book III"</h3>
              <span>+podk??ady. Gitarowe sol??wki.</span>
            </div>
          </a>
        </ul>
      </section>
    </main>
  );
};

export default Materialy;
