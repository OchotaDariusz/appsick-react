import React, { useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function ChatMessage(props) {
  const [author, setAuthor] = useState("");
  const [whenSent, setWhenSent] = useState("");
  const viewMessageDetails = () => {
    if (author === "") {
      setAuthor(props.author);
      setWhenSent(
        formatDistanceToNow(new Date(props.date), { addSuffix: true })
      );
    } else {
      setAuthor("");
      setWhenSent("");
    }
  };

  if (props.isUserOwned) {
    return (
      <div className="row">
        <div className="col-8 d-grid">
          <div onClick={viewMessageDetails}>
            <span
              className="bg-secondary rounded text-white p-3"
              style={{ float: "left", cursor: "pointer" }}
            >
              {props.message}{" "}
            </span>
          </div>
          <div>
            <span style={{ float: "left", cursor: "pointer" }}>{author}</span>
          </div>
          <div>
            <span style={{ float: "left", cursor: "pointer" }}>{whenSent}</span>
          </div>
        </div>
        <div className="col-2" />
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-5"></div>
      <div className="col-7 d-grid">
        <div onClick={viewMessageDetails}>
          <span
            className="bg-primary rounded text-white p-3"
            style={{ float: "right", cursor: "pointer" }}
          >
            {props.message}{" "}
          </span>
        </div>
        <div>
          <span style={{ float: "right", cursor: "pointer" }}>{author}</span>
        </div>
        <div>
          <span style={{ float: "right", cursor: "pointer" }}>{whenSent}</span>
        </div>
      </div>
    </div>
  );
}
