import Nook from "./08_Nook"

export default function Gallery() {
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-indigo-600 w-full">
            <h1>Gallery</h1>
            {/*Render Tower here */}
            <Nook />
        </div>
    );
}