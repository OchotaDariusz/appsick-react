import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Bootstrap from 'bootstrap'
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import ListOfVisits from "./components/Visit/ListOfVisits"
import VisitChat from "./components/VisitChat/VisitChat"
import TheNavbar from "./components/Navbar/TheNavbar";
import VisitRegistration from "./components/Visit/VisitRegistration";
import Credits from "./components/Footer/Credits";
import {AuthProvider} from "./components/ProtectedRoutes/auth";

function App() {
    return (
        <AuthProvider>
            <Router>
                <TheNavbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/credits">
                        <Credits/>
                    </Route>
                    <Route exact path="/visit">
                        <ListOfVisits/>
                    </Route>
                    <Route exact path="/visit/:visitId" component={VisitChat}/>
                    <Route path="/register-visit">
                        <VisitRegistration/>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
