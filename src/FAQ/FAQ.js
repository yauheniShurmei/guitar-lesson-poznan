import classes from "../Styles/MainStyle.module.css";
import PhotoBlock from "../PhotoBlock/PhotoBlock";
import background from "../assets/img/guitar_02.jpg";

const Faq = () => {
  return (
    <div>
      <PhotoBlock style={{ backgroundImage: `url(${background})` }} />
      <div className={classes.Main}>
        <h1>Najczesciej Zadawane Pytania</h1>
        <div className={classes.FAQ}>
          <div>Czy można się dowiedzieć więcej na temat online lekcji</div>
          <span>
            Dla online zajęć Państwo musi mieć stabilne internet podłączenie i
            komputer z możliwośćią video transmissii. Przed dniem zajęć Państwo
            dostaje link zaproszenie na Zoom, Google Meet, Skype lub WhatsApp.
          </span>
          <div>Czy ja muszę przynosić swoją gitare na lekcji?</div>
          <span>
            Bardzo polecam przynosić swoją gitare, poniewarz na początku jest
            bardzo ważne przyzwyczaić się do jednego instrumentu, ale również
            można wypożyczyć instrument u mnie w studio.
          </span>
          <div>Czy ja musze przynieść coś jeszcze na lekcje?</div>
          <span>
            Nie. My pracujemy z własnymi materjałami, kture można kupić na
            stronie internetowej albo na lekcji.
          </span>
          <div>Czy musze zapłacić za lekcje wcześniej?</div>
          <span>
            Można zapłacić pod koniec zajęć. Równierz można wykupić abonament na
            4 lub 8 zajęć.
          </span>
          <div>Jak mozna zapłacić za lekcje?</div>
          <span>
            Można zapłacić po lekcji gotówką albo kartą. Równierz można zapłacić
            przez internet na naszej stronie.
          </span>
          <div>
            Czy mógłbym się dowiedzieć węcej o miejscu prowadzenia zajęć?
          </div>
          <span>
            Tak. To jest osiedle Grunwald ul. Opalenicka. Zajęcia sie odbywają w
            domu wolnostojącym gdzie nikt nie przeszkadza innymi dzwiękami. W
            studio posiadamy wszystko co jest potrzebnie do nauki, gitary
            klasyczne akustyczne i elektryczne, mikrofony i sprzent do
            nagrywania. Po lekcji jest możliwość nagrywania swoich kawałków,
            które będą wysłane Państwu na e-mail.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Faq;
