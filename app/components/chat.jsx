import React, { useState, useEffect, useRef } from "react";
import Message from "./message.jsx";
import { db } from "../firebase.js";
import {query, collection, orderBy, onSnapshot} from "firebase/firestore";

const style = {
  wrapper: `flex flex-col p-[10px] relative`,
};

const chat = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef();

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("timestamp"));

        const unSubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
        });
        return () => unSubscribe();
    }, []);

  return (
    <>
      <div className={style.wrapper}>

        {messages && messages.map((message) => (<Message key={message.id} message={message} />))}

     
      </div>
      {/*Send Message*/}
      <span ref={scroll}></span>
    </>
  );
};

export default chat;
