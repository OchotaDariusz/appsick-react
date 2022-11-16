import React, { useState, useEffect } from "react"
import Chatroom from "./Chat"
import ChatMessage from "./ChatMessage";

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

  const updateChat = (setterFn) => {
    messages = []
    chatroom.getChats(chat => {
      messages.push(chat)
    }, setterFn)
      .then(() => {
        setChatMessages(messages)
      })
  }

  const [chatMessages, setChatMessages] = useState([])
  const [chatMessage, setChatMessage] = useState("")

  useEffect(() => {
    getVisit(props.match.params.visitId)
      .then(visit => {
        getPatient(visit.patient.patientId)
          .then(patient => {
            chatroom = new Chatroom(props.match.params.visitId, `${patient.user.firstName} ${patient.user.lastName}`)
            updateChat(setChatMessages)
          })
          .catch(err => console.log(err.message))
      })
      .catch(err => console.log(err.message))

  }, [props.match.params.visitId])


  const sendMessage = event => {
    event.preventDefault()
    chatroom.addChat(chatMessage)
    document.querySelector("#messageInput").value = ""
  }

  const endVisit = () => {
    chatroom.endVisit()
  }

  return (
    <div className="container my-4">
      <h1 className="my-4 text-center">Visit Chat</h1>

      <div className="chat-window">
        <ul className="chat-list | list-group">
          {
            chatMessages.map(
              (message, index) => <ChatMessage
                author={message.author}
                message={message.message}
                time={message.date}
                key={index}/>
            )
          }
        </ul>
      </div>

      <form onSubmit={sendMessage} className="new-chat | my-5 pb-3">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">Your message:</span>
          </div>
            <input placeholder="message..." className="form-control" type="text" id="messageInput" onChange={e=>setChatMessage(e.target.value)} />
            {/*<InputFields placeholder={"message..."} type={"text"} set={setChatMessage}/>*/}
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary">Send</button>
          </div>
        </div>
        <div className="d-flex justify-content-center my-2">
          <button className="btn btn-danger" onClick={endVisit}>End Visit</button>
        </div>
      </form>


    </div>
  );

}