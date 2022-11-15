import React, { useState, useEffect } from "react"
import Chatroom from "./Chat"
import ChatMessage from "./ChatMessage";
import InputFields from "../components/InputFields"

const getData = async (endpoint, id) => {
  const response = await fetch(`${endpoint}/${id}`)
  const data = await response.json()
  return data
}

const getVisit = async visitId => {
  return await getData("http://localhost:8080/api/visit", visitId)
}

const getPatient = async patientId => {
  return await getData("http://localhost:8080/api/patient", patientId)
}

let chatroom, messages
export default function VisitChat(props) {

  const updateChat = () => {
    messages = []
    chatroom.getChats(chat => {
      console.log("chat " + chat)
      messages.push(chat)
    })
    setChatMessages(messages)
  }

  useEffect(() => {
    getVisit(props.match.params.visitId)
      .then(visit => {
        getPatient(visit.patient.patientId)
          .then(patient => {
            chatroom = new Chatroom(props.match.params.visitId, `${patient.user.firstName} ${patient.user.lastName}`)
            console.log("use effect update chat now")
            updateChat()
            console.log(chatMessages)
          })
          .catch(err => console.log(err.message))
      })
      .catch(err => console.log(err.message))

  }, [])

  const [chatMessages, setChatMessages] = useState([])
  const [chatMessage, setChatMessage] = useState("")

  const sendMessage = event => {
    event.preventDefault()
    chatroom.addChat(chatMessage)
    console.log("sendMessage update chat now")
    updateChat()
  }

  return (
    <div className="container my-4">
      <h1 className="my-4 text-center">Visit Chat</h1>

      <div className="chat-window">
        <ul className="chat-list | list-group">
          {
            chatMessages.map(
              message => <ChatMessage author={message.author} message={message.message} time={message.date}/>
            )
          }
        </ul>
      </div>

      <form onSubmit={sendMessage} className="new-chat | my-3">
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">Your message:</div>
          </div>
          <InputFields placeholder={"message..."} type={"text"} set={setChatMessage}/>
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </div>
      </form>

    </div>
  );

}