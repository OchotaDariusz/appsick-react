import React, {useEffect, useState} from "react"
import MyMessage from "../components/ChatHistory/MyMessge"
import OtherMessage from "../components/ChatHistory/OtherMessage"
import { getUser } from "../components/Auth/Auth";

export default function ChatHistory(props) {
    const [chatArray, setChatArray] = useState([])
    const [userId, setUserId] = useState();
    let lastId = null;
    console.log("props")
    console.log(props)
    console.log("props2")

    async function getChat() {

        const data = await fetch(`http://localhost:8080/api/chats/visit/${props.match.params.visitId}`, {
            mode: 'cors',

            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        return data.json()

    }

    useEffect(() => {
        getUser().then(user => {
            setUserId(user.id)
        })
    }, [])

    useEffect(() => {
        getChat()
            .then(
                chatt => {
                    setChatArray(chatt)
                    console.log(chatt)
                }
            )

    }, []);

    // console.log(getChat().then(chat=>{
    //     console.log
    // }))

    const change = (num) => {
        lastId = num
        console.log("nie")
    }

    return (
        <div className="container-fluid col-lg-6 col-md-12 col-sm-12
             mx-auto rounded-5 bg-light text-dark  mt-3 green-shadow p-6 mb-5" >
            {chatArray.map((chat, index) => {
                {
                    lastId === chat.user.userId ? console.log("tak") : change(chat.user.id)
                }
                return (<div key={index}>
                        <div className="p-2 m-0 position-relative m-1 "
                        >
                            {chat.user.userId == userId ? (<MyMessage message={chat.message}
                                                                      author={chat.user.firstName + " " + chat.user.lastName}
                                                                      date={chat.date}
                                />)
                                :
                                (<OtherMessage message={chat.message}
                                               author={chat.user.firstName + " " + chat.user.lastName}
                                               date={chat.date} image={chat.user.image}/>)}
                        </div>
                    </div>
                )
            })}


        </div>

    )

}