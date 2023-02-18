import React, { useEffect, useState } from "react";
import ChatMessage from "../components/ChatHistory/ChatMessage";
import { getUser } from "../components/Auth/Auth";

export default function ChatHistory(props) {
  const [chatArray, setChatArray] = useState([]);
  const [userId, setUserId] = useState();
  let lastId = null;

  useEffect(() => {
    getUser().then((user) => {
      setUserId(user.id);
    });
  }, []);

  useEffect(() => {
    const getChat = async () => {
      const data = await fetch(
        `${process.env.REACT_APP_BACKEND_HOST}/api/chats/visit/${props.match.params.visitId}`,
        {
          mode: "cors",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      return data.json();
    };

    getChat().then((chat) => {
      setChatArray(chat);
      console.log(chat);
    });
  }, [props.match.params.visitId]);

  const change = (num) => {
    lastId = num;
  };

  return (
    <div
      className="container-fluid col-lg-6 col-md-12 col-sm-12
             mx-auto rounded-5 bg-light text-dark  mt-3 green-shadow p-6 mb-5"
    >
      {chatArray.map((chat, index) => {
        {
          lastId === chat.user.userId
            ? console.log("tak")
            : change(chat.user.id);
        }
        return (
          <div key={index}>
            <div className="p-2 m-0 position-relative m-1 ">
              {chat.user.userId === userId ? (
                <ChatMessage
                  message={chat.message}
                  author={chat.user.firstName + " " + chat.user.lastName}
                  date={chat.date}
                  isUserOwned={true}
                />
              ) : (
                <ChatMessage
                  message={chat.message}
                  author={chat.user.firstName + " " + chat.user.lastName}
                  date={chat.date}
                  image={chat.user.image}
                  isUserOwned={false}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
