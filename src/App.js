import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Bootstrap from 'bootstrap'
import Home from "./pages/Home"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import MyVisits from "./pages/MyVisits"
import Contact from "./pages/Contact"
import VisitChat from "./pages/VisitChat"
import TheNavbar from "./components/Navbar/TheNavbar";
import VisitRegistration from "./pages/VisitRegistration";
import Credits from "./pages/Credits";
import {AuthProvider} from "./components/Auth/Auth";
import UserPage from "./pages/UserPage";
import ChatHistory from "./pages/ChatHistory";


function App() {
    return (
        <AuthProvider>
            <Router>
                <TheNavbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/credits">
                        <Credits/>
                    </Route>
                    <Route exact path="/visit">
                        <MyVisits/>
                    </Route>
                    <Route exact path="/user-page">
                        <UserPage/>
                    </Route>
                    <Route exact path="/visit/:visitId" component={VisitChat}/>
                    <Route exact path="/visit/:visitId/history"  component={ChatHistory}/>
                    <Route path="/register-visit">
                        <VisitRegistration/>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
