import Tower from "./02_Tower"

export default function Castle() {
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-red-500 w-full">
            <h1 className="text-white">Castle</h1>
            {/*Render Tower here */}
         <Tower /> 
        </div>
    );
}

// import Tower from "./02_Tower.jsx";

// export default function Castle({ question, answer, handleAnswer }) {
//     return (
//         <div className="rounded-[180px] flex flex-col justify-center items-center pt-4 bg-[#0B0C10] w-[70%] scale-90">
                 
//             <Tower 
//                 question={question} 
//                 answer={answer} 
//                 handleAnswer={handleAnswer} 
//             />
//         </div>
//     );
// }