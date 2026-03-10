import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";
import Dock from "#components/Dock";
import Terminal from "#windows/Terminal";
import Resume from "#windows/Resume";

import useWindowStore from "#store/window";

gsap.registerPlugin(Draggable);

const App = () => {
    const windows = useWindowStore((state) => state.windows);

    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            {windows.terminal.isOpen && <Terminal />}
            {windows.resume.isOpen && <Resume />}
        </main>
    );
};

export default App;