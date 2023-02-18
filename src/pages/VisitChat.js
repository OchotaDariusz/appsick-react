import React, {useState, useEffect} from "react"
import "../components/VisitChat/VisitChat.css"
import Chatroom from "../components/VisitChat/Chatroom"
import ChatMessage from "../components/VisitChat/ChatMessage/ChatMessage"
import {Spinner} from "@chakra-ui/react"
import {getUser, useAuth} from "../components/Auth/Auth";
import doc from '../assets/image/doc.png'
import Footer from "../components/Footer/Footer";
import {Link, useHistory} from "react-router-dom";

const getVisit = async (visitId) => {
    const data = await fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/visit/${visitId}`, {
        credentials: "include"
    })
    try {
        return await data.json()
    } catch (e) {
        console.log(e.message)
        return data
    }
}


let chatroom, messages
export default function VisitChat(props) {

    const [isNewChatMessageLoading, setIsNewChatMessageLoading] = useState(true)
    const [chatMessages, setChatMessages] = useState([])
    const [chatMessage, setChatMessage] = useState("")
    const [userName, setUserName] = useState("")
    const [doctorName, setDoctorName] = useState("")
    const [patientName, setPatientName] = useState("")
    const [patientId, setPatientId] = useState("")
    const [visitReason, setVisitReason] = useState("")

    const history = useHistory();

    const updateChat = (setterFn) => {
        setIsNewChatMessageLoading(true)
        messages = []
        chatroom.getChats(chat => {
            messages.push(chat)
        }, setterFn)
            .then(() => {
                setChatMessages(messages)
                setIsNewChatMessageLoading(false)
            })
    }

    const setStatusVisit = async () => {
        fetch(`${process.env.REACT_APP_BACKEND_HOST}/api/visit/status/${props.match.params.visitId}`, {
            credentials: "include",
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: "COMPLETED"

        })
        setTimeout(() => {
            routeChange()
        }, 1000)

    }

    useEffect(() => {
        getUser()
            .then(user => {
                console.log(user)
                setUserName(user.firstName + " " + user.lastName)

                chatroom = new Chatroom(
                    props.match.params.visitId,
                    user.id,
                    `${user.firstName} ${user.lastName}`
                )
                updateChat(setChatMessages)
            })
            .catch(err => console.log(err.message))

    }, [props.match.params.visitId])

    useEffect(() => {
        getVisit(props.match.params.visitId)
            .then(visit => {
                setDoctorName(visit.doctor.user.firstName + " " + visit.doctor.user.lastName)
                setPatientName(visit.patient.user.firstName + " " + visit.patient.user.lastName)
                setPatientId(visit.patient.patientId)
                setVisitReason(visit.reason)
            })
            .catch(err => console.log(err.message))
    })

    const sendMessage = event => {
        event.preventDefault()
        chatroom.addChat(chatMessage)
        document.querySelector("#messageInput").value = ""
    }
    const routeChange = () => {
        let path = `/visit/${props.match.params.visitId}/history`;
        history.push(path);
    }

    const endVisit = () => {
        chatroom.endVisit(setChatMessages)
            .then(() => setStatusVisit())
            .catch(err => console.log(err.message))
    }

    const auth = useAuth()

    return (

        <div>
            <div className="container my-4 ">
                <div className="row pt-4">
                    <div className="col-4">
                        {auth.role === "DOCTOR"
                            ?
                            <div>

                                <p>Patient:<br/> {patientName}</p>
                                <br/>
                                <Link to={`/visit/${patientId}/histories`} target="_blank">
                                    <button type="submit" className="btn btn-secondary">Historia Wizyt</button>
                                </Link>
                            </div>
                            :
                            <div className="row">
                                <div className="col-8">
                                    <img src={doc}/>
                                </div>
                                <div className="col-8">
                                    <p>Doctor:<br/> {doctorName}</p>
                                    <br/>
                                    <br/>
                                    <h3> Reason:</h3>
                                    <p>{visitReason}</p>
                                </div>

                            </div>
                        }
                    </div>
                    <div className="col-8">
                        <div className=" mx-auto rounded-5 bg-dark text-dark bg-opacity-10 shadow mt-3">
                            <h1 className="text-center pt-3">Visit Chat</h1>

                            <div className="chat-window px-4 py-4">
                                <ul className="chat-list | list-group">
                                    {
                                        (chatMessages === []) ?
                                            <li className="list-group-item"><Spinner/></li> :
                                            chatMessages.map(
                                                (message, index) => <ChatMessage
                                                    author={message.author}
                                                    message={message.message}
                                                    time={message.date}
                                                    key={index}/>
                                            )
                                    }
                                    {(isNewChatMessageLoading) ? <li className="list-group-item"><Spinner/></li> : ""}
                                </ul>
                            </div>

                            <form onSubmit={sendMessage} className="new-chat px-4 py-4 | my-5 pb-3">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="message__label | input-group-text">Your message:</span>
                                    </div>
                                    <input placeholder="message..." className="form-control" type="text"
                                           id="messageInput"
                                           onChange={e => setChatMessage(e.target.value)}/>
                                    <div className="input-group-append">
                                        <button type="submit" className="btn__chat | btn btn-primary">Send</button>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center my-2">
                                    {auth.role === "DOCTOR" ?
                                        <button type="button" className="btn btn-danger" onClick={endVisit}>End
                                            Visit</button>
                                        :
                                        <div></div>}
                                </div>
                            </form>
                        </div>
                    </div>

                </div>


            </div>
            <Footer/>
        </div>
    );

}