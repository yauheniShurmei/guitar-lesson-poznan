import classes from "../Styles/MainStyle.module.css";
import one_book from "../assets/img/books/one_book.jpg";
import one_book_02 from "../assets/img/books/one_book_02.jpg";
import one_book_03 from "../assets/img/books/one_book_03.jpg";
import { useEffect, useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import firsPage from "../assets/img/some_pages_from_book/03.jpg";
import secPage from "../assets/img/some_pages_from_book/04.jpg";
import thirdPage from "../assets/img/some_pages_from_book/05.jpg";
import foursPage from "../assets/img/some_pages_from_book/06.jpg";
import fifthPage from "../assets/img/some_pages_from_book/07.jpg";
import sixthPage from "../assets/img/some_pages_from_book/08.jpg";

const Materialy = () => {
  const [pages, setPages] = useState([
    one_book,
    firsPage,
    secPage,
    thirdPage,
    foursPage,
    fifthPage,
    sixthPage,
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [bookIndex, setBookIndex] = useState();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const newIndex = index < 0 ? index + 7 : index;
    setBookIndex(pages[newIndex]);
  }, [index, pages]);

  const clickHandler = (bookIndex) => {
    if (bookIndex) {
      setIsOpen((prevState) => !prevState);
      setBookIndex(bookIndex);
      const newPages = [...pages];
      newPages.splice(0, 1, bookIndex);
      setPages(newPages);
      console.log(pages);
    } else {
      setIsOpen((prevState) => !prevState);
      setIndex(0);
      console.log(pages);
    }
  };

  const nextPrevPagesHandler = (isForward) => {
    if (isForward) {
      setIndex((prevState) => (prevState + 1) % 7);
    } else {
      setIndex((prevState) => (prevState - 1) % 7);
    }
  };

  return (
    <div>
      <Backdrop show={isOpen} onClick={() => clickHandler()} />
      <div
        className={classes.Modal}
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(-100vh)",
          opacity: isOpen ? "1" : "0",
        }}
      >
        <div className={classes.RightLeftButtons}>
          <div onClick={() => nextPrevPagesHandler(false)}>{`<`}</div>
          <div onClick={() => nextPrevPagesHandler(true)}>{`>`}</div>
        </div>
        <img src={bookIndex} alt="my guitar book"></img>
      </div>
      <div className={classes.Main} style={{ maxWidth: "80%" }}>
        <h1>Materiały</h1>
        <span style={{ marginBottom: "1rem" }}>
          ** Zamówić podręczniki można przez telefon lub e-mail. Wysyłka
          InPostem w dzień potwierdzenia opłaty.
        </span>
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
              <h3>Podręcznik "My Guitar Book III"</h3>
              <span>+podkłady. Gitarowe solówki.</span>
            </div>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Materialy;
