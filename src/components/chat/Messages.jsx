import React, { useEffect, useRef, useState } from "react";
import img from "../../assets/profileAvathar.png";

export default function Messages({
  chat,
  empid,
  empData,
  setSendMessage,
  receiveMessage,
  getUserData,
  empSendMessage,
  empGetMessages,
}) {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scroll = useRef();

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage.chatId === chat._id) {
      setMessages([...messages, receiveMessage]);
    }
  }, [receiveMessage]);

  useEffect(() => {
    if (chat !== null) {
      const userId = chat?.members?.find((id) => id !== empid);
      getUserData(userId).then((res) => {
        setUserData(res.data.userData ? res.data.userData : res.data.empData);
      });
    }
  }, [chat, empid]);
  useEffect(() => {
    if (chat !== null) {
      empGetMessages(chat._id)
        .then((res) => {
          setMessages(res.data.result);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [chat]);
  const handleSend = (e) => {
    e.preventDefault();
    const message = {
      senderId: empData._id,
      text: newMessage,
      chatId: chat._id,
    };
    empSendMessage(message)
      .then((res) => {
        setMessages([...messages, res.data.result]);
        setNewMessage("");
        console.log(messages, "msg");
      })
      .catch((err) => console.log(err));
    // send message to socket server
    const receiverId = chat?.members?.find((id) => id !== empid);
    setSendMessage({ ...message, receiverId });

    //alawys scrol to last msg
  };
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="col-span-6 md:col-span-7 border md:ms-2  shadow-2xl bg-white border-gray-400 rounded-xl w-full ">
      {chat ? (
        <div className="flex flex-col ">
          <div className="flex items-center justify-end shadow-lg border bg-blue-950 border-gray-300  rounded-t-xl pe-7 ">
            <div className="text-xl  font-bold">
              <h1 className="ms-3 text-white ">
                {userData?.name ? userData.name : userData?.cmpName}
              </h1>
            </div>
            <div className="ms-3 my-1">
              <img
                src={userData?.image ? userData.image : img}
                alt="propic"
                className="w-[40px] h-[40px] rounded-full"
              />
            </div>
          </div>

          <div className="overflow-y-auto mx-2 mt-3 h-[400px] max-h-[400px]">
            {messages.map((msg, i) => (
              <div key={i} ref={scroll}>
                {msg.senderId === empid ? (
                  <div className="flex justify-end mb-4 ">
                    <div className="mr-2 py-3 px-4  bg-blue-900 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                      {msg.text}
                    </div>
                    <img
                      src={empData?.image ? empData.image : img}
                      className="object-cover  h-8 w-8 rounded-full"
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="flex justify-start me-5 mb-4">
                    <img
                      src={userData?.image ? userData.image : img}
                      className="object-cover h-8 w-8 rounded-full"
                      alt=""
                    />
                    <div className="ml-2 py-3 px-4 bg-gray-700 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                      {msg.text}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className=" flex justify-center ">
            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="md:w-5/6 w-4/6  bg-gray-100 py-3 px-3 rounded-xl"
              type="text"
              placeholder="type your message here..."
            />
            <button
              onClick={handleSend}
              className="py-2 px-3 ms-2 bg-blue-950 text-white text-lg font-bold rounded-lg"
            >
              send
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center py-2 shadow-lg border bg-blue-950 border-gray-300  rounded-t-xl pe-7 ">
          <div className="text-xl  font-bold">
            <h1 className="ms-3 text-white ">Select a connetion</h1>
          </div>
        </div>
      )}
    </div>
  );
}
