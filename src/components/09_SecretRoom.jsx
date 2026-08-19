import { useContext } from "react";
import { MessageContext } from "../context/messageContext/MessageContext"

export default function SecretRoom() {
    
   const { question, answer, handleAnswer } = useContext(MessageContext) 
    
    return (
        <div className=" flex flex-col justify-center items-center pt-10
         bg-black w-[90%]">
            <div className="flex flex-col items-center mb-6">
                <h2 className="font-bold text-3xl mt-4 text-white tracking-wide">SecretRoom</h2>
            
        {/* ข้อความจากกล่อง input */}
        <p className="text-purple-800">
            Message from Earth:{""}
            <span>{question
                ? `🌏 ${question}` 
                : "⌛ Waiting for a message..."}
            </span>
        </p>

                 {/* กล่อง input */}
      <textarea
      value={answer} 
      onChange={handleAnswer}
      placeholder="Type your message here..."
      className="bg-white text-black rounded px-2 py-1"
      />


        <p className="text-purple-800">
            Reply to Earth:{""}
            <span className="text-purple-800">
                {answer 
                ? `🌏 ${answer}` 
                : "⌛ Waiting for a message..."}
            </span>
        </p>

   
            </div>
        </div>
    );
}