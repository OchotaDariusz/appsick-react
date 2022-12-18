import React, { useState, useEffect } from "react"
import "../components/VisitChat/VisitChat.css"
import Chatroom from "../components/VisitChat/Chatroom"
import ChatMessage from "../components/VisitChat/ChatMessage/ChatMessage"
import { Spinner } from "@chakra-ui/react"

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

let chatroom, messages
export default function VisitChat(props) {

  const [isNewChatMessageLoading, setIsNewChatMessageLoading] = useState(true)
  const [chatMessages, setChatMessages] = useState([])
  const [chatMessage, setChatMessage] = useState("")

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
        chatroom = new Chatroom(
          props.match.params.visitId,
          user.id,
          `${user.firstName} ${user.lastName}`
        )
        updateChat(setChatMessages)
      })
      .catch(err => console.log(err.message))
  }, [props.match.params.visitId])

  const sendMessage = event => {
    event.preventDefault()
    chatroom.addChat(chatMessage)
    document.querySelector("#messageInput").value = ""
  }

  const endVisit = () => {
    chatroom.endVisit(setChatMessages)
  }

  return (
    <div className="container my-4">
      <div className="container-fluid col-6 mx-auto rounded-5 bg-dark text-dark bg-opacity-10 shadow mt-3">
      <h1 className="my-4 text-center">Visit Chat</h1>

      <div className="chat-window">
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

      <form onSubmit={sendMessage} className="new-chat | my-5 pb-3">
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
          <button type="button" className="btn btn-danger" onClick={endVisit}>End Visit</button>
        </div>
      </form>
      </div>

    </div>
  );

}