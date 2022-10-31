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

function App() {
  return (
    <Router>
      <h2>navbar</h2>
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
          <Visit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
