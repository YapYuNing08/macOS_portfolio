import { Check, Flag } from "lucide-react";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";

const Terminal = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="terminal" />
                <h2>Tech Stack</h2>
            </div>

            <div className="techstack">
                    <p>
                        <span className="font-bold">@Yu Ning % </span>
                        show tech stack
                    </p>
                

                <div className="label">
                    <p className="w-32">Category</p>
                    <p>Technologies</p>
                </div>

                <ul className="content">
                    {activeLocation?.children?.map((item) => (
                        <li 
                        key={item.id} 
                        className={item.position}
                        onClick={() => openItem(item)}
                        >
                        <img src={item.icon} alt={item.name} />
                        <p>{item.name}</p>
                        </li>
                    ))}
                    </ul>

                <div className="footnote">
                    <p>
                        <Check size={20} /> 5 of 5 stacks loaded successfully (100%)
                    </p>

                    <p className="text-black">
                        <Flag size={15} fill="black" />
                        Render time: 6ms
                    </p>
                </div>
            </div>
        </>
    );
}

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;