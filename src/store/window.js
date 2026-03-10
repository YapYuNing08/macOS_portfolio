import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '#constants';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        openWindow: (windowKey, data = null) => 
            set((state) => {
                const win = state.windows[windowKey];
                win.isOpen = true;
                win.hasOpened = true;       // ← mount the inner component
                win.zIndex = state.nextZIndex++;  // ← bring to front on open
                win.data = data ?? win.data;
            }),

        closeWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            win.isOpen = false;
            // ← don't touch zIndex here, no need to reset it
            win.data = null; 
        }),

        focusWindow: (windowKey) => set((state) => {
            const win = state.windows[windowKey];
            win.zIndex = state.nextZIndex++;
        }),
    })),
);

export default useWindowStore;