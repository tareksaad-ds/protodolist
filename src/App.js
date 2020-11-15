import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import "react-toastify/dist/ReactToastify.css";
import Dash from "./components/Dashboard/Dash";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dash} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
