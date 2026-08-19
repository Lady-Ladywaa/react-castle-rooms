// import Castle from "./components/01_Castle.jsx"
// export default function App() {
//   return (
//     <Castle />
      
//   );
// }


import Castle from "./components/01_Castle";
import { useState, useContext } from "react";

import { MessageContext } from "./context/messageContext/MessageContext";

export default function App() {

  const { question, answer, handleQuestion } = useContext(MessageContext)
  
  return (
    // card ห้อง secret room
    <div className="flex flex-col justify-center items-center min-h-screen bg-slate-900">

      {/* ข้อความจากกล่อง input */}
      <p className="text-purple-800">
        Message for Secret Room:{""}
        <span>{question ? `🛰️ ${question}` : "⌛ Waiting for a message"}</span>
      </p>

  {/* กล่อง input */}
      <textarea
      value={question} 
      onChange={handleQuestion}
      placeholder="Type your message here..."
      className="bg-white text-black rounded px-2 py-1"
      />

              <p className="text-purple-800">
            Message from the Secret Room:{""}
            <span className="text-yellow-800">
                {answer 
                ? `🛰️ ${answer}` 
                : "⌛ Waiting for a message..."}
            </span>
        </p>
    
    

      <Castle />
    </div>
  );
}