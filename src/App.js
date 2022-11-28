import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Bootstrap from 'bootstrap'
import './App.css';
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import ListOfVisits from "./components/Visit/ListOfVisits"
import VisitChat from "./components/VisitChat/VisitChat"
import Navbar from "./components/Navbar/Navbar";
import VisitRegistration from "./components/Visit/VisitRegistration";

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
          <ListOfVisits />
        </Route>
        <Route exact path="/visit/:visitId" component={VisitChat} />
        <Route path="/register-visit">
          <VisitRegistration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
