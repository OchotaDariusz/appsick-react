import React, { useState, useEffect } from "react"
import "../components/VisitChat/VisitChat.css"
import Chatroom from "../components/VisitChat/Chatroom"
import ChatMessage from "../components/VisitChat/ChatMessage/ChatMessage"
import { Spinner } from "@chakra-ui/react"
import {useAuth} from "../components/Auth/Auth";
import doc from '../assets/image/doc.png'
import Footer from "../components/Footer/Footer";
const getUser = async () => {
  const data = await fetch("http://localhost:8080/api/auth/current", {
    credentials: "include"
  })
  try {
    return await data.json()
  } catch (e) {
    console.log(e.message)
    return data
  }
}
const getVisit = async (visitId)=>{
  const data = await fetch(`http://localhost:8080/api/visit/${visitId}`, {
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

  useEffect(() => {
    getUser()
      .then(user => {
        console.log(user)
        setUserName(user.firstName +" "+ user.lastName)

        chatroom = new Chatroom(
          props.match.params.visitId,
          user.id,
          `${user.firstName} ${user.lastName}`
        )
        updateChat(setChatMessages)
      })
      .catch(err => console.log(err.message))

  }, [props.match.params.visitId])

  useEffect(()=>{
    getVisit(props.match.params.visitId)
        .then(visit=>{
          setDoctorName(visit.doctor.user.firstName + " " + visit.doctor.user.lastName )
          setPatientName(visit.patient.user.firstName + " " + visit.patient.user.lastName )
          console.log("visit1")
          console.log(visit)
          console.log(doctorName)
          console.log("visit2")
        })
        .catch(err => console.log(err.message))
  })

  const sendMessage = event => {
    event.preventDefault()
    chatroom.addChat(chatMessage)
    document.querySelector("#messageInput").value = ""
  }

  const endVisit = () => {
    chatroom.endVisit(setChatMessages)
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

        <p>Imię Nazwisko pacjenta:<br/> {doctorName}</p>
          <br/>
        <button type="submit" className="btn btn-secondary">Historia Wizyt</button>
        </div>
        :
        <div className="row">
          <div className="col-8">
            <img src={doc}/>
          </div>
          <div className="col-8">
            <p>Lekarz prowadzący:<br/> {patientName}</p>
            <br/>
            <br/>
            <h3> About</h3>
            <p>Jakiś text o lekarzu z bazy to trzeba by wrzucić :D
              Jakiś text o lekarzu z bazy to trzeba by wrzucić :D
              Jakiś text o lekarzu z bazy to trzeba by wrzucić :D
            </p>
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
                <li className="list-group-item"><Spinner /></li> :
                chatMessages.map(
                    (message, index) => <ChatMessage
                        author={message.author}
                        message={message.message}
                        time={message.date}
                        key={index}/>
                )
          }
          {(isNewChatMessageLoading) ? <li className="list-group-item"><Spinner /></li> : ""}
        </ul>
      </div>

      <form onSubmit={sendMessage} className="new-chat px-4 py-4 | my-5 pb-3">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="message__label | input-group-text">Your message:</span>
          </div>
          <input placeholder="message..." className="form-control" type="text" id="messageInput"
                 onChange={e => setChatMessage(e.target.value)}/>
          <div className="input-group-append">
            <button type="submit" className="btn__chat | btn btn-primary">Send</button>
          </div>
        </div>
        <div className="d-flex justify-content-center my-2">
          {auth.role !== "PATIENT" ? <button type="button" className="btn btn-danger" onClick={endVisit}>End Visit</button>
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