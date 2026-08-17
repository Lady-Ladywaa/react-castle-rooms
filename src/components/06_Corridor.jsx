import Gallery from "./07_Gallery"

export default function Corridor() {
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-blue-500 w-full">
            <h1>Corridor</h1>
            {/*Render Tower here */}
            <Gallery />
        </div>
    );
}