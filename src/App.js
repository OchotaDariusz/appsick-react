import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Home/Home"
import Login from "./Login/Login"
import Register from "./Register/Register"
import ListOfVisits from "./Visit/ListOfVisits"
import VisitChat from "./VisitChat/VisitChat"
import Navbar from "./Navbar/Navbar";
import VisitRegistration from "./Visit/VisitRegistration";

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
