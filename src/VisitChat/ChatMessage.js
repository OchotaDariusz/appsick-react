import React from "react"

export default function ChatMessage({ author, message, date }) {

  return (
    <li className="list-group-item">
      <span className="author">{author}</span>
      <span className="message">{message}</span>
      <div className="date">{date}</div>
    </li>
  )
}