import React, {useEffect} from "react"
import {showModal} from "../redux/ducks/loginModal";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {Spinner} from "@chakra-ui/react";

export default function UserPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    let userId = null;

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
    }

    useEffect(() => {
        getUser()
            .then(user => {
                if (user?.id) {
                    userId = user.id;
                } else {
                    setTimeout(() => {history.push("/")}, 3000);
                    dispatch(showModal());
                }
            })

    }, []);

    if (!userId){
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


