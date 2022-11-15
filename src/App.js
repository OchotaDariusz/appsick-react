import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Home/Home"
import Login from "./Login/Login"
import Register from "./Register/Register"
import Visit from "./Visit/Visit"
import VisitChat from "./VisitChat/VisitChat"
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
        <Route exact path="/visit">
          <Visit />
        </Route>
        <Route exact path="/visit/:visitId" component={VisitChat} />
      </Switch>
    </Router>
  );
}

export default App;
