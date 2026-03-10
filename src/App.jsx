import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";
import Dock from "#components/Dock";
import Terminal from "#windows/Terminal";
import Resume from "#windows/Resume";
import Finder from "#windows/Finder";

import useWindowStore from "#store/window";

gsap.registerPlugin(Draggable);

const App = () => {
    const windows = useWindowStore((state) => state.windows);

    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Resume />
            <Finder />
        </main>
    );
};

export default App;