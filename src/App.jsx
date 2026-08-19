// import Castle from "./components/01_Castle.jsx"
// export default function App() {
//   return (
//     <Castle />
      
//   );
// }
const [question, setQuestion] = useState("");
const [answer, setAnswer] = useState("");
const [starterPokemon, setStarterPokemon] = useState([]);
const [prisoner, setPrisoner] = useState(null);
const [rescuePokemon, setRescuePokemon] = useState([]);
const [gamePhase, setGamePhase] = useState("idle");
const [podProgress, setPodProgress] = useState(0);
const [showBuildModal, setShowBuildModal] = useState(false);
const [loadError, setLoadError] = useState(false);

import Castle from "./components/01_Castle";
import { useState } from "react";

export default function App() {
  // declare React's state variable
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
    // card ห้อง secret room
    <div className="flex flex-col justify-center items-center gap-4 min-h-screen bg-slate-900">

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
    
    

      <Castle question={question} answer={answer} handleAnswer={handleAnswer} />
    </div>
  );
}