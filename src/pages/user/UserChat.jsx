
import React, { useEffect, useState, useRef } from "react";


import ChatList from "../../components/chat/ChatList";
import Messages from "../../components/chat/Messages";
import { useSelector } from "react-redux";

import { userChats,userGetEmpDetails,userSendMessage,userGetMessages } from '../../Services/userApi'; 
import socketInstance from "../../socket/socket";

export default function UserChat() {
    const [chats, setChats] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
   
    const userData = useSelector((state) => state.user.userData);
    const [currentChat, setCurrentChat] = useState(null);
    const [sendMessage, setSendMessage] = useState(null);
    const [receiveMessage, setReceiveMessage] = useState(null);
  
    const socket = useRef();

    useEffect(() => {
    userChats(userData._id)
        .then((res) => {
          setChats(res.data.chat);
          
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    useEffect(() => {
      socket.current = socketInstance;
      socket.current.emit("add-new-user", userData._id);
      socket.current.on("get-users", (users) => {
        setOnlineUsers(users);
        // console.log(onlineUsers);
      });
    }, [userData]);
    //send message to socket server
    useEffect(() => {
      if (sendMessage !== null) {
        socket.current.emit("send-message", sendMessage);
      }
    }, [sendMessage]);
  
    //receiving message from socket server
    useEffect(() => {
      socket.current.on("receive-message", (data) => {
        // console.log(data,"socket");
        setReceiveMessage(data);
      });
    }, []);
      

  return (
    <div>
    <div className="grid grid-cols-9 md:mx-32 mt-14 ">
      <div className="md:col-span-2 col-span-3 border shadow-lg border-gray-400 h-[530px] rounded-xl bg-white">
        <div className="flex flex-col">
          <div className="bg-blue-950 rounded-t-xl ">
            <h1 className="md:text-2xl text-center text-white font-bold px-2 py-2">
              CONNECTIONS
            </h1>
          </div>
          <div className="overflow-y-hidden  max-h-[440px] p-2 mt-2">
            {chats.map((chat, i) => (
              <div key={i} onClick={() => setCurrentChat(chat)}>
                <ChatList data={chat} empid={userData._id} getUserData={userGetEmpDetails } />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Messages
        chat={currentChat}
        empid={userData._id}
        setSendMessage={setSendMessage}
        receiveMessage={receiveMessage}
        getUserData={userGetEmpDetails}
          empSendMessage={userSendMessage}
          empGetMessages={userGetMessages}
          empData={userData}
      />
    </div>
  </div>
  )
}
