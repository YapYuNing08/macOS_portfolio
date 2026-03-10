import useWindowStore from "#store/window.js";
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { focusWindow, windows } = useWindowStore();
        const { isOpen, zIndex, hasOpened } = windows[windowKey];
        
        const ref = useRef(null);
        const isFirstRender = useRef(true); 

        // 1. Handle zIndex
        useEffect(() => {
            const el = ref.current;
            if (!el) return;
            el.style.zIndex = zIndex;
        }, [zIndex]);

        // 2. Handle open/close animation
        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            if (isOpen) {
                gsap.set(el, { clearProps: "transform,opacity" }); 
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
                            gsap.set(el, { clearProps: "transform,opacity" });
                        }
                    });
                }
            }
        }, [isOpen]); 

        // 3. THE TIMING FIX: Handle Draggable
        useGSAP(() => {
            const el = ref.current;
            
            // Wait! Don't run GSAP until the inner component actually exists in the DOM
            if (!el || !hasOpened) return;

            const header = el.querySelector("#window-header");

            const [instance] = Draggable.create(el, { 
                trigger: header, // Now it successfully finds the header!
            });

            return () => instance.kill();
            
        // We added hasOpened here so it triggers at the exact right millisecond!
        }, [hasOpened]); 

        return (
            <section 
                id={windowKey} 
                ref={ref} 
                onPointerDown={() => focusWindow(windowKey)}
                style={{ zIndex, display: "none", height: "fit-content" }}
                className="absolute overflow-hidden rounded-xl"
            >
                {hasOpened && <Component {...props} />}
            </section>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;

    return Wrapped;
}

export default WindowWrapper;