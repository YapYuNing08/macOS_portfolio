import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import useWindowStore from "#store/window.js";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile.data;

    if (!data) return null;

    return (
        // THE BRICK: A nice 700x500 landscape shape, perfect for most images
        <div style={{ width: "700px", height: "500px" }} className="flex flex-col bg-white">
            
            {/* Header: Clean and perfectly centered */}
            <div id="window-header" className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200 shrink-0">
                <WindowControls target="imgfile" />
                <h2 className="text-sm font-bold text-gray-400 flex-1 text-center truncate px-4">
                    {data.name}
                </h2>
                <div className="w-14 shrink-0"></div> 
            </div>

            {/* Content Area: Subtle gray background makes the image pop */}
            <div className="flex-1 overflow-hidden flex items-center justify-center bg-gray-100 p-6">
                {data.imageURL && (
                    <img
                        src={data.imageURL}
                        alt={data.name}
                        // Drop-shadow gives the image a nice physical depth inside the window
                        className="max-w-full max-h-full object-contain drop-shadow-md rounded-sm"
                    />
                )}
            </div>
        </div>
    );
};

const ImageWindow = WindowWrapper(Image, "imgfile");
export default ImageWindow;