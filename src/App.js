import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import DownInfo from "./DownInformation/DownInfo";
import ZapiszSie from "./ZapiszSie/ZapiszSie";
import Komentarze from "./Komentarze/Komentarze";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Faq from "./FAQ/FAQ";
import Materialy from "./Materialy/Materialy";
import Sertificats from "./Sertificats/Sertificats";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/zapiszsie" component={ZapiszSie} />
        <Route path="/komentarze" component={Komentarze} />
        <Route path="/FAQ" component={Faq} />
        <Route path="/Materialy" component={Materialy} />
        <Route path="/gift-sertificats" component={Sertificats} />
        <Route path="*">
          <Redirect to="/home" />
          <Home />
        </Route>
      </Switch>
      <DownInfo />
    </BrowserRouter>
  );
}

export default App;
