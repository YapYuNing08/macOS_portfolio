import useWindowStore from "#store/window.js";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];
        
        const ref = useRef(null);
        const isFirstRender = useRef(true); 

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            if (isOpen) {
                gsap.set(el, { clearProps: "all" });
                el.style.display = windowKey === "resume" ? "flex" : "block";
                
                gsap.fromTo(
                    el, 
                    { scale: 0.8, opacity: 0, y: 40 }, 
                    { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
                );
                isFirstRender.current = false; 
            } else {
                if (isFirstRender.current) {
                    el.style.display = "none";
                    isFirstRender.current = false;
                } else {
                    gsap.to(el, {
                        scale: 0.8, 
                        opacity: 0, 
                        duration: 0.2, 
                        ease: "power1.in", 
                        onComplete: () => {
                            el.style.display = "none";
                            gsap.set(el, { clearProps: "all" });
                        }
                    });
                }
            }
        }, [isOpen]);

        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            const [instance] = Draggable.create(el, { 
                onPress: () => focusWindow(windowKey) 
            });

            return () => instance.kill();
        }, []);

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{
                    zIndex,
                    display: isOpen ? (windowKey === "resume" ? "flex" : "block") : "none",
                    height: "fit-content"
                }}
                className="absolute overflow-hidden rounded-xl"
            >
                <Component {...props} />
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;

    return Wrapped;
}

export default WindowWrapper;