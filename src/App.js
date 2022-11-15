import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Bootstrap from 'bootstrap'
import './App.css';
import Home from "./Home/Home"
import Login from "./Login/Login"
import Register from "./Register/Register"
import ListOfVisits from "./Visit/ListOfVisits"
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/visit">
          <ListOfVisits />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
