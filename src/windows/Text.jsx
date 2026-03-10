import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import useWindowStore from "#store/window.js";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile.data;

    if (!data) return null;

    return (
        // THE BRICK: Inline styles guarantee the exact 550x600 portrait dimensions
        <div style={{ width: "550px", height: "600px" }} className="flex flex-col bg-white">
            
            {/* Header */}
            <div id="window-header" className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200 shrink-0">
                <WindowControls target="txtfile" />
                <h2 className="text-sm font-bold text-gray-400 flex-1 text-center">
                    {data.name}
                </h2>
                <div className="w-14"></div> 
            </div>

            {/* Content Area */}
            <div className="p-6 flex-1 overflow-y-auto">
                {data.image && (
                    <div className="mb-5 flex justify-center">
                        <img
                            src={data.image}
                            alt={data.name}
                            className="max-w-full max-h-[200px] rounded-lg object-contain shadow-sm"
                        />
                    </div>
                )}

                {data.subtitle && (
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                        {data.subtitle}
                    </h3>
                )}

                {data.description?.map((paragraph, index) => (
                    <p
                        key={index}
                        className="text-sm leading-relaxed text-gray-600 mb-4 last:mb-0"
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
        </div>
    );
};

const TextWindow = WindowWrapper(Text, "txtfile");
export default TextWindow;