import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import DownInfo from "./DownInformation/DownInfo";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="*">
        <Redirect to="/home" />
        <Home />
      </Route>
      <DownInfo />
    </BrowserRouter>
  );
}

export default App;
