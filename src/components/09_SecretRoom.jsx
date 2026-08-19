// export default function SecretRoom() {
//   return (
//     <div className="flex flex-col justify-center items-center pt-10 bg-slate-800 w-full">
//       <h2 className="font-bold">Secret Room</h2>
//       <p className="font-bold">
//         Message From The Outside: <span>✅hello?</span>
//       </p>
//     </div>
//   );
// }

export default function SecretRoom({ question, answer, handleAnswer }) {
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-black w-[90%]">
            <div className="flex flex-col items-center gap-4 mb-6">
                <h2 className="font-bold text-3xl mt-4 text-white tracking-wide">SecretRoom</h2>
            
        {/* ข้อความจากกล่อง input */}
      
        <p className="text-purple-800">
            Message from outside:{""}
            <span className="text-purple-800">
                {answer 
                ? `🌏 ${answer}` 
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

      <p className="text-green-500"> Your reply: <span>...</span></p>

            </div>
        </div>
    );
}