// import { Children } from "react"
import { useState } from "react";
import { MessageContext } from "./MessageContext"

export const MessageProvider = ({ children }) => {

 const [question, setQuestion] = useState("");      
    // จัดการเปลี่ยนค่าคำภาม
  const handleQuestion = (e) => {
    console.log(e);
    setQuestion(e.target.value);
  }

  const [answer, setAnswer] = useState("");
  // จัดการเปลี่ยนค่าคำตอบ
    const handleAnswer = (e) => {
    console.log(e);
    setAnswer(e.target.value);
  }

  return (
    <MessageContext.Provider 
        value={{question, answer, handleQuestion, handleAnswer}}>
        {children}
    </MessageContext.Provider>
   );
};



