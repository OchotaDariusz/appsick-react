import React, {useEffect, useState} from "react"
import {
    useHistory,
    Link,
    Switch,
    Route,
    useRouteMatch,
} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Spinner} from "@chakra-ui/react";
import {showModal} from "../redux/ducks/loginModal";
import "./UserPage.css";

export default function UserPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [user, setUser] = useState(null);
    const [patient, setPatient] = useState(null);

    async function getUser() {
        const data = await fetch("http://localhost:8080/api/auth/current", {
            credentials: "include"
        })
        try {
            return await data.json()
        } catch (e) {
            console.warn(e.message)
            return data;
        }

    }async function getPatient(userId) {
        const data = await fetch(`http://localhost:8080/api/patient/${userId}?user_id=true`, {
            credentials: "include"
        })
        try {
            return await data.json()
        } catch (e) {
            console.warn(e.message)
            return data;
        }
    }

    useEffect(() => {
        getUser()
            .then(user => {
                if (user?.id) {
                    setUser(user);
                } else {
                    setTimeout(() => {history.push("/")}, 3000);
                    dispatch(showModal());
                }
            })

    }, []);

    useEffect(() => {
        if (!user?.id) { return; }
        getPatient(user.id)
            .then(patient => {
                if (patient?.patientId) {
                    setPatient(patient);
                } else {
                    console.warn("Error while fetching Patient by User ID")
                }
            })

    }, [user]);

    useEffect( () => {

    })

    function Content() {

        let { path, url } = useRouteMatch();

        return (
            <div className="user-page-content">
                <ul className={"user-page-nav"}>
                    <li>
                        <Link to={`${url}`}>Personal Data</Link>
                    </li>
                    <li>
                        <Link to={`${url}/settings`}>Settings</Link>
                    </li>
                    <li>
                        <Link to={`${url}/your-prescriptions`}>Your Prescriptions</Link>
                    </li>
                </ul>

                <div className={"user-page-data"}>
                    <Switch>
                        <Route exact path={path}>
                            <div> Patient info </div>
                        </Route>
                        <Route path={`${path}/settings`}>
                            <div> Settings </div>
                        </Route>
                        <Route path={`${path}/your-prescriptions`}>
                            <div> Receipts </div>
                        </Route>
                    </Switch>
                </div>
            </div>
        )

    }

    if (!user){
        return (
            <div className={"container fixed-top mx-auto m-5 text-center"}>
                Redirecting... <Spinner size={'md'}></Spinner>
            </div>
        )
    }

    return (
        <>
            <div className="container-fluid col-lg-6 col-md-12 col-sm-12
             mx-auto rounded-5 bg-light text-dark mt-3 green-shadow">
                <div className="row justify-content-center">
                    <div className="user-page-title">MY USER PAGE</div>
                    <Content/>
                </div>
            </div>
        </>
    )
}


