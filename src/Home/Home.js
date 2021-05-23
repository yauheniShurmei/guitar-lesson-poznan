import classes from "./Home.module.css";
import PhotoBlock from "../PhotoBlock/PhotoBlock";
import Button from "../Button/Button";

const Home = () => {
  return (
    <div>
      <PhotoBlock />
      <div className={classes.Home_content}>
        <h1>Witam</h1>
        <div className={classes.AboutMe}>
          <span>
            Reprehenderit ea non esse consectetur qui aute qui dolore Lorem
            consectetur.Velit aliqua excepteur nulla ex elit fugiat adipisicing
            duis excepteur. Amet aliqua ea sint enim ut. Ea ea sit sunt minim
            sunt pariatur velit nulla id quis do est dolor anim. In
            reprehenderit eiusmod reprehenderit magna ad est eiusmod tempor
            minim ullamco exercitation ullamco. Laboris magna nostrud nisi dolor
            sint. Id nisi adipisicing tempor officia sint fugiat laborum labore
            elit voluptate proident magna magna. Nostrud deserunt eu laborum in
            sit non ad consectetur do officia fugiat proident.
            <br />
            <br />
            Ipsum deserunt do est ea sit aliquip est Lorem reprehenderit qui.
            Esse ipsum esse aute magna commodo qui aliqua eu cupidatat.
            Consequat consequat commodo ad dolore non excepteur.
          </span>
          <div>
            <img src="/images/Berlin 2020 SQUARE AND SMALL.jpg" alt="profile" />
          </div>
        </div>
        <div>
          <h1>Zdalne Nauczanie</h1>
          <div className={classes.AboutMe}>
            <span>
              Nisi eu excepteur eiusmod consequat dolor Lorem consequat amet.
              Sunt adipisicing id nisi dolor consequat et laboris aliqua mollit.
              Deserunt irure do mollit duis velit est in irure adipisicing
              laboris ipsum. Ullamco proident irure enim fugiat et laborum in
              amet occaecat eu consequat. Et dolore incididunt tempor cupidatat
              eiusmod mollit ullamco reprehenderit laboris aliquip duis labore
              sunt mollit. Labore cillum fugiat voluptate aliquip id aliqua
              laboris. Ipsum do nostrud consectetur esse dolore quis et
              exercitation laboris officia Lorem ipsum laborum esse. Tempor
              commodo sunt mollit fugiat id velit ipsum reprehenderit nulla non
              nostrud anim ad laborum. Commodo aute non minim occaecat aliquip
              consectetur officia. Aliquip aliqua officia et ex culpa ad sint id
              et fugiat. Id consectetur quis incididunt et ipsum velit minim et.
              Ad veniam adipisicing nostrud qui pariatur Lorem tempor.
            </span>
          </div>
          <Button>Zapisz się na Lekcję</Button>
        </div>
        <div>
          <h1>Nauka na każdym poźiomie</h1>
          <div className={classes.AboutMe}>
            <span>
              Nisi eu excepteur eiusmod consequat dolor Lorem consequat amet.
              Sunt adipisicing id nisi dolor consequat et laboris aliqua mollit.
              Deserunt irure do mollit duis velit est in irure adipisicing
              laboris ipsum. Ullamco proident irure enim fugiat et laborum in
              amet occaecat eu consequat. Et dolore incididunt tempor cupidatat
              eiusmod mollit ullamco reprehenderit laboris aliquip duis labore
              sunt mollit. Labore cillum fugiat voluptate aliquip id aliqua
              laboris. Ipsum do nostrud consectetur esse dolore quis et
              exercitation laboris officia Lorem ipsum laborum esse. Tempor
              commodo sunt mollit fugiat id velit ipsum reprehenderit nulla non
              nostrud anim ad laborum.
            </span>
          </div>
          <Button>Zapisz się na Lekcję</Button>
        </div>
        <div className={classes.CzegoSieNauczysz}>
          <h1>Czego Się Nauczysz</h1>
          <div className={classes.AboutMe}>
            <ul>
              <li>Piosenek które lubisz</li>
              <li>Muzyczne Podstawy</li>
              <li>Grać z Tabulatury</li>
              <li>Grać z Nut</li>
              <li>Grać solo</li>
              <li>Grać palcami i kostką</li>
            </ul>
          </div>
          <Button>Zapisz się na Lekcję</Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
