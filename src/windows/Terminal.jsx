import { Check, Flag } from "lucide-react";
import { techStack } from "#constants/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";

const Terminal = () => {
    return (
        <div className="w-[600px] h-[500px] bg-white rounded-xl shadow-2xl drop-shadow-2xl overflow-hidden flex flex-col border border-gray-200/50">
            
            <div id="window-header" className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200 shrink-0">
                <WindowControls target="terminal" />
                <h2 className="text-sm font-bold text-gray-400 flex-1 text-center">Tech Stack</h2>
                <div className="w-14 shrink-0"></div>
            </div>

            <div className="p-6 flex-1 overflow-y-auto font-mono text-[13px] bg-white text-gray-800">
                <p className="mb-6">
                    <span className="font-bold">@Yu Ning % </span>
                    show tech stack
                </p>

                {/* Column Headers */}
                <div className="flex font-bold border-b border-dashed border-gray-300 pb-3 mb-4">
                    <p className="w-36 pl-6 text-gray-500">Category</p>
                    <p className="flex-1 text-gray-500">Technologies</p>
                </div>

                {/* Tech Stack List - Now left-aligned in perfect columns! */}
                <ul className="space-y-4 mb-8">
                    {techStack.map((stack, index) => (
                        <li key={index} className="flex items-start">
                            {/* Category Column */}
                            <div className="w-36 flex items-center gap-2 shrink-0">
                                <Check size={16} className="text-[#00A154]" />
                                <h3 className="font-bold text-[#00A154]">{stack.category}</h3>
                            </div>
                            
                            {/* Technologies Column */}
                            <p className="flex-1 text-gray-700 leading-relaxed">
                                {stack.items.join(", ")}
                            </p>
                        </li>
                    ))}
                </ul>

                {/* Footer Metrics */}
                <div className="border-t border-dashed border-gray-300 pt-4 space-y-2">
                    <p className="flex items-center gap-2 text-[#00A154]">
                        <Check size={16} /> {techStack.length} of {techStack.length} stacks loaded successfully (100%)
                    </p>
                    <p className="flex items-center gap-2 text-black font-bold">
                        <Flag size={16} fill="black" />
                        Render time: 6ms
                    </p>
                </div>
            </div>
        </div>
    );
}

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;