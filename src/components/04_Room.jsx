import Hall from "./05_Hall"

export default function Room() {
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-emerald-600 w-full">
            <h1>Room</h1>
            {/*Render Tower here */}
            <Hall />
        </div>
    );
}