import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Home from "./pages/Home"
import MyVisits from "./pages/MyVisits"
import About from "./pages/About"
import VisitChat from "./pages/VisitChat"
import TheNavbar from "./components/Navbar/TheNavbar";
import VisitRegistration from "./pages/VisitRegistration";
import Credits from "./pages/Credits";
import {AuthProvider} from "./components/Auth/Auth";
import UserPage from "./pages/UserPage";
import ChatHistory from "./pages/ChatHistory";
import VisitHistory from "./pages/VisitHistory";
import Contact from "./pages/Contact";
import Drugs from "./pages/Drugs";


function App() {
    return (
        <AuthProvider>
            <Router>
                <TheNavbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/about">
                        <About/>
                    </Route>
                    <Route path="/credits">
                        <Credits/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/drugs">
                        <Drugs/>
                    </Route>
                    <Route exact path="/visit">
                        <MyVisits/>
                    </Route>
                    <Route path="/user-page">
                        <UserPage/>
                    </Route>
                    <Route exact path="/visit/:visitId" component={VisitChat}/>
                    <Route exact path="/visit/:visitId/history"  component={ChatHistory}/>
                    <Route exact path="/visit/:patientId/histories"  component={VisitHistory}/>
                    <Route path="/register-visit">
                        <VisitRegistration/>
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;
