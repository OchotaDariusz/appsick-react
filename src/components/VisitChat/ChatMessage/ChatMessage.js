import React from "react";
import "./ChatMessage.css";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function ChatMessage({ author, message, time }) {
  return (
    <li className="list-group-item">
      <span className="author fw-bold">{author}:&nbsp;</span>
      <span className="message">{message}</span>
      <div className="time">
        {formatDistanceToNow(time.toDate(), { addSuffix: true })}
      </div>
    </li>
  );
}
