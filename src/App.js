import "./App.css";
import MealsPage from "./components/pages/MealsPage.jsx";
import { MealsProvider } from "./components/store/MealsContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sharing from "./components/pages/Sharing";
import Drinks from "./components/pages/Drinks";
import Alcohol from "./components/pages/Alcohol";
function App() {
  return (
    <MealsProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={MealsPage} />
          <Route path="/sharing" exact component={Sharing} />
          <Route path="/drinks" exact component={Drinks} />
          <Route path="/alcohol" exact component={Alcohol} />
        </Switch>
      </Router>
    </MealsProvider>
  );
}

export default App;
