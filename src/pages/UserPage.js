import React, {useEffect, useState} from "react"
import {showModal} from "../redux/ducks/loginModal";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {Spinner} from "@chakra-ui/react";

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
                    <div className="col fs-3">MY USER PAGE</div>
                    <div className="col">



                    </div>
                </div>
            </div>

        </>
    )
}


